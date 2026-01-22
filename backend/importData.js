 import mongoose from "mongoose";
import fs from "fs";
import dotenv from "dotenv";
import Question from "./models/Question.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    const data = JSON.parse(
      fs.readFileSync("./data/questions.json", "utf-8")
    );

    await Question.deleteMany();
    await Question.insertMany(data.questions);

    console.log("Data imported successfully");
    process.exit(0);
  })
  .catch(err => {
    console.error("MongoDB error:", err);
    process.exit(1);
  });
