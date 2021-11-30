import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getAllHistoric(req, res){
  const allHistoric = await prisma.historic.findMany()
  res.send({
    allHistoric
  })
}