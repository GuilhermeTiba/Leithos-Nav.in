"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPatient = exports.checkIfBedNotExists = exports.checkIfBedIsNotAvailable = exports.bedNameValidator = exports.checkIfSectionIdExist = void 0;
const client_1 = require(".prisma/client");
const prisma = new client_1.PrismaClient;
const checkIfSectionIdExist = async (sectionId) => {
    const findSection = await prisma.section.count({
        where: {
            id: sectionId
        }
    });
    if (findSection > 0) {
        return true;
    }
    else {
        return false;
    }
};
exports.checkIfSectionIdExist = checkIfSectionIdExist;
const Validator = async (name) => {
    const findName = await prisma.beds.count({
        where: {
            name: name
        }
    });
    if (findName > 0) {
        return true;
    }
    else {
        return false;
    }
};
exports.bedNameValidator = bedNameValidator;
const checkIfBedIsNotAvailable = async (id) => {
    const findBed = await prisma.beds.findUnique({
        where: {
            id: id
        }
    });
    if (findBed.status == 'AVAILABLE') {
        return false;
    }
    else {
        return true;
    }
};
exports.checkIfBedIsNotAvailable = checkIfBedIsNotAvailable;
const checkIfBedNotExists = async (id) => {
    const findBed = await prisma.beds.count({
        where: {
            id: id
        }
    });
    if (findBed > 0) {
        return false;
    }
    else {
        return true;
    }
};
exports.checkIfBedNotExists = checkIfBedNotExists;
async function checkPatient(bedId) {
    const patient = await prisma.patient.count({
        where: {
            bedId: bedId
        }
    });
    if (patient > 0) {
        return true;
    }
    return false;
}
exports.checkPatient = checkPatient;
