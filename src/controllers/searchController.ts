import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const searchSection = async (req, res) => {
  const { id } = req.body

  try {
    const searchSection = await prisma.section.findMany({
      where:{
        id:{
          startsWith: id
        }
      }
    })
    if(searchSection.length == 0){
      res.status(200).send({
        message : "No section found"
      })
    } else {
      res.send({
        searchSection
      })
    }
  } catch (error) {
    res.status(500).send({
      error : 'Server error'
    })
  }
}

export const searchPatientOrBed = async (req, res) => {
  const { searchString } = req.body

  try {
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
    
    if(searchBed.length == 0 && searchPatient.length == 0){
      res.status(200).send({
        message : 'No bed or patient found'
      })
    }
    else{
      res.status(200).send({
        searchPatient,
        searchBed
      })
    }
  } catch (error) {
    res.status(500).send({
      error : 'Server error'
    })
  }
}
