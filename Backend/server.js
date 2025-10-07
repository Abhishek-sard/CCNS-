import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import VacancyRoutes from "./routes/vacancyRoutes.js";
import connectDB from "./config/db.js";
import rateLimit from "express-rate-limit";
import emailRoutes from "./routes/emailRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import authRoutes from "./routes/auth.js";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import blogRoutes from "./routes/blogRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

// connect database
connectDB();

// ✅ Initialize app before using it
const app = express();

// ✅ Middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(express.json());

// ✅ Rate limiting
const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 60 * 60 * 1000, // 1 hour
  max: Number(process.env.RATE_LIMIT_MAX) || 10, // 10 requests/hour
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api/email", limiter);

// ✅ Routes
app.use("/api/vacancies", VacancyRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/auth", authRoutes);
app.use("/blogs", blogRoutes);

// ✅ Health Check
app.get("/", (req, res) => res.send("Email backend running"));

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
