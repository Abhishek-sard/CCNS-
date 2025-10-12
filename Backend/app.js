import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import rateLimit from "express-rate-limit";

import VacancyRoutes from "./routes/vacancyRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import authRoutes from "./routes/auth.js";
import blogRoutes from "./routes/blogRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";

const app = express();

// Enable CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "https://ccnss.novaitsolutionnp.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "uploads" directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// ✅ Rate Limiting (for email routes)
const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 60 * 60 * 1000, // default 1 hour
  max: Number(process.env.RATE_LIMIT_MAX) || 100, // default 100 requests per window
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api/email", limiter);

// ✅ Routes
app.use("/api/vacancies", VacancyRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/team", teamRoutes);

// ✅ Health Check
app.get("/", (req, res) => {
  res.send("✅ Backend server running successfully");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  await connectDB();
});

export default app;
