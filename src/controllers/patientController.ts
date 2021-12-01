import { Prisma, PrismaClient } from "@prisma/client";
import {v4 as uuidv4} from "uuid";

const prisma = new PrismaClient();

export async function createPatient(req, res) {
  const {age, sex, first_name, last_name, ssn, diagnosis, additional_informations, bed, disease} = req.body
  const uuid = await uuidv4()
  const createPatient = await prisma.patient.create({
    data:{
      id: uuid,
      age,
      sex,
      first_name,
      last_name,
      ssn,
      additional_informations,
      bed
    },
  })

  const createDiagnosis = await prisma.diagnosis.create({
    data: {
      disease,
      patientId: uuid,
    }
  })

  res.send({createPatient, createDiagnosis})
}

