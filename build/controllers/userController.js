"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfile = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const prisma = new client_1.PrismaClient();
async function createUser(req, res) {
    const { first_name, last_name, email, phone, type } = req.body;
    const salt = await (0, bcrypt_1.genSalt)();
    const password = await (0, bcrypt_1.hash)(req.body.password, salt);
    const createUser = await prisma.user.create({
        data: {
            first_name,
            last_name,
            email,
            password,
            phone,
            type
        }
    });
    res.status(200).send({
        createUser
    });
}
exports.createUser = createUser;
async function getUserProfile(req, res) {
    const { id } = req.body;
    const userProfile = await prisma.user.findUnique({
        where: {
            id: id
        }
    });
    res.status(200).send({
        userProfile
    });
}
exports.getUserProfile = getUserProfile;
