import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  resume: String, // store file name
});

export default mongoose.model("Application", applicationSchema);