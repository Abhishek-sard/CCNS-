import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Routes
import VacancyRoutes from "./routes/vacancyRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import authRoutes from "./routes/auth.js";
import blogRoutes from "./routes/blogRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import connectDB from "./config/db.js";
import rateLimit from "express-rate-limit";

dotenv.config();
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// ✅ Allowed Origins - Updated for production
const allowedOrigins = [
  "https://ccns.novaitsolutionnp.com", // production frontend - confirmed
  "https://ccna.novaitsolutionnp.com", // alternative production frontend
  "https://ccna-agency.novaitsolutionnp.com", // another possible frontend domain
  "http://localhost:5173", // local frontend
  "http://localhost:5174", // local frontend alternative port
  "http://localhost:5175", // local frontend alternative port
  "http://localhost:3000", // alternative local frontend port
];

// ✅ Global CORS Middleware - Enhanced for production
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Check if origin is in allowed list
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    // Allow any novaitsolutionnp.com subdomain for production
    if (origin.includes('novaitsolutionnp.com')) {
      return callback(null, true);
    }
    
    // Log the blocked origin for debugging
    console.log('CORS blocked origin:', origin);
    callback(new Error("CORS not allowed for this origin: " + origin));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  optionsSuccessStatus: 200
}));

// ✅ Middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// ✅ Rate Limiting (for email routes)
const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 60 * 60 * 1000, // default 1 hour
  max: Number(process.env.RATE_LIMIT_MAX) || 100, // default 100 requests per window
  message: "Too many requests from this IP, please try again later."
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

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
