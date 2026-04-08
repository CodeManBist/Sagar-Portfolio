import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;
const DUPLICATE_WINDOW_MS = 10000;
let lastSubmission = { signature: "", timestamp: 0 };

const REQUEST_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;
const ipRequestWindow = new Map();

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.disable("x-powered-by");

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("CORS origin not allowed"));
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json({ limit: "10kb" }));

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const rateLimitByIp = (request, response, next) => {
  const key = request.ip || request.headers["x-forwarded-for"] || "unknown";
  const now = Date.now();
  const current = ipRequestWindow.get(key);

  if (!current || now - current.start > REQUEST_WINDOW_MS) {
    ipRequestWindow.set(key, { start: now, count: 1 });
    next();
    return;
  }

  if (current.count >= MAX_REQUESTS_PER_WINDOW) {
    response.status(429).json({
      message: "Too many requests. Please wait and try again.",
    });
    return;
  }

  current.count += 1;
  ipRequestWindow.set(key, current);
  next();
};

app.get("/api/health", (_request, response) => {
  response.json({ ok: true });
});

app.post("/api/contact", rateLimitByIp, (request, response) => {
  const { name, email, message } = request.body ?? {};

  if (!name || !email || !message) {
    return response.status(400).json({
      message: "Name, email, and message are required.",
    });
  }

  const submission = {
    name: String(name).trim(),
    email: String(email).trim(),
    message: String(message).trim(),
    receivedAt: new Date().toISOString(),
  };

  if (submission.name.length < 2 || submission.name.length > 80) {
    return response.status(400).json({
      message: "Please enter a valid name.",
    });
  }

  if (!isValidEmail(submission.email) || submission.email.length > 254) {
    return response.status(400).json({
      message: "Please enter a valid email address.",
    });
  }

  if (submission.message.length < 5 || submission.message.length > 2000) {
    return response.status(400).json({
      message: "Message must be between 5 and 2000 characters.",
    });
  }

  const signature = JSON.stringify({
    name: submission.name,
    email: submission.email,
    message: submission.message,
  });
  const now = Date.now();

  if (signature === lastSubmission.signature && now - lastSubmission.timestamp < DUPLICATE_WINDOW_MS) {
    return response.status(202).json({
      duplicate: true,
      message: "Duplicate submission ignored.",
    });
  }

  lastSubmission = {
    signature,
    timestamp: now,
  };

  return response.status(201).json({
    duplicate: false,
    message: "Thanks. Your message has been received.",
  });
});

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`);
});