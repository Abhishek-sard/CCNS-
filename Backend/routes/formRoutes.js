import express from 'express';
import multer from'multer';
import NdisForm from '../models/NdisForm';


const router = express.Router();

//File Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => (null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage: storage});

//submit form route

router.post("/submit", upload.single("file"), async (req, res) => {
    try {
        const data = req.body;

        const form = new NdisForm({
            ...data,
            uploadedFile: req.file ? req.file.filename : null,
        });

        await form.save();

        res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {

        console.log(err);
        res.status(500).json({error: "Failed to submit form"});
        
    }
});

//Dashboard (All submission)
router.get("/all", async (req, res) => {
    const forms = (await NdisForm.find()).toSorted({createdAt: -1});
    res.json(forms);
});

export default router;