"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = void 0;
/* eslint-disable import/prefer-default-export */
const jsonwebtoken_1 = require("jsonwebtoken");
const generateAccessToken = (email) => {
    return (0, jsonwebtoken_1.sign)(email, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3600s' });
};
exports.generateAccessToken = generateAccessToken;
