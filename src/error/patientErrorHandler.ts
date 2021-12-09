import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient()

export const patientIdValidator = async (id) => {
  const findPatientIp = await prisma.patient.count({
    where: {
      id : id
    }
  })
  if(findPatientIp > 0){
    return true
  } else {
    return false
  }
}

export const patientSsnValidator = (ssn: string) => {
  var sum = 0
  if( ssn == '00000000000') return false

  for (let index = 1; index <= 9 ; index++) {
    sum = sum + parseInt(ssn.substring(index - 1, index)) * (11 - index)
    var rest = (sum * 10) % 11 
  }

if(rest == 10 || rest == 11) rest = 0
if(rest !=  parseInt(ssn.substring(9, 10))) return false

sum = 0
for (let index = 1; index <= 10; index++) {
  sum = sum + parseInt(ssn.substring(index - 1, index)) * (12 - index)
  rest = (sum * 10) % 11
}

if(rest == 10 || rest == 11 ) rest = 0
if(rest != parseInt(ssn.substring(10, 11))) return false

return true
}

export const checkValidName = (name) => {
  var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/
  return format.test(name)
}

export const checkIfSsnExists = async (ssn) => {
  const findSsn = await prisma.patient.count({
    where:{
      ssn: ssn
    }
  })
  if(findSsn > 0){
    return true
  } else {
    return false
  }
}
