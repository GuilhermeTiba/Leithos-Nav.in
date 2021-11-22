import path from "path";
import { Router } from "express";
import { Prisma , PrismaClient } from ".prisma/client";
import { checkUserPassword } from "../controllers/checkPasswordController";

const prisma = new PrismaClient();
const router = Router();

export {router}