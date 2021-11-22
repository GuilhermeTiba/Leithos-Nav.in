import path from "path";
import { Router } from "express";
import { PrismaClient } from ".prisma/client";
import { checkUserCredencials } from "../controllers/authPasswordController";
import { createUser } from "../controllers/createUserController";
import { authenticateToken } from "../middleware/authenticateToken";

const prisma = new PrismaClient();
const router = Router();

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.post('/register', createUser)

router.post('/login', authenticateToken, checkUserCredencials)

export {router}