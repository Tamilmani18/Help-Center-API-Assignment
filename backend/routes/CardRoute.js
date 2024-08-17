import express from 'express'
import CardController from '../controllers/CardController'

const router = express.Router()

router.post("/", CardController.createCard)

export default router;