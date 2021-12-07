import { Router } from "express";
import { allBeds, deleteBed } from "../controllers/bedsController";
import { getAllHistoric } from "../controllers/historicController";
import { authenticateToken } from "../middleware/authenticateToken";

const router = Router();

router.get('/allbeds', authenticateToken, allBeds)
router.get('/allhistoric', authenticateToken, getAllHistoric)

module.exports = router