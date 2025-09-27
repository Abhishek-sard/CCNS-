import express from "express";
import { sendEmail } from "./emailController.js";
import rateLimit from "express-rate-limit";

const router = express.Router();

// Rate limiter
const emailLimiter = rateLimit({
  windowMs: process.env.RATE_LIMIT_WINDOW_MS,
  max: process.env.RATE_LIMIT_MAX,
  message: "Too many email requests, please try again later.",
});

// POST route to send email
router.post("/send-email", emailLimiter, sendEmail);

export default router;
