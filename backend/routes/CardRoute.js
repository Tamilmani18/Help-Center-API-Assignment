import express from "express";
import CardController from "../controllers/CardController.js";

const router = express.Router();

router.get("/ping", CardController.cards)

router.post("/cards", CardController.createCard);

router.get("/cards", CardController.getCards);

router.get("/cards/:title", CardController.getSpecificCard);

export default router;
