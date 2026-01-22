import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  questions: [
    {
      question: String,
      options: [String],
      correctOption: Number,
      points: Number,
    },
  ],
});

export default mongoose.model("Quiz", quizSchema, "question");
