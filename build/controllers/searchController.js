"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPatientOrBed = exports.searchSection = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const searchSection = async (req, res) => {
    const { id } = req.body;
    const searchSection = await prisma.section.findMany({
        where: {
            id: {
                startsWith: id
            }
        }
    });
    res.send({
        searchSection
    });
};
exports.searchSection = searchSection;
const searchPatientOrBed = async (req, res) => {
    const { searchString } = req.body;
    const searchPatient = await prisma.patient.findMany({
        where: {
            OR: [
                {
                    first_name: {
                        startsWith: searchString
                    },
                },
                {
                    last_name: {
                        startsWith: searchString
                    }
                },
                {
                    ssn: {
                        startsWith: searchString
                    }
                }
            ]
        },
    });
    const searchBed = await prisma.beds.findMany({
        where: {
            name: {
                startsWith: searchString
            },
        },
    });
    res.send({
        searchPatient,
        searchBed
    });
};
exports.searchPatientOrBed = searchPatientOrBed;
