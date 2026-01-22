import express from "express";
import Quiz from "../models/Quiz.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const quiz = await Quiz.findOne(); // ONE document
    if (!quiz) {
      return res.status(404).json({ message: "No quiz found" });
    }

    res.json(quiz.questions); // ✅ SEND ARRAY ONLY
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
