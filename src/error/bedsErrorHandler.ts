import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

export const checkIfSectionIdExist = async (sectionId) => {
  const findSection = await prisma.section.count({
    where: {
      id: sectionId,
    },
  });
  if (findSection > 0) {
    return false;
  }
  return true;
};

export const bedNameValidator = async (name) => {
  const findName = await prisma.beds.count({
    where: {
      name,
    },
  });
  if (findName > 0) {
    return true;
  }
  return false;
};

export const checkIfBedIsNotAvailable = async (id) => {
  const findBed = await prisma.beds.findUnique({
    where: {
      id,
    },
  });
  if (findBed.status === 'AVAILABLE') {
    return false;
  }
  return true;
};

export const checkIfBedNotExists = async (id) => {
  const findBed = await prisma.beds.count({
    where: {
      id,
    },
  });
  if (findBed > 0) {
    return false;
  }
  return true;
};

export async function checkPatient(bedId) {
  const patient = await prisma.patient.count({
    where: {
      bedId,
    },
  });

  if (patient > 0) {
    return true;
  }
  return false;
}
