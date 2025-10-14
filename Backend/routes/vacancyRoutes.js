import express from 'express';

import {
    getVacancies,
    getVacancyById,
    createVacancy,
    updateVacancy,
    deleteVacancy,
} from "../controllers/vacancyController.js";
import upload from "../Middleware/uploadMiddleware.js";


const router = express.Router();

router.get("/", getVacancies);
router.get("/:id", getVacancyById);
router.post("/", upload.single("image"), createVacancy);
router.put("/:id", updateVacancy);
router.delete("/:id", deleteVacancy);


export default router;