import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  resume: String, // store file name
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Application", applicationSchema);