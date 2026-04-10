import express from "express";
import cors from "cors";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const loadEnvFile = (filePath) => {
  if (!existsSync(filePath)) {
    return;
  }

  const envFile = readFileSync(filePath, "utf8");
  const lines = envFile.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, equalsIndex).trim();
    const value = trimmed.slice(equalsIndex + 1).trim();

    if (key && !process.env[key]) {
      process.env[key] = value.replace(/^['\"]|['\"]$/g, "");
    }
  }
};

loadEnvFile(resolve(process.cwd(), ".env"));

const app = express();
const port = process.env.PORT || 3001;
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
const DUPLICATE_WINDOW_MS = 10000;
let lastSubmission = { signature: "", timestamp: 0 };

const REQUEST_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;
const ipRequestWindow = new Map();

const allowedOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);

      // allow exact matches
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // ✅ allow ALL vercel deployments
      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      return callback(new Error("CORS origin not allowed"));
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json({ limit: "10kb" }));

app.use((request, _response, next) => {
  if (request.url.includes("//")) {
    request.url = request.url.replace(/\/{2,}/g, "/");
  }
  next();
});

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

const verifyTurnstileToken = async (token, remoteIp) => {
  if (!TURNSTILE_SECRET_KEY) {
    return { success: false, message: "Captcha verification failed. Please try again." };
  }

  const payload = new URLSearchParams();
  payload.set("secret", TURNSTILE_SECRET_KEY);
  payload.set("response", token);
  if (remoteIp) {
    payload.set("remoteip", remoteIp);
  }

  const turnstileResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload.toString(),
  });

  if (!turnstileResponse.ok) {
    return { success: false, message: "Captcha verification failed. Please try again." };
  }

  const result = await turnstileResponse.json();
  if (!result.success) {
    return { success: false, message: "Captcha verification failed. Please try again." };
  }

  return { success: true };
};

app.get("/", (_req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/api/health", (_request, response) => {
  response.json({ ok: true });
});

app.post("/api/contact", rateLimitByIp, async (request, response) => {
  const { name, email, message, captchaToken } = request.body ?? {};

  if (!name || !email || !message || !captchaToken) {
    return response.status(400).json({
      message: "Name, email, message, and captcha are required.",
    });
  }

  try {
    const captchaVerification = await verifyTurnstileToken(
      String(captchaToken),
      request.ip || request.headers["x-forwarded-for"]
    );

    if (!captchaVerification.success) {
      return response.status(400).json({
        message: captchaVerification.message,
      });
    }
  } catch {
    return response.status(500).json({
      message: "Unable to verify captcha. Please try again.",
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