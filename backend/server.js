import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 4000;

const app = express();

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://sasatracker:Mombasa001@cluster0.g4lxwlf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello|World");
});

app.listen(PORT, () => {
  console.log("Server is running ar http://localhost:4000");
});
