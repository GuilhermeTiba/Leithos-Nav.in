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

export async function availableBedsQuantity(req, res){
  const availableBeds = await prisma.beds.findMany({
  where:{
    status: 'AVAILABLE'
  }
  })
  res.json(availableBeds.length)
}

export async function occupiedBedsQuantity(req, res){
  const occupiedBeds = await prisma.beds.findMany({
  where:{
    status: 'OCUPIED'
  }
  })
  res.json(occupiedBeds.length)
}

export async function cleaningBedsQuantity(req, res){
  const cleaningBeds = await prisma.beds.findMany({
  where:{
    status: 'CLEANING'
  }
  })
  res.json(cleaningBeds.length)
}

export async function needCleaningBedsQuantity(req, res){
  const needCleaningBeds = await prisma.beds.findMany({
  where:{
    status: 'CLEANING_NEEDED'
  }
  })
  res.json(needCleaningBeds.length)
}

export async function maintanenceBedsQuantity(req, res){
  const maintanenceBeds = await prisma.beds.findMany({
  where:{
    status: 'MAINTANENCE'
  }
  })
  res.json(maintanenceBeds.length)
}

export async function needMaintanenceBedsQuantity(req, res){
  const needMaintanenceBeds = await prisma.beds.findMany({
  where:{
    status: 'MAINTANENCE_NEEDED'
  }
  })
  res.json(needMaintanenceBeds.length)
}

export async function allBeds(req, res){
  const allBeds = await prisma.beds.findMany()
  res.json(allBeds)
}

export async function bedsPerSection(req, res){
  const { section } = req.body
  const bedsPerSection = await prisma.beds.findMany({
  where:{
    sectionId: section
  }
  })
  res.json(bedsPerSection)
}

export async function bedsPerSectionQuantity(req, res){
  const { section } = req.body
  const bedsPerSection = await prisma.beds.findMany({
  where:{
    sectionId: section
  }
  })
  res.json(bedsPerSection.length)
}

export async function availableBedsPerSectionQuantity(req, res){
  const { section } = req.body
  const bedsPerSection = await prisma.beds.findMany({
  where:{
    status: 'AVAILABLE',
    sectionId: section
  }
  })
  res.json(bedsPerSection.length)
}

export async function occupiedBedsPerSection(req, res){
  const { section } = req.body
  const occupiedBedsPerSection = await prisma.beds.findMany({
  where:{
    status: 'OCUPIED',
    sectionId: section
  }
  })
  res.json(occupiedBedsPerSection)
}

export async function needCleaningBedsPerSection(req, res){
  const { section } = req.body
  const needCleaningBedsPerSection = await prisma.beds.findMany({
  where:{
    sectionId: section,
    status: 'CLEANING_NEEDED'
  }
  })
  res.json(needCleaningBedsPerSection)
}

export async function needMaintanenceBedsPerSection(req, res){
  const { section } = req.body
  const needMaintanenceBedsPerSection = await prisma.beds.findMany({
  where:{
    status: 'MAINTANENCE_NEEDED',
    sectionId: section
  }
  })
  res.json(needMaintanenceBedsPerSection)
}

export async function cleaningBedsPerSection(req, res){
  const { section } = req.body
  const CleaningBedsPerSection = await prisma.beds.findMany({
  where:{
    status: 'CLEANING',
    sectionId: section
  }
  })
  res.json(CleaningBedsPerSection)
}

export async function maintenenceBedsPerSection(req, res){
  const { section } = req.body
  const maintanenceBedsPerSection = await prisma.beds.findMany({
  where:{
    status: 'MAINTANENCE',
    sectionId: section
  }
  })
  res.json(maintanenceBedsPerSection)
}

export async function getBedStatus(req, res){
  const { id } = req.body
  const getBedStatus = await prisma.beds.findUnique({
  where:{
    id: id
  },
  })
  res.json(getBedStatus.status)
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
  res.json(updateBedStatus)
}



export async function deleteBed(req, res){
  const { id } = req.body
  const deleteBed = await prisma.beds.delete({
    where:{
      id: id
    }
  })
  res.json(deleteBed)
}
