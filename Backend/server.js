import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import VacancyRoutes from "./routes/vacancyRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

//  connect database
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/vacancies", VacancyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
