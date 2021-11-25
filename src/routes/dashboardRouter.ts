import path from "path";
import { Router } from "express";
import { Prisma , PrismaClient } from ".prisma/client";
import { getBedsPercentage } from "../controllers/bedsController";
import { authenticateToken } from "../middleware/authenticateToken";

const prisma = new PrismaClient();
const router = Router();

router.get('/bedsPercentagePerStatus',authenticateToken, getBedsPercentage)

module.exports = router