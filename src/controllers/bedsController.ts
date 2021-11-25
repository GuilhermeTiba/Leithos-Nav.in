import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createBeds(req, res) {
  const {name, type, section} = req.body
  const bed = await prisma.beds.create({
    data:{
      name: name,
      type: type,
      sectionId : section
    },
    
  })
  res.json(bed)
}

async function getAvailableBedsQuantity(){
  const availableBedsQuantity = await prisma.beds.count({
  where:{
    status: 'AVAILABLE'
  }
  })
  return availableBedsQuantity
}

async function getOccupiedBedsQuantity(){
  const occupiedBedsQuantity = await prisma.beds.count({
  where:{
    status: 'OCUPIED'
  }
  })

  return occupiedBedsQuantity
  //res.json(occupiedBedsQuantity)
}


async function getCleaningBedsQuantity(){
  const cleaningBeds = await prisma.beds.findMany({
  where:{
    status: 'CLEANING'
  }
  })
  return cleaningBeds
}

async function getNeedCleaningBedsQuantity(){
  const needCleaningBeds = await prisma.beds.findMany({
  where:{
    status: 'CLEANING_NEEDED'
  }
  })
  return needCleaningBeds
}

async function getMaintanenceBedsQuantity(){
  const maintanenceBeds = await prisma.beds.findMany({
  where:{
    status: 'MAINTANENCE'
  }
  })
  return maintanenceBeds
}

async function getNeedMaintanenceBedsQuantity(){
  const needMaintanenceBeds = await prisma.beds.findMany({
  where:{
    status: 'MAINTANENCE_NEEDED'
  }
  })
  return needMaintanenceBeds
}

async function getAllBeds(){
  const allBeds = await prisma.beds.findMany()
  return allBeds
}

export async function getBedsPerSection(req, res){
  const { section } = req.body
  const bedsPerSection = await prisma.beds.findMany({
  where:{
    sectionId: section
  }
  })
  res.send({
    bedsPerSection
  })
}

export async function getBedsPerSectionQuantity(req, res){
  const { section } = req.body
  const bedsPerSection = await prisma.beds.count({
  where:{
    sectionId: section
  }
  })
  res.send({
    bedsPerSection 
  })
}

export async function getAvailableBedsPerSectionQuantity(req, res){
  const { section } = req.body
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

export async function getOccupiedBedsPerSection(req, res){
  const { section } = req.body
  const occupiedBedsPerSection = await prisma.beds.findMany({
  where:{
    status: 'OCUPIED',
    sectionId: section
  }
  })
  res.send({
    occupiedBedsPerSection
  })
}

export async function getNeedCleaningBedsPerSection(req, res){
  const { section } = req.body
  const needCleaningBedsPerSection = await prisma.beds.findMany({
  where:{
    sectionId: section,
    status: 'CLEANING_NEEDED'
  }
  })
  res.send({
    needCleaningBedsPerSection
  })
}

export async function getNeedMaintanenceBedsPerSection(req, res){
  const { section } = req.body
  const needMaintanenceBedsPerSection = await prisma.beds.findMany({
  where:{
    status: 'MAINTANENCE_NEEDED',
    sectionId: section
  }
  })
  res.send({
    needMaintanenceBedsPerSection
  })
}

export async function getCleaningBedsPerSection(req, res){
  const { section } = req.body
  const CleaningBedsPerSection = await prisma.beds.findMany({
  where:{
    status: 'CLEANING',
    sectionId: section
  }
  })
  res.send({
    CleaningBedsPerSection
  })
}

export async function getMaintenenceBedsPerSection(req, res){
  const { section } = req.body
  const maintanenceBedsPerSection = await prisma.beds.findMany({
  where:{
    status: 'MAINTANENCE',
    sectionId: section
  }
  })
  res.send({
    maintanenceBedsPerSection
  })
}

export async function getBedStatus(req, res){
  const { id } = req.body
  const getBedStatus = await prisma.beds.findUnique({
  where:{
    id: id
  },
  })
  res.send({
    getBedStatus
  })
}

export async function updateBed(req, res){
  const { id, status, section, name } = req.body
  const updateBedStatus = await prisma.beds.update({
    where:{
      id: id
    },
    data:{ 
      status: status,
      sectionId: section,
      name: name
    }
  })
  res.send({
    updateBedStatus
  })
}



export async function deleteBed(req, res){
  const { id } = req.body
  const deleteBed = await prisma.beds.delete({
    where:{
      id: id
    }
  })
  res.send({
    deleteBed
  })
}

export async function getBedsPercentage(req, res){
  const availableBedsQuantity = await getAvailableBedsQuantity()
  const occupiedBedsQuantity = await getOccupiedBedsQuantity()
  const getAllBedsQuantity = await (await getAllBeds()).length
  res.send({
    availableBedsQuantity,
    occupiedBedsQuantity,
    getAllBedsQuantity 
  })
}

export async function occupiedBedsQuantity(req, res){
  const occupiedBedsQtd = getOccupiedBedsQuantity()

  res.send({
    occupiedBedsQtd
  })
}
