import { v4 as uuidv4 } from "uuid";
import Card from "../models/Card.js";

const createCard = async (req, res) => {
  try {
    const { title, description } = req.body;

    const existingCard = await Card.findOne({ title });
    if (existingCard) {
      return res
        .status(409)
        .json({ error: "Card with this title already exists" });
    }

    const card = new Card({ title, description, id: uuidv4() });
    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSpecificCard = async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getCards,
  getSpecificCard,
  createCard,
};
