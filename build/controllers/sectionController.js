"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSections = exports.createSection = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function createSection(req, res) {
    const { id } = req.body;
    const section = await prisma.section.create({
        data: {
            id: id
        }
    });
    res.json(section);
}
exports.createSection = createSection;
async function getAllSections(req, res) {
    const section = await prisma.section.findMany();
    res.json(section);
}
exports.getAllSections = getAllSections;
