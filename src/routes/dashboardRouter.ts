import path from "path";
import { Router } from "express";
import { Prisma , PrismaClient } from ".prisma/client";
import { getBedsPercentage, getBedsQuantityPerStatus } from "../controllers/bedsController";
import { authenticateToken } from "../middleware/authenticateToken";
import { getbedsStatsPerSection } from "../controllers/sectionController";

const prisma = new PrismaClient();
const router = Router();

router.get('/bedsPercentagePerStatus',authenticateToken, getBedsPercentage);
router.get('/bedsQuantityPerStatus', authenticateToken, getBedsQuantityPerStatus);
router.post('/bedsQuantityPerStatusAndSection', authenticateToken, getbedsStatsPerSection)

module.exports = router