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

  const section = await prisma.section.findMany()

  res.json(section)
}

export async function getBedsPerSection(req, res){
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

async function getBedsPerSectionQuantity(req, res){
  const { section } = req.params
  const bedsPerSection = await prisma.beds.count({
  where:{
    sectionId: section
  }
  })
  res.send({
    bedsPerSection 
  })
}

async function getAvailableBedsPerSectionQuantity(req, res){
  const { section } = req.params
  const availableBedsPerSection = await prisma.beds.count({
  where:{
    status: 'AVAILABLE',
    sectionId: section
  }
  })
  res.send({
    availableBedsPerSection
  })
}

async function getOccupiedBedsPerSectionQuantity(req, res){
  const { section } = req.params
  const occupiedBedsPerSection = await prisma.beds.count({
  where:{
    status: 'OCCUPIED',
    sectionId: section
  }
  })
  res.send({
    occupiedBedsPerSection
  })
}

async function getNeedCleaningBedsPerSectionQuantity(req, res){
  const { section } = req.params
  const needCleaningBedsPerSection = await prisma.beds.count({
  where:{
    sectionId: section,
    status: 'CLEANING_NEEDED'
  }
  })
  res.send({
    needCleaningBedsPerSection
  })
}

async function getNeedMaintanenceBedsPerSectionQuantity(req, res){
  const { section } = req.params
  const needMaintanenceBedsPerSection = await prisma.beds.count({
  where:{
    status: 'MAINTANENCE_NEEDED',
    sectionId: section
  }
  })
  res.send({
    needMaintanenceBedsPerSection
  })
}

async function getCleaningBedsPerSectionQuantity(req, res){
  const { section } = req.params
  const cleaningBedsPerSection = await prisma.beds.count({
  where:{
    status: 'CLEANING',
    sectionId: section
  }
  })
  res.send({
    cleaningBedsPerSection
  })
}

async function getMaintenenceBedsPerSectionQuantity(req, res){
  const { section } = req.params
  const maintanenceBedsPerSection = await prisma.beds.count({
  where:{
    status: 'MAINTANENCE',
    sectionId: section
  }
  })
  res.send({
    maintanenceBedsPerSection
  })
}

export async function getbedsStatsPerSection(req, res){
  const { section } = req.params
  const { status } = req.body
  const bedsStatsPerSection = await prisma.beds.count({
    where:{
      status:status,
      sectionId: section
    }
  })
  
  res.send({
    bedsStatsPerSection
  })
}

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