"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPatient = exports.bedNameValidator = exports.bedSectionValidator = void 0;
const client_1 = require(".prisma/client");
const prisma = new client_1.PrismaClient;
const bedSectionValidator = async (sectionId) => {
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
exports.bedSectionValidator = bedSectionValidator;
const bedNameValidator = async (name) => {
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
