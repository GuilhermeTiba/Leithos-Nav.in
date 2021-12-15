"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
const jsonwebtoken_1 = require("jsonwebtoken");
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.sendStatus(401);
    (0, jsonwebtoken_1.verify)(token, process.env.ACCESS_TOKEN_SECRET, (err, email) => {
        if (err)
            return res.sendStatus(403);
        req.email = email;
        return next();
    });
};
exports.authenticateToken = authenticateToken;
