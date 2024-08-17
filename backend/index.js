import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import CardRoute from './routes/CardRoute.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// default route path
app.use("/",CardRoute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
