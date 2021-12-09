import { Prisma, PrismaClient } from "@prisma/client"
import { genSalt, hash } from "bcrypt"

const prisma = new PrismaClient()

export async function createUser (req, res){
  const {first_name, last_name, email, phone, type} = req.body

  const salt = await genSalt()
  const password = await hash(req.body.password, salt)

  const createUser = await prisma.user.create({
    data:{
      first_name,
      last_name,
      email,
      password,
      phone,
      type
    }
  })
  res.send({
    createUser
  })
}

export async function getUserProfile(req, res) {
  const {id} = req.body
  const userProfile = await prisma.user.findUnique({
    where: {
      id: id
    }
  })
  res.json(userProfile)
}