import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import TransactionsApi from "./routes/TransactionsApi.js";
import connectDB from "./database/mongodb.js";

const PORT = 4000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/transaction", TransactionsApi);

connectDB();

app.listen(PORT, () => {
  console.log("Server is running ar http://localhost:4000");
});
