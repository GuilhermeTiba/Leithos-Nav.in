"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function generateAccessToken(email) {
    return (0, jsonwebtoken_1.sign)(email, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
}
exports.generateAccessToken = generateAccessToken;
