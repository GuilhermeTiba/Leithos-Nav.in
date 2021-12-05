import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function getPatientIn(timeRange){
  const date = new Date()
  const gmt = -3
  
  const initialTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate() - timeRange, gmt, 0, 0)
  const endTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23 + gmt, 59, 59)

  const dailyIn = await prisma.bedHistoric.count({
    where:{
      lastBedStatus: 'AVAILABLE',
      newBedStatus: 'OCCUPIED',
      newDate:{
        gte: initialTimestamp,
        lte: endTimestamp
      }
    }
  })
  return dailyIn
}

async function getPatientOut(timeRange){
  const date = new Date()
  const gmt = -3
  
  const initialTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate() - timeRange, gmt, 0, 0)
  const endTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23 + gmt, 59, 59)

  const dailyOut = await prisma.bedHistoric.count({
    where:{
      lastBedStatus:'OCCUPIED',
      newDate:{
        gte: initialTimestamp,
        lte: endTimestamp
      }
    }
  })
  return dailyOut
}

const minuteAverageCleaningTimefunc = async () =>{
  const averageCleaningTime = await prisma.bedHistoric.aggregate({
    _avg:{
      timeDifference:true
    },
    where:{
      lastBedStatus:'CLEANING'
    }
  })
  return Math.round(averageCleaningTime._avg.timeDifference / 60000)
}

const minuteAverageMaintanenceTimefunc = async () =>{
  const averageMaintanenceTime = await prisma.bedHistoric.aggregate({
    _avg:{
      timeDifference:true
    },
    where:{
      lastBedStatus:'MAINTANENCE'
    }
  })
  return Math.round(averageMaintanenceTime._avg.timeDifference / 60000)
}

const minuteAverageResponseTimefunc = async () =>{
  const averageResponseTime = await prisma.bedHistoric.aggregate({
    _avg:{
      timeDifference:true
    },
    where:{
      OR:[
        {
          lastBedStatus: 'CLEANING_NEEDED',
          newBedStatus: 'CLEANING'
        },
        {
          lastBedStatus: 'MAINTANENCE_NEEDED',
          newBedStatus: 'MAINTANENCE'
        }
      ]
    }
  })
  return Math.round(averageResponseTime._avg.timeDifference / 60000)
}

const minuteAverageOccupiedTimefunc = async () =>{
  const averageOccupiedTime = await prisma.bedHistoric.aggregate({
    _avg:{
      timeDifference:true
    },
    where:{
      lastBedStatus:'OCCUPIED'
    }
  })
  return Math.round(averageOccupiedTime._avg.timeDifference / 60000)
}

export async function getAllHistoric(req, res){
  const allHistoric = await prisma.bedHistoric.findMany()
  res.send({
    allHistoric
  })
}

export async function getDailyInAndOuts(req, res){
  const dailyIn = await getPatientIn(0);
  const dailyOut = await getPatientOut(0);

  res.send({
    dailyIn,
    dailyOut,
  });
}

export async function getWeeklyInAndOuts(req, res){
  const weeklyIn = await getPatientIn(7)
  const weeklyOut = await getPatientOut(7)

  res.send({
    weeklyIn,
    weeklyOut
  })
}

export async function getMonthlyInAndOuts(req, res){
  const monthlyIn = await getPatientIn(30)
  const monthlyOut = await getPatientOut(30)

  res.send({
    monthlyIn,
    monthlyOut
  })
}

export async function getYearlyInAndOuts(req, res){
  const yearlyIn = await getPatientIn(365)
  const yearlyOut = await getPatientOut(365)

  res.send({
    yearlyIn,
    yearlyOut
  })
}

export const getAverageTimes = async (req, res) => {
  const averageCleaningTime = await minuteAverageCleaningTimefunc();
  const averageResponseTime = await minuteAverageResponseTimefunc();
  const averageOccupiedTime = await minuteAverageOccupiedTimefunc();
  const averageMaintanenceTime = await minuteAverageMaintanenceTimefunc()

  res.send({
    averageCleaningTime,
    averageResponseTime,
    averageOccupiedTime,
    averageMaintanenceTime
  })
}


