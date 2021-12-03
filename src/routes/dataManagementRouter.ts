import { Router } from "express";
import { allBeds, deleteBed } from "../controllers/bedsController";
import { getAllHistoric } from "../controllers/historicController";
import { authenticateToken } from "../middleware/authenticateToken";

const router = Router();

router.get('/allBeds', authenticateToken, allBeds)
router.get('/allHistoric', authenticateToken, getAllHistoric)

router.delete('/deleteBed', authenticateToken, deleteBed)

module.exports = router