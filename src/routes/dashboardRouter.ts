import path from "path";
import { Router } from "express";
import { Prisma , PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();
const router = Router();



export {router}