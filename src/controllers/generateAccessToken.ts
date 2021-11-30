import {sign} from "jsonwebtoken"

export function generateAccessToken (email){
  return sign(email, process.env.ACCESS_TOKEN_SECRET, {expiresIn : '1800s'})
}