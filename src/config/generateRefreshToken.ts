import { sign } from "jsonwebtoken";

export function generateRefreshToken(email) {
  sign(email, process.env.REFRESH_TOKEN_SECRET)
}