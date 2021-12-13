import { PrismaClient } from "@prisma/client"
import { compare } from "bcrypt"
import { generateAccessToken } from "../config/generateAccessToken"
import { generateRefreshToken } from "../config/generateRefreshToken"

const prisma = new PrismaClient()

export async function checkUserCredencials (req, res, next){
  const { email, password } = req.body
  const findUserPassword = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })

  try{
    if(await compare(password, findUserPassword.password)){
      const accessToken = generateAccessToken({ email })
      const refreshToken = generateRefreshToken({ email })
      res.json({ accessToken: accessToken, refreshToken: refreshToken })
    } else {
      res.status(405).send('Not Allowed')
    }
  }
  catch(error){
    res.status(500).send({
      error: 'Server error'
    })
  }
}

