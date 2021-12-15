"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBedStatsQuantityFromASection = exports.getAvailableBedsfromAllSections = exports.getBedsFromASection = exports.getAllSections = exports.createSection = void 0;
/* eslint-disable no-await-in-loop */
/* eslint-disable max-len */
const client_1 = require("@prisma/client");
const { checkIfSectionIdExist } = require('../error/bedsErrorHandler.ts');
const { checkSection } = require('../error/sectionErrorHandler.ts');
const prisma = new client_1.PrismaClient();
async function getAvailableBedsPerSectionQuantity(sectionId) {
    const availableBedsPerSection = await prisma.beds.count({
        where: {
            status: 'AVAILABLE',
            sectionId,
        },
    });
    return availableBedsPerSection;
}
async function getBedsPerSectionQuantity(section) {
    const bedsPerSection = await prisma.beds.count({
        where: {
            sectionId: section,
        },
    });
    return bedsPerSection;
}
async function allSectionsFunc() {
    const allSections = await prisma.section.findMany();
    return allSections;
}
async function availableBedsFromAllSectionsFunc() {
    const allSections = await prisma.section.findMany();
    const allSectionArray = Object.values(allSections);
    const responseArray = [];
    for (let index = 0; index < allSectionArray.length; index += 1) {
        const getAvailableBedsPerSection = await getAvailableBedsPerSectionQuantity(allSectionArray[index].id);
        responseArray.push({ section: allSectionArray[index].id, quantity: getAvailableBedsPerSection });
    }
    return responseArray;
}
async function allBedsFromAllSectionsFunc() {
    const allSections = await prisma.section.findMany();
    const allSectionArray = Object.values(allSections);
    const responseArray = [];
    for (let index = 0; index < allSectionArray.length; index += 1) {
        const getBedsPersectionQtd = await getBedsPerSectionQuantity(allSectionArray[index].id);
        responseArray.push({ section: allSectionArray[index].id, quantity: getBedsPersectionQtd });
    }
    return responseArray;
}
async function getAvaiableBedsPerSectionQuantityParams(section) {
    const availableBedsPerSection = await prisma.beds.count({
        where: {
            status: 'AVAILABLE',
            sectionId: section,
        },
    });
    return availableBedsPerSection;
}
async function getOccupiedBedsPerSectionQuantityParams(section) {
    const occupiedBedsPerSection = await prisma.beds.count({
        where: {
            status: 'OCCUPIED',
            sectionId: section,
        },
    });
    return occupiedBedsPerSection;
}
async function getNeedCleaningBedsPerSectionQuantityParams(section) {
    const needCleaningBedsPerSection = await prisma.beds.count({
        where: {
            sectionId: section,
            status: 'CLEANING_NEEDED',
        },
    });
    return needCleaningBedsPerSection;
}
async function getNeedMaintanenceBedsPerSectionQuantityParams(section) {
    const needMaintanenceBedsPerSection = await prisma.beds.count({
        where: {
            status: 'MAINTANENCE_NEEDED',
            sectionId: section,
        },
    });
    return needMaintanenceBedsPerSection;
}
async function getCleaningBedsPerSectionQuantityParams(section) {
    const cleaningBedsPerSection = await prisma.beds.count({
        where: {
            status: 'CLEANING',
            sectionId: section,
        },
    });
    return cleaningBedsPerSection;
}
async function getMaintenenceBedsPerSectionQuantityParams(section) {
    const maintanenceBedsPerSection = await prisma.beds.count({
        where: {
            status: 'MAINTANENCE',
            sectionId: section,
        },
    });
    return maintanenceBedsPerSection;
}
async function createSection(req, res) {
    const { id } = req.body;
    try {
        if (await checkSection(id)) {
            res.status(403).send({
                error: 'Section alredy exist',
            });
            return;
        }
        const section = await prisma.section.create({
            data: {
                id,
            },
        });
        res.status(200).send({
            section,
        });
    }
    catch (error) {
        res.status(503).send({
            error: 'Server error',
        });
    }
}
exports.createSection = createSection;
async function getAllSections(req, res) {
    try {
        const allSections = await allSectionsFunc();
        res.status(200).send({
            allSections,
        });
    }
    catch (error) {
        res.status(503).send({
            error: 'Server error',
        });
    }
}
exports.getAllSections = getAllSections;
async function getBedsFromASection(req, res) {
    const { id } = req.params;
    try {
        if (await checkIfSectionIdExist(id)) {
            res.status(404).send({
                error: 'Cannot find Section ID',
            });
            return;
        }
        const bedsPerSection = await prisma.beds.findMany({
            where: {
                sectionId: id,
            },
        });
        res.status(200).send({
            bedsPerSection,
        });
    }
    catch (error) {
        res.status(503).send({
            error: 'Server error',
        });
    }
}
exports.getBedsFromASection = getBedsFromASection;
async function getAvailableBedsfromAllSections(req, res) {
    try {
        const availableBedsFromAllSections = await availableBedsFromAllSectionsFunc();
        const allBedsFromAllSections = await allBedsFromAllSectionsFunc();
        res.status(200).send({
            availableBedsFromAllSections,
            allBedsFromAllSections,
        });
    }
    catch (error) {
        res.status(503).send({
            error: 'Server error',
        });
    }
}
exports.getAvailableBedsfromAllSections = getAvailableBedsfromAllSections;
async function getAllBedStatsQuantityFromASection(req, res) {
    const { id } = req.params;
    try {
        if (await checkIfSectionIdExist(id)) {
            res.status(404).send({
                error: 'Cannot find section ID',
            });
            return;
        }
        const availableBedsPerSection = await getAvaiableBedsPerSectionQuantityParams(id);
        const occupiedBedsPerSection = await getOccupiedBedsPerSectionQuantityParams(id);
        const cleaningBedsPerSection = await getCleaningBedsPerSectionQuantityParams(id);
        const maintanenceBedsPerSection = await getMaintenenceBedsPerSectionQuantityParams(id);
        const needCleaningBedsPerSection = await getNeedCleaningBedsPerSectionQuantityParams(id);
        const needMaintanenceBedsPerSection = await getNeedMaintanenceBedsPerSectionQuantityParams(id);
        res.status(200).send({
            availableBedsPerSection,
            occupiedBedsPerSection,
            cleaningBedsPerSection,
            maintanenceBedsPerSection,
            needCleaningBedsPerSection,
            needMaintanenceBedsPerSection,
        });
    }
    catch (error) {
        res.status(503).send({
            error: 'Server error',
        });
    }
}
exports.getAllBedStatsQuantityFromASection = getAllBedStatsQuantityFromASection;
