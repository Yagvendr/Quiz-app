import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctOption: Number,
  points: Number,
});

export default mongoose.model("Question", questionSchema);
