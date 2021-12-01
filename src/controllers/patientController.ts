import { PrismaClient } from "@prisma/client";
import {v4 as uuidv4} from "uuid";

const prisma = new PrismaClient();

export async function createPatient(req, res) {
  const {age, sex, first_name, last_name, ssn, additional_informations, bedId, diagnosis} = req.body
  const uuid = await uuidv4()
  const createPatient = await prisma.patient.create({
    data:{
      id: uuid,
      age,
      sex,
      first_name,
      last_name,
      ssn,
      diagnosis,
      additional_informations,
      bedId : bedId
    },
  })

  res.send({createPatient})
}

export async function getDiagnosisFromPatient(req, res){
  
  const {patientId} = req.body

  const patientDiagnosis = await prisma.patient.findUnique({
    where:{
      id: patientId
    },
    select:{
      diagnosis: true
    }
  })

  res.send({
    patientDiagnosis
  })

}

export async function updateDiagnosticFromPatient(req, res){
  
  const {patientId , newDiagnosis} = req.body

  const updatePatientDiagnosis = await prisma.patient.update({
    where:{
      id : patientId
    },
    data:{
      diagnosis: newDiagnosis
    }
  })
  res.send({
    updatePatientDiagnosis
  })
}
