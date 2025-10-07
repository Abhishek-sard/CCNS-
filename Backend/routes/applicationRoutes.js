import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const applicationSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    resume: String,
    message: String,
    date: {type: Date, default:Date.now},
});

const Application = mongoose.model("Application", applicationSchema);


//POST - submit form
router.post("/", async(req,res) => {
    try {
        const application = new Application(req.body);
        await application.save();
        res.status(201).json({message: "Application submitted successfully"});
        
    } catch (error) {
        res.status(500).json({message: "Error submitting form"})
        
    }
})

//GET - get all applications
router.get("/", async(req,res) => {
    try {
        const applications = (await Application.find()).toSorted({date: -1});
        res.json(applications);
        
    } catch (error) {
        res.status(500).json({message: "Error getting applications"});
        
    }
})
export default router;