/* eslint-disable import/prefer-default-export */
import { sign } from 'jsonwebtoken';

export const generateAccessToken = (email : string) => {
  return sign(email, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3600s' });
};
