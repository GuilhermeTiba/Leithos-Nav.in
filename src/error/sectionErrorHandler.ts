/* eslint-disable import/prefer-default-export */
import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

export const checkSection = async (id: string) => {
  const sectionCheck = await prisma.section.count({
    where: {
      id,
    },
  });

  if (sectionCheck > 0) {
    return true;
  }
  return false;
};
