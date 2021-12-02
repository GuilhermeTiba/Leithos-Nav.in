import { Router } from "express";
import { getBedsPercentage, getBedsQuantityPerStatus } from "../controllers/bedsController";
import { authenticateToken } from "../middleware/authenticateToken";
import { getbedsStatsPerSection } from "../controllers/sectionController";

const router = Router();

router.get('/bedsPercentagePerStatus',authenticateToken, getBedsPercentage);
router.get('/bedsQuantityPerStatus', authenticateToken, getBedsQuantityPerStatus);

router.post('/bedsQuantityPerStatusAndSection', authenticateToken, getbedsStatsPerSection)

module.exports = router