import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createSection(req, res) {
  const {id} = req.body
  const section = await prisma.section.create({
    data:{
      id: id
    }
  })
  res.json(section)
}