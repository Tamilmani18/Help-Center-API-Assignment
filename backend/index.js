import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import CardRoute from "./routes/CardRoute.js";

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const app = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
  res.send({ message: "Health ok!!" });
});

// default route path
app.use("/", CardRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
