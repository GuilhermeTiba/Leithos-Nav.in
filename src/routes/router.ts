import path from "path";
import { Router } from "express";
import { Prisma , PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.post('/login', async (req, res) => {
  const { email, password, phone, type} = req.body
  const createUser = await prisma.user.create({
    data: {
      email,
      password,
      phone,
      type
    },
  })
  res.json(createUser)
})

router.get('/showUsers', async (req, res) => {
  const allUsers = await prisma.user.findMany()
  res.json(allUsers)
})

export {router}