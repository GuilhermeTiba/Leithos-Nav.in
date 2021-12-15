/* eslint-disable import/prefer-default-export */
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcrypt';

const { generateAccessToken } = require('../config/generateAccessToken.ts');

const prisma = new PrismaClient();

export const checkUserCredencials = async (req, res) => {
  const { email, password } = req.body;
  const findUserPassword = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  try {
    if (await compare(password, findUserPassword.password)) {
      const accessToken = generateAccessToken({ email });
      res.status(200).send({
        accessToken,
      });
    } else {
      res.status(405).send('Not Allowed');
    }
  } catch (error) {
    res.status(503).send({
      error: 'Server error',
    });
  }
};
