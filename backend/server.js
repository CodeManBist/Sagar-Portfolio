import express from "express";
import nodemailer from "nodemailer";
import dns from "dns";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

dotenv.config();

dns.setDefaultResultOrder("ipv4first");

const app = express();
const PORT = process.env.PORT || 5000;
const CONTACT_EMAIL = process.env.EMAIL;
const CONTACT_EMAIL_PASSWORD = process.env.PASSWORD;
const allowedOrigins = (process.env.FRONTEND_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

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

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  family: 4,
  auth: {
    user: CONTACT_EMAIL,
    pass: CONTACT_EMAIL_PASSWORD,
  },
});

app.disable("x-powered-by");

app.set("trust proxy", 1);

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, true);
        return;
      }

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    methods: ["POST"],
  })
);

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

  if (!CONTACT_EMAIL || !CONTACT_EMAIL_PASSWORD) {
    res.status(500).json({ message: "Email service is not configured" });
    return;
  }

  try {
    const normalizedName = name.trim();
    const normalizedEmail = email.trim();
    const normalizedMessage = message.trim();

    await transporter.sendMail({
      from: CONTACT_EMAIL,
      replyTo: normalizedEmail,
      to: CONTACT_EMAIL,
      subject: "New Contact Message",
      text: `
        Name: ${normalizedName}
        Email: ${normalizedEmail}
        Message: ${normalizedMessage}
      `,
    });

    res.status(200).json({ message: "Message sent successfully" });

  } catch (error) {
    console.error("Contact form sendMail failed:", {
      name: error?.name,
      message: error?.message,
      code: error?.code,
      responseCode: error?.responseCode,
      command: error?.command,
    });
    res.status(500).json({ message: "Error sending message" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});