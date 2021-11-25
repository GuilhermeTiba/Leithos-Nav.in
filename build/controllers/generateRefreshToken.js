"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function generateRefreshToken(email) {
    (0, jsonwebtoken_1.sign)(email, process.env.REFRESH_TOKEN_SECRET);
}
exports.generateRefreshToken = generateRefreshToken;
