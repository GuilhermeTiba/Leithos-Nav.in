import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient

export async function checkSection(id){
    const sectionCheck = await prisma.section.count({
      where: {
        id: id
      }
    })
  
    if (sectionCheck > 0) {
      return true  
    }
    return false
  }