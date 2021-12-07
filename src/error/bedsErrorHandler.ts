import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient

export const bedSectionValidator = async ( sectionId ) => {
  const findSection = await prisma.section.count({
    where:{
      id: sectionId
    }
  })
  if(findSection > 0){
    return true
  } else {
    return false
  }
}

export const bedNameValidator = async ( name ) => {
  const findName = await prisma.beds.count({
    where:{
      name : name
    }
  })
  if(findName > 0){
    return true
  } else {
    return false
  }
}