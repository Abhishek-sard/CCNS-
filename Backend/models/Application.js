import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  resume: String,
  vacancyTitle: String,
  jobType: String,
  date: { type: Date, default: Date.now },
});

const Application =
  mongoose.models.Application || mongoose.model("Application", applicationSchema);

export default Application;
