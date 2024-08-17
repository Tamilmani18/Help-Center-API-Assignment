import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import Card from "./models/Card.js";

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

app.use("/",CardRoute)

app.get("/ping", (req, res) => {
  res.send("Server is running");
});

app.post("/cards", async (req, res) => {
  try {
    const { title, description } = req.body;
    const card = new Card({ title, description, id: uuidv4() });
    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/cards/:title", async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
