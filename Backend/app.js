import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
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
import staffingRoutes from "./routes/staffingRoutes.js";
import branchRoutes from "./routes/branchRoutes.js"; 

dotenv.config();
const app = express();

// ============================================
// ✅ 1. Global CORS middleware (supports cPanel)
// ============================================
const allowedOrigins = [
  "http://localhost:5173",
  "https://ccns.novaitsolutionnp.com",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

// Also register CORS for Express (as backup)
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// ============================================
// ✅ 2. Core Middlewares
// ============================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Static uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// ============================================
// ✅ 3. Rate Limiting (for email routes only)
// ============================================
const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 60 * 60 * 1000, // 1 hour
  max: Number(process.env.RATE_LIMIT_MAX) || 100, // 100 requests/hour
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api/email", limiter);

// ============================================
// ✅ 4. API Routes
// ============================================
app.use("/api/vacancies", VacancyRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/staffing", staffingRoutes);
app.use("/api/branches", branchRoutes);


// ============================================
// ✅ 5. Health Check
// ============================================
app.get("/", (req, res) => {
  res.send("✅ Backend server running successfully");
});

// ============================================
// ✅ 6. Start Server
// ============================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;
