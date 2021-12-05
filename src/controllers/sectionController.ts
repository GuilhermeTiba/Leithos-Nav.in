import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createSection(req, res) {
  const {id} = req.body
  const section = await prisma.section.create({
    data:{
      id: id
    }
  })
  res.json(section)
}

export async function getAllSections(req, res) {
  const allSections = await allSectionsFunc()
  
  res.send({
    allSections
  })
}

export async function getBedsFromASection(req, res){
  const { sectionId } = req.params
  const bedsPerSection = await prisma.beds.findMany({
  where:{
    sectionId: sectionId
  }
  })
  res.send({
    bedsPerSection
  })
}

export async function getAvailableBedsfromAllSections(req, res){
  const availableBedsFromAllSections = await availableBedsFromAllSectionsFunc()
  const allBedsFromAllSections = await allBedsFromAllSectionsFunc()
  
  res.send({
    availableBedsFromAllSections,
    allBedsFromAllSections
  })
}

export async function getAllBedStatsQuantityFromASection(req, res){
  const { sectionId } = req.params
  const availableBedsPerSection = await getAvaiableBedsPerSectionQuantityParams(sectionId)
  const occupiedBedsPerSection = await getOccupiedBedsPerSectionQuantityParams(sectionId)
  const cleaningBedsPerSection = await getCleaningBedsPerSectionQuantityParams(sectionId)
  const maintanenceBedsPerSection = await getMaintenenceBedsPerSectionQuantityParams(sectionId)
  const needCleaningBedsPerSection = await getNeedCleaningBedsPerSectionQuantityParams(sectionId)
  const needMaintanenceBedsPerSection = await getNeedMaintanenceBedsPerSectionQuantityParams(sectionId)

  res.send({
    availableBedsPerSection,
    occupiedBedsPerSection,
    cleaningBedsPerSection,
    maintanenceBedsPerSection,
    needCleaningBedsPerSection,
    needMaintanenceBedsPerSection
  })
}

async function getBedsPerSectionQuantity(section){
  const bedsPerSection = await prisma.beds.count({
  where:{
    sectionId: section
  }
  })
  return bedsPerSection
}

async function allSectionsFunc(){
  const allSections = await prisma.section.findMany()

  return allSections
}

async function availableBedsFromAllSectionsFunc() {
  const allSections = await prisma.section.findMany()
  const allSectionArray = Object.values(allSections)
  const responseArray = []

  for (let index = 0; index < allSectionArray.length; index += 1) {
    const getAvailableBedsPerSection = await getAvailableBedsPerSectionQuantity(allSectionArray[index].id)
    responseArray.push({ "section" : allSectionArray[index].id, "quantity" : getAvailableBedsPerSection})
  }

  return responseArray
}

async function allBedsFromAllSectionsFunc() {
  const allSections = await prisma.section.findMany()
  const allSectionArray = Object.values(allSections)
  const responseArray = []

  for (let index = 0; index < allSectionArray.length; index += 1) {
    const getBedsPersectionQtd = await getBedsPerSectionQuantity(allSectionArray[index].id)
    responseArray.push({ "section" : allSectionArray[index].id, "quantity" : getBedsPersectionQtd})
  }

  return responseArray
}

async function getAvailableBedsPerSectionQuantity(sectionId){
  const availableBedsPerSection = await prisma.beds.count({
  where:{
    status: 'AVAILABLE',
    sectionId: sectionId
  }
  })
  return availableBedsPerSection
}

async function getAvaiableBedsPerSectionQuantityParams(section){
  const availableBedsPerSection = await prisma.beds.count({
  where:{
    status: 'AVAILABLE',
    sectionId: section
  }
  })
  return availableBedsPerSection
}

async function getOccupiedBedsPerSectionQuantityParams(section){
  const occupiedBedsPerSection = await prisma.beds.count({
  where:{
    status: 'OCCUPIED',
    sectionId: section
  }
  })
  return occupiedBedsPerSection
}

async function getNeedCleaningBedsPerSectionQuantityParams(section){
  const needCleaningBedsPerSection = await prisma.beds.count({
  where:{
    sectionId: section,
    status: 'CLEANING_NEEDED'
  }
  })
  return needCleaningBedsPerSection
}

async function getNeedMaintanenceBedsPerSectionQuantityParams(section){
  const needMaintanenceBedsPerSection = await prisma.beds.count({
  where:{
    status: 'MAINTANENCE_NEEDED',
    sectionId: section
  }
  })
  return needMaintanenceBedsPerSection
}

async function getCleaningBedsPerSectionQuantityParams(section){
  const cleaningBedsPerSection = await prisma.beds.count({
  where:{
    status: 'CLEANING',
    sectionId: section
  }
  })
  return cleaningBedsPerSection
}

async function getMaintenenceBedsPerSectionQuantityParams(section){
  const maintanenceBedsPerSection = await prisma.beds.count({
  where:{
    status: 'MAINTANENCE',
    sectionId: section
  }
  })
  return maintanenceBedsPerSection
}

