import { PrismaClient } from "@prisma/client";
import {v4 as uuidv4} from "uuid";

const prisma = new PrismaClient();

async function getNeurologyDiagnosisQuantity() {
  const neurologyDiagnosisQtd = await prisma.patient.count({
    where:{
      diagnosis:{
        has: 'NEUROLOGY'
      }
    }
  })
  return neurologyDiagnosisQtd
}

async function getCardiologyDiagnosisQuantity() {
  const CardiologyDiagnosisQtd = await prisma.patient.count({
    where:{
      diagnosis:{
        has: 'CARDIOLOGY'
      }
    }
  })
  return CardiologyDiagnosisQtd
}

async function getPneumologyDiagnosisQuantity() {
  const pnemumologyDiagnosisQtd = await prisma.patient.count({
    where:{
      diagnosis:{
        has: 'PNEUMOLOGY'
      }
    }
  })
  return pnemumologyDiagnosisQtd
}

async function getOncologyDiagnosisQuantity() {
  const oncologyDiagnosisQtd = await prisma.patient.count({
    where:{
      diagnosis:{
        has: 'ONCOLOGY'
      }
    }
  })
  return oncologyDiagnosisQtd
}

async function getOrthopedicsDiagnosisQuantity() {
  const orthopedicsDiagnosisQtd = await prisma.patient.count({
    where:{
      diagnosis:{
        has: 'ORTHOPEDICS'
      }
    }
  })
  return orthopedicsDiagnosisQtd
}

async function getNephrologyDiagnosisQuantity() {
  const nephrologyDiagnosisQtd = await prisma.patient.count({
    where:{
      diagnosis:{
        has: 'NEPHROLOGY'
      }
    }
  })
  return nephrologyDiagnosisQtd
}

async function getEndocrinologyDiagnosisQuantity() {
  const endocrinologyDiagnosisQtd = await prisma.patient.count({
    where:{
      diagnosis:{
        has: 'ENDOCRINOLOGY'
      }
    }
  })
  return endocrinologyDiagnosisQtd
}

async function getPalliativeCareDiagnosisQuantity() {
  const palliativeCareDiagnosisQtd = await prisma.patient.count({
    where:{
      diagnosis:{
        has: 'PALLIATIVE_CARE'
      }
    }
  })
  return palliativeCareDiagnosisQtd
}

async function getInfectologyDiagnosisQuantity() {
  const infectologyDiagnosisQtd = await prisma.patient.count({
    where:{
      diagnosis:{
        has: 'INFECTOLOGY'
      }
    }
  })
  return infectologyDiagnosisQtd
}

async function getGenicologyDiagnosisQuantity() {
  const genicologyDiagnosisQtd = await prisma.patient.count({
    where:{
      diagnosis:{
        has: 'GENICOLOGY'
      }
    }
  })
  return genicologyDiagnosisQtd
}

async function getCovidDiagnosisQuantity() {
  const covidDiagnosisQtd = await prisma.patient.count({
    where:{
      diagnosis:{
        has: 'COVID'
      }
    }
  })
  return covidDiagnosisQtd
}

async function getOtherDiagnosisQuantity() {
  const otherDiagnosisQtd = await prisma.patient.count({
    where:{
      diagnosis:{
        has: 'OTHER'
      }
    }
  })
  return otherDiagnosisQtd
}

async function getMaleSexQuantity() {
  const maleQtd = await prisma.patient.count({
    where:{
      sex: 'MALE'
    }
  })
  return maleQtd
}

async function getFemaleSexQuantity() {
  const femaleQtd = await prisma.patient.count({
    where:{
      sex: 'FEMALE'
    }
  })
  return femaleQtd
}

async function getOtherSexQuantity() {
  const otherQtd = await prisma.patient.count({
    where:{
      sex: 'OTHER'
    }
  })
  return otherQtd
}

async function getQuantityPerAge0_2(){
  const ageRange0_2 = await prisma.patient.count({
    where:{
      age:{
        gte:0,
        lte:2
      }
    }
  })
  return ageRange0_2
}

async function getQuantityPerAge3_11(){
  const ageRange3_11 = await prisma.patient.count({
    where:{
      age:{
        gte:3,
        lte:11
      }
    }
  })
  return ageRange3_11
}

async function getQuantityPerAge12_19(){
  const ageRange12_19 = await prisma.patient.count({
    where:{
      age:{
        gte:12,
        lte:19
      }
    }
  })
  return ageRange12_19
}

async function getQuantityPerAge20_49(){
  const ageRange20_49 = await prisma.patient.count({
    where:{
      age:{
        gte:20,
        lte:49
      }
    }
  })
  return ageRange20_49
}

async function getQuantityPerAge50_69(){
  const ageRange50_69 = await prisma.patient.count({
    where:{
      age:{
        gte:50,
        lte:69
      }
    }
  })
  return ageRange50_69
}

async function getQuantityPerAge70_89(){
  const ageRange70_89 = await prisma.patient.count({
    where:{
      age:{
        gte:70,
        lte:89
      }
    }
  })
  return ageRange70_89
}

async function getQuantityPerAge90plus(){
  const ageRange90plus = await prisma.patient.count({
    where:{
      age:{
        gte:90,
      }
    }
  })
  return ageRange90plus
}

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

export async function deletePatient(req, res) {
  const {patientId, liberationClause} = req.body
  
  const findPatient = await prisma.patient.findUnique({
    where:{
      id: patientId
    }
  })
  
  const createPatientHistoric = await prisma.patientHistoric.create({
    data:{
      first_name: findPatient.first_name,
      last_name: findPatient.last_name,
      entry_date: findPatient.entry_date,
      ssn : findPatient.ssn,
      diagnosis : findPatient.diagnosis,
      additional_informations: findPatient.additional_informations,
      liberationClause: liberationClause
    }
  })

  const deletePatient = await prisma.patient.delete({
    where:{
      id: patientId
    }
  })

  res.send({
    createPatientHistoric,
    deletePatient
  })
}

export async function getPatientData(req, res) {
  
  const {patientId} = req.params

  const patientData = await prisma.patient.findUnique({
    where:{
      id: patientId
    },
  })

  res.send({
    patientData
  })
}

export async function updatePatientData(req, res) {
  const {first_name, last_name, sex, age, diagnosis, additional_informations, patientId} = req.body

  const updatePatientData = await prisma.patient.update({
    where:{
      id : patientId
    },
    data:{
      first_name,
      last_name,
      sex,
      age,
      diagnosis,
      additional_informations
    }
  })

  res.send({
    updatePatientData
  })
}

export async function getQuantityPerDiagnosis(req, res){
  const neurologyQtd = await getNeurologyDiagnosisQuantity()
  const cardiologyQtd = await getCardiologyDiagnosisQuantity()
  const pneumologyQtd = await getPneumologyDiagnosisQuantity()
  const oncologyQtd = await getOncologyDiagnosisQuantity()
  const orthopedicsQtd = await getOrthopedicsDiagnosisQuantity()
  const nephrologyQtd = await getNephrologyDiagnosisQuantity()
  const endocrinologyQtd = await getEndocrinologyDiagnosisQuantity()
  const palliativeCareQtd = await getPalliativeCareDiagnosisQuantity()
  const infectologyQtd = await getInfectologyDiagnosisQuantity()
  const genicologyQtd = await getGenicologyDiagnosisQuantity()
  const covidQtd = await getCovidDiagnosisQuantity()
  const otherQtd = await getOtherDiagnosisQuantity()
  
  res.send({
    neurologyQtd,
    cardiologyQtd,
    pneumologyQtd,
    oncologyQtd,
    orthopedicsQtd,
    nephrologyQtd,
    endocrinologyQtd,
    palliativeCareQtd,
    infectologyQtd,
    genicologyQtd,
    covidQtd,
    otherQtd
  })
}

export async function getQuantityPerSex(req, res){
  
  const maleQtd = await getMaleSexQuantity()
  const femaleQtd = await getFemaleSexQuantity()
  const otherQtd = await getOtherSexQuantity()
  
  res.send({
    maleQtd,
    femaleQtd,
    otherQtd
  })
}

export async function getQuantityPerAge(req, res){
  const ageRange0_2 = await getQuantityPerAge0_2()
  const ageRange3_11 = await getQuantityPerAge3_11()
  const ageRange12_19 = await getQuantityPerAge12_19()
  const ageRange20_49 = await getQuantityPerAge20_49()
  const ageRange50_69 = await getQuantityPerAge50_69()
  const ageRange70_89 = await getQuantityPerAge70_89()
  const ageRange90plus = await getQuantityPerAge90plus()

  res.send({
    ageRange0_2,
    ageRange3_11,
    ageRange12_19,
    ageRange20_49,
    ageRange50_69,
    ageRange70_89,
    ageRange90plus
  })
}