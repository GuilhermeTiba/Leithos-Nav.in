import path from "path";
import { Router } from "express";
import { Prisma , PrismaClient } from ".prisma/client";
import { checkUserPassword } from "../controllers/checkPasswordController";
import { createUser } from "../controllers/createUserController";

const prisma = new PrismaClient();
const router = Router();

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.post('/register', createUser)

router.post('/login', checkUserPassword)

export {router}