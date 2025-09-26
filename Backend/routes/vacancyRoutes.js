import express from 'express';

import {
    getVacancies,
    createVacancy,
    updateVacancy,
    deleteVacancy,
} from "../controllers/vacancyController.js";


const router = express.Router();

router.get("/", getVacancies);
router.post("/", createVacancy);
router.put("/:id", updateVacancy);
router.delete("/:id", deleteVacancy);


export default router;