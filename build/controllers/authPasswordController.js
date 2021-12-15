"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserCredencials = void 0;
/* eslint-disable import/prefer-default-export */
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const { generateAccessToken } = require('../config/generateAccessToken.ts');
const prisma = new client_1.PrismaClient();
const checkUserCredencials = async (req, res) => {
    const { email, password } = req.body;
    const findUserPassword = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    try {
        if (await (0, bcrypt_1.compare)(password, findUserPassword.password)) {
            const accessToken = generateAccessToken({ email });
            res.status(200).send({
                accessToken,
            });
        }
        else {
            res.status(405).send('Not Allowed');
        }
    }
    catch (error) {
        res.status(503).send({
            error: 'Server error',
        });
    }
};
exports.checkUserCredencials = checkUserCredencials;
