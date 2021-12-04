import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const searchSection = async (req, res) => {
  const { id } = req.body

  const searchSection = await prisma.section.findMany({
    where:{
      id:{
        startsWith: id
      }
    }
  })
  res.send({
    searchSection
  })
}

export const searchPatientOrBed = async (req, res) => {
  const { searchString } = req.body

  const searchPatient = await prisma.patient.findMany({
    where:{
      OR:[
        {
          first_name:{
            startsWith: searchString
          },
        },
        {
          last_name:{
            startsWith: searchString
          }
        },
        {
          ssn:{
            startsWith: searchString
          }
        }
      ]
    },
  });

  const searchBed = await prisma.beds.findMany({
    where:{
        name:{
          startsWith: searchString
        },
    },
  });

  res.send({
    searchPatient,
    searchBed
  })

}
