import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createBeds(req, res) {
  const {section, status, type} = req.body
  const bed = await prisma.beds.create({
    data:{
      section,
      status,
      type
    },
  })
  res.json(bed)
}

