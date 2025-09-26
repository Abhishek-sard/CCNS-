import mongoose from "mongoose";

const vacancySchema = new mongoose.Schema({
    title: {type: String, required: true},
    department: {type: String, required: true},
    location: {type: String, required: true},
    description: {type: String, required: true},
    requirements: {type: String, required: false},
},
{timestamps: true}
);


const vacancy = mongoose.model("Vacancy", vacancySchema);
export default vacancy;