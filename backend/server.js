import express from "express";
import { Resend } from "resend";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CONTACT_EMAIL = process.env.EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);
const normalizeOrigin = (value) => value.trim().replace(/\/+$/, "").toLowerCase();
const allowedOrigins = new Set(
  (process.env.FRONTEND_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean)
    .map(normalizeOrigin)
);
const allowVercelPreview = process.env.ALLOW_VERCEL_PREVIEW === "true";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateContactPayload = ({ name, email, message }) => {
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return "Invalid request payload";
  }

  const normalizedName = name.trim();
  const normalizedEmail = email.trim();
  const normalizedMessage = message.trim();

  if (!normalizedName || !normalizedEmail || !normalizedMessage) {
    return "All fields are required";
  }

  if (normalizedName.length > 100) {
    return "Name is too long";
  }

  if (normalizedEmail.length > 254 || !emailRegex.test(normalizedEmail)) {
    return "Invalid email format";
  }

  if (normalizedMessage.length > 2000) {
    return "Message is too long";
  }

  return null;
};

app.disable("x-powered-by");

app.set("trust proxy", 1);

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

const corsOptions = {
  origin(origin, callback) {
    if (!origin) {
      callback(null, true);
      return;
    }

    const normalizedOrigin = normalizeOrigin(origin);
    const isAllowedVercelPreview =
      allowVercelPreview && /^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(normalizedOrigin);

    if (allowedOrigins.has(normalizedOrigin) || isAllowedVercelPreview) {
      callback(null, true);
      return;
    }

    console.warn("CORS blocked origin:", origin);
    callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "OPTIONS"],
};

app.options(/.*/, cors(corsOptions));
app.use(cors(corsOptions));

app.use(express.json({ limit: "10kb" }));

const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many requests, please try again later" },
});

app.get("/test", (req, res) => {
  res.status(200).send("Hello from the backend!");
});

app.post("/contact", contactRateLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  const validationError = validateContactPayload({ name, email, message });
  if (validationError) {
    res.status(400).json({ message: validationError });
    return;
  }

  if (!CONTACT_EMAIL || !RESEND_API_KEY) {
    res.status(500).json({ message: "Email service is not configured" });
    return;
  }

  try {
    const normalizedName = name.trim();
    const normalizedEmail = email.trim();
    const normalizedMessage = message.trim();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: CONTACT_EMAIL,
      subject: "New Contact Message",
      text: `
        Name: ${normalizedName}
        Email: ${normalizedEmail}
        Message: ${normalizedMessage}
      `,
      replyTo: normalizedEmail,
    });

    res.status(200).json({ message: "Message sent successfully" });

  } catch (error) {
    console.error("Contact form sendMail failed:", {
      name: error?.name,
      message: error?.message,
      code: error?.code,
      statusCode: error?.statusCode,
    });
    res.status(500).json({ message: "Error sending message" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});