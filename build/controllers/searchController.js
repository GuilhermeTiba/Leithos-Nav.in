"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPatientOrBed = exports.searchSection = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const searchSection = async (req, res) => {
    const { id } = req.body;
    try {
        const searchSection = await prisma.section.findMany({
            where: {
                id: {
                    startsWith: id,
                },
            },
        });
        if (searchSection.length === 0) {
            res.status(404).send({
                message: 'No section found',
            });
        }
        else {
            res.status(200).send({
                searchSection,
            });
        }
    }
    catch (error) {
        res.status(503).send({
            error: 'Server error',
        });
    }
};
exports.searchSection = searchSection;
const searchPatientOrBed = async (req, res) => {
    const { searchString } = req.body;
    try {
        const searchPatient = await prisma.patient.findMany({
            where: {
                OR: [
                    {
                        first_name: {
                            startsWith: searchString,
                        },
                    },
                    {
                        last_name: {
                            startsWith: searchString,
                        },
                    },
                    {
                        ssn: {
                            startsWith: searchString,
                        },
                    },
                ],
            },
        });
        const searchBed = await prisma.beds.findMany({
            where: {
                name: {
                    startsWith: searchString,
                },
            },
        });
        if (searchBed.length === 0 && searchPatient.length === 0) {
            res.status(404).send({
                message: 'No bed or patient found',
            });
        }
        else {
            res.status(200).send({
                searchPatient,
                searchBed,
            });
        }
    }
    catch (error) {
        res.status(503).send({
            error: 'Server error',
        });
    }
};
exports.searchPatientOrBed = searchPatientOrBed;
