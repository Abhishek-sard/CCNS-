import mongoose from "mongoose";

const vacancySchema = new mongoose.Schema({
    title: { type: String, required: true },
    department: { type: String, required: true }, // Acts as Category
    location: { type: String, required: true },
    jobType: { type: String, required: true }, // e.g., Permanent, Temporary
    publishedDate: { type: Date, default: Date.now },
    description: { type: String, required: true },
    requirements: { type: String, required: false },
    image: { type: String, required: false }, // stored filename
},
    { timestamps: true }
);


const vacancy = mongoose.model("Vacancy", vacancySchema);
export default vacancy;