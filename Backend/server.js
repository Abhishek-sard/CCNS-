import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import VacancyRoutes from "./routes/vacancyRoutes.js";
import connectDB from "./config/db.js";
import rateLimit from "express-rate-limit";
import emailRoutes from "./routes/emailRoutes.js";       
import enquiryRoutes from "./routes/enquiryRoutes.js";  
import authRoutes from "./routes/auth.js";

dotenv.config();

// connect database
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); 

// Rate limiting (basic, for general email API)
const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 60 * 60 * 1000, // default 1 hour
  max: Number(process.env.RATE_LIMIT_MAX) || 10, // default 10 requests per hour
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api/email", limiter);

// Routes
app.use("/api/vacancies", VacancyRoutes);
app.use("/api/email", emailRoutes);      
app.use("/api/enquiry", enquiryRoutes);  
app.use("/api/auth", authRoutes);

// basic health check
app.get("/", (req, res) => res.send("Email backend running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
