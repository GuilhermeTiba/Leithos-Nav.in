import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createPatient(req, res) {
  const {age, sex, first_name, last_name, ssn, diagnosis, additional_informations, bed, disease} = req.body
  const createPatient = await prisma.patient.create({
    data:{
      age,
      sex,
      first_name,
      last_name,
      ssn,
      diagnosis,
      additional_informations,
      bed
    },
  })
  res.json(createPatient)
}

