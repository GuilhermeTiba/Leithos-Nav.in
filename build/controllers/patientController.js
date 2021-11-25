"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPatient = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function createPatient(req, res) {
    const { sex, first_name, last_name, ssn, description, additional_informations, bed } = req.body;
    const createPatient = await prisma.patient.create({
        data: {
            sex,
            first_name,
            last_name,
            ssn,
            description,
            additional_informations,
            bed
        },
    });
    res.json(createPatient);
}
exports.createPatient = createPatient;
