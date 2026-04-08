import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;
const DUPLICATE_WINDOW_MS = 10000;
let lastSubmission = { signature: "", timestamp: 0 };

app.use(cors());
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ ok: true });
});

app.post("/api/contact", (request, response) => {
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