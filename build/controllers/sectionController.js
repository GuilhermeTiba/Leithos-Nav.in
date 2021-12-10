"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBedStatsQuantityFromASection = exports.getAvailableBedsfromAllSections = exports.getBedsFromASection = exports.getAllSections = exports.createSection = void 0;
const client_1 = require("@prisma/client");
const bedsErrorHandler_1 = require("../error/bedsErrorHandler");
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
    try {
        const allSections = await allSectionsFunc();
        res.status(200).send({
            allSections
        });
    }
    catch (error) {
        res.status(500).send({
            error: 'Server error'
        });
    }
}
exports.getAllSections = getAllSections;
async function getBedsFromASection(req, res) {
    const { id } = req.params;
    try {
        if (await (0, bedsErrorHandler_1.checkIfSectionIdExist)(id)) {
            const bedsPerSection = await prisma.beds.findMany({
                where: {
                    sectionId: id
                }
            });
            res.status(200).send({
                bedsPerSection
            });
        }
        else {
            res.status(400).send({
                error: 'Could not find SectionIP'
            });
        }
    }
    catch (error) {
        res.status(500).send({
            error: 'Server error'
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
            allBedsFromAllSections
        });
    }
    catch (error) {
        res.status(500).send({
            error: 'Server error'
        });
    }
}
exports.getAvailableBedsfromAllSections = getAvailableBedsfromAllSections;
async function getAllBedStatsQuantityFromASection(req, res) {
    const { id } = req.params;
    try {
        if (await (0, bedsErrorHandler_1.checkIfSectionIdExist)(id)) {
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
                needMaintanenceBedsPerSection
            });
        }
        else {
            res.status(400).send({
                error: 'Could not find section IP'
            });
        }
    }
    catch (error) {
        res.status(500).send({
            error: 'Server error'
        });
    }
}
exports.getAllBedStatsQuantityFromASection = getAllBedStatsQuantityFromASection;
async function getBedsPerSectionQuantity(section) {
    const bedsPerSection = await prisma.beds.count({
        where: {
            sectionId: section
        }
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
        responseArray.push({ "section": allSectionArray[index].id, "quantity": getAvailableBedsPerSection });
    }
    return responseArray;
}
async function allBedsFromAllSectionsFunc() {
    const allSections = await prisma.section.findMany();
    const allSectionArray = Object.values(allSections);
    const responseArray = [];
    for (let index = 0; index < allSectionArray.length; index += 1) {
        const getBedsPersectionQtd = await getBedsPerSectionQuantity(allSectionArray[index].id);
        responseArray.push({ "section": allSectionArray[index].id, "quantity": getBedsPersectionQtd });
    }
    return responseArray;
}
async function getAvailableBedsPerSectionQuantity(sectionId) {
    const availableBedsPerSection = await prisma.beds.count({
        where: {
            status: 'AVAILABLE',
            sectionId: sectionId
        }
    });
    return availableBedsPerSection;
}
async function getAvaiableBedsPerSectionQuantityParams(section) {
    const availableBedsPerSection = await prisma.beds.count({
        where: {
            status: 'AVAILABLE',
            sectionId: section
        }
    });
    return availableBedsPerSection;
}
async function getOccupiedBedsPerSectionQuantityParams(section) {
    const occupiedBedsPerSection = await prisma.beds.count({
        where: {
            status: 'OCCUPIED',
            sectionId: section
        }
    });
    return occupiedBedsPerSection;
}
async function getNeedCleaningBedsPerSectionQuantityParams(section) {
    const needCleaningBedsPerSection = await prisma.beds.count({
        where: {
            sectionId: section,
            status: 'CLEANING_NEEDED'
        }
    });
    return needCleaningBedsPerSection;
}
async function getNeedMaintanenceBedsPerSectionQuantityParams(section) {
    const needMaintanenceBedsPerSection = await prisma.beds.count({
        where: {
            status: 'MAINTANENCE_NEEDED',
            sectionId: section
        }
    });
    return needMaintanenceBedsPerSection;
}
async function getCleaningBedsPerSectionQuantityParams(section) {
    const cleaningBedsPerSection = await prisma.beds.count({
        where: {
            status: 'CLEANING',
            sectionId: section
        }
    });
    return cleaningBedsPerSection;
}
async function getMaintenenceBedsPerSectionQuantityParams(section) {
    const maintanenceBedsPerSection = await prisma.beds.count({
        where: {
            status: 'MAINTANENCE',
            sectionId: section
        }
    });
    return maintanenceBedsPerSection;
}
