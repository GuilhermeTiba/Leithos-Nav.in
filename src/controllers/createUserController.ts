import { PrismaClient, Prisma } from "@prisma/client";
import { getPrismaClient } from "@prisma/client/runtime";
import { v4 as uuidv4} from 'uuid';

const prisma = new PrismaClient();
const v4 = uuidv4();

const createUser = async() => {
   await prisma.user.create({
  data: {
    id : uuidv4(),
    email: 'guitib2000@gmail.com',
    password: 'loominav.in2021',
    phone: '81992674929',
    type: 'USER'
  },
});
};

export { createUser }