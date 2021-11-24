import path from "path";
import { Router } from "express";
import { Prisma , PrismaClient } from ".prisma/client";
import { checkUserCredencials } from "../controllers/authPasswordController";

const prisma = new PrismaClient();
const router = Router();

export {router}