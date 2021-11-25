import path from "path";
import { Router } from "express";
import { Prisma , PrismaClient } from ".prisma/client";
import { getBedsPercentage } from "../controllers/bedsController";

const prisma = new PrismaClient();
const router = Router();

router.get('/bedsPercentagePerStatus', getBedsPercentage)

module.exports = router