import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export async function createBeds(req, res) {
  const { name, type, section } = req.body
  const uuid = await uuidv4()

  const bed = await prisma.beds.create({
    data:{
      id: uuid,
      name: name,
      type: type,
      sectionId : section
    }
  })

  const findBed = await prisma.beds.findUnique({
    where: {
      id : uuid
    }
  })

  const now = new Date().getTime()
  const lastTime = findBed.status_changed_date.getTime()
  const timeDifference = now - lastTime

  const createHistoric = await prisma.historic.create({
    data:{
      bedsId: uuid,
      lastBedStatus: findBed.status,
      newBedStatus: 'AVAILABLE',
      lastModifiedDate: findBed.status_changed_date,
      timeDifference: timeDifference
    }
  })
  res.send({
    bed,
    createHistoric
  })
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
    status: 'OCCUPIED'
  }
  })

  return occupiedBedsQuantity
}


async function getCleaningBedsQuantity(){
  const cleaningBeds = await prisma.beds.count({
  where:{
    status: 'CLEANING'
  }
  })
  return cleaningBeds
}

async function getNeedCleaningBedsQuantity(){
  const needCleaningBeds = await prisma.beds.count({
  where:{
    status: 'CLEANING_NEEDED'
  }
  })
  return needCleaningBeds
}

async function getMaintanenceBedsQuantity(){
  const maintanenceBeds = await prisma.beds.count({
  where:{
    status: 'MAINTANENCE'
  }
  })
  return maintanenceBeds
}

async function getNeedMaintanenceBedsQuantity(){
  const needMaintanenceBeds = await prisma.beds.count({
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

  const findBed = await prisma.beds.findUnique({
    where: {
      id : id
    }
  })

  if (findBed.status != "AVAILABLE" && status == "OCCUPIED") {
    res.send({Error:"Bed needs to be available to make this change."})
  } else {
    const now = new Date().getTime()
    const lastTime = findBed.status_changed_date.getTime()
    const timeDifference = now - lastTime
  
    const createHistoric = await prisma.historic.create({
      data:{
        bedsId: id,
        lastBedStatus: findBed.status,
        newBedStatus: status,
        lastModifiedDate: findBed.status_changed_date,
        timeDifference: timeDifference
      }
  })

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
      updateBedStatus,
      createHistoric
    })
  }
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
  const occupiedBedsQtd = await getOccupiedBedsQuantity()

  res.send({
    occupiedBedsQtd
  })
}

export async function getBedsQuantityPerStatus(req, res){
  const availableBedsQtd = await getAvailableBedsQuantity()
  const occupiedBedsQtd = await getOccupiedBedsQuantity()
  const cleaningBedsQtd = await getCleaningBedsQuantity()
  const needCleaningBedsQtd = await getNeedCleaningBedsQuantity()
  const maintanenceBedsQtd = await getMaintanenceBedsQuantity()
  const needMaintanenceBedsQtd = await getNeedMaintanenceBedsQuantity()

  res.send({
    availableBedsQtd,
    occupiedBedsQtd,
    cleaningBedsQtd,
    needCleaningBedsQtd,
    maintanenceBedsQtd,
    needMaintanenceBedsQtd
  })
}

export async function allBeds(req, res){
  const showAllBeds = await getAllBeds()
  res.send({
    showAllBeds
  })
}