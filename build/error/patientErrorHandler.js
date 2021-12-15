"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfSsnExists = exports.checkValidName = exports.patientSsnValidator = exports.patientIdValidator = void 0;
const client_1 = require(".prisma/client");
const prisma = new client_1.PrismaClient();
const patientIdValidator = async (id) => {
    const findPatientIp = await prisma.patient.count({
        where: {
            id,
        },
    });
    if (findPatientIp > 0) {
        return false;
    }
    return true;
};
exports.patientIdValidator = patientIdValidator;
const patientSsnValidator = (ssn) => {
    let sum = 0;
    if (ssn === '00000000000')
        return false;
    for (let index = 1; index <= 9; index += 1) {
        sum += parseInt(ssn.substring(index - 1, index), 10) * (11 - index);
    }
    let rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11)
        rest = 0;
    if (rest !== parseInt(ssn.substring(9, 10), 10))
        return false;
    sum = 0;
    for (let index = 1; index <= 10; index += 1) {
        sum += parseInt(ssn.substring(index - 1, index), 10) * (12 - index);
        rest = (sum * 10) % 11;
    }
    if (rest === 10 || rest === 11)
        rest = 0;
    if (rest !== parseInt(ssn.substring(10, 11), 10))
        return false;
    return true;
};
exports.patientSsnValidator = patientSsnValidator;
const checkValidName = (name) => {
    const format = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\\/?~0-9]/;
    return format.test(name);
};
exports.checkValidName = checkValidName;
const checkIfSsnExists = async (ssn) => {
    const findSsn = await prisma.patient.count({
        where: {
            ssn,
        },
    });
    if (findSsn > 0) {
        return true;
    }
    return false;
};
exports.checkIfSsnExists = checkIfSsnExists;
