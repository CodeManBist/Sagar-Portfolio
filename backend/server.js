import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

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

  console.log("Contact submission received:", submission);

  return response.status(201).json({
    message: "Thanks. Your message has been received.",
  });
});

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`);
});