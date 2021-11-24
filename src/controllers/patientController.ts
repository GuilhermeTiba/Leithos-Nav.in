import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createPatient(req, res) {
  const {sex, first_name, last_name, ssn, description, additional_informations, bed} = req.body
  const createPatient = await prisma.patient.create({
    data:{
      sex,
      first_name,
      last_name,
      ssn,
      description,
      additional_informations,
      bed
    },
  })
  res.json(createPatient)
}

