"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPatient = exports.checkIfBedNotExists = exports.checkIfBedIsNotAvailable = exports.bedNameValidator = exports.checkIfSectionIdExist = void 0;
const client_1 = require(".prisma/client");
const prisma = new client_1.PrismaClient();
const checkIfSectionIdExist = async (sectionId) => {
    const findSection = await prisma.section.count({
        where: {
            id: sectionId,
        },
    });
    if (findSection > 0) {
        return false;
    }
    return true;
};
exports.checkIfSectionIdExist = checkIfSectionIdExist;
const bedNameValidator = async (name) => {
    const findName = await prisma.beds.count({
        where: {
            name,
        },
    });
    if (findName > 0) {
        return true;
    }
    return false;
};
exports.bedNameValidator = bedNameValidator;
const checkIfBedIsNotAvailable = async (id) => {
    const findBed = await prisma.beds.findUnique({
        where: {
            id,
        },
    });
    if (findBed.status === 'AVAILABLE') {
        return false;
    }
    return true;
};
exports.checkIfBedIsNotAvailable = checkIfBedIsNotAvailable;
const checkIfBedNotExists = async (id) => {
    const findBed = await prisma.beds.count({
        where: {
            id,
        },
    });
    if (findBed > 0) {
        return false;
    }
    return true;
};
exports.checkIfBedNotExists = checkIfBedNotExists;
async function checkPatient(bedId) {
    const patient = await prisma.patient.count({
        where: {
            bedId,
        },
    });
    if (patient > 0) {
        return true;
    }
    return false;
}
exports.checkPatient = checkPatient;
