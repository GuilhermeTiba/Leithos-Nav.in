import { Prisma, PrismaClient } from "@prisma/client"
import { compare } from "bcrypt"

const prisma = new PrismaClient()

export async function checkUserPassword (req, res, next){
  const { email, password } = req.body
  const findUserPassword = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })

  try{
    if(await compare(password, findUserPassword.password)){
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  }
  catch{
    res.status(500).send()
  }
}