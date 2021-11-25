"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.occupiedBedsQuantity = exports.getBedsPercentage = exports.deleteBed = exports.updateBed = exports.getBedStatus = exports.getMaintenenceBedsPerSection = exports.getCleaningBedsPerSection = exports.getNeedMaintanenceBedsPerSection = exports.getNeedCleaningBedsPerSection = exports.getOccupiedBedsPerSection = exports.getAvailableBedsPerSectionQuantity = exports.getBedsPerSectionQuantity = exports.getBedsPerSection = exports.createBeds = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function createBeds(req, res) {
    const { name, type, section } = req.body;
    const bed = await prisma.beds.create({
        data: {
            name: name,
            type: type,
            sectionId: section
        },
    });
    res.json(bed);
}
exports.createBeds = createBeds;
async function getAvailableBedsQuantity() {
    const availableBedsQuantity = await prisma.beds.count({
        where: {
            status: 'AVAILABLE'
        }
    });
    return availableBedsQuantity;
}
async function getOccupiedBedsQuantity() {
    const occupiedBedsQuantity = await prisma.beds.count({
        where: {
            status: 'OCCUPIED'
        }
    });
    return occupiedBedsQuantity;
    //res.json(occupiedBedsQuantity)
}
async function getCleaningBedsQuantity() {
    const cleaningBeds = await prisma.beds.findMany({
        where: {
            status: 'CLEANING'
        }
    });
    return cleaningBeds;
}
async function getNeedCleaningBedsQuantity() {
    const needCleaningBeds = await prisma.beds.findMany({
        where: {
            status: 'CLEANING_NEEDED'
        }
    });
    return needCleaningBeds;
}
async function getMaintanenceBedsQuantity() {
    const maintanenceBeds = await prisma.beds.findMany({
        where: {
            status: 'MAINTANENCE'
        }
    });
    return maintanenceBeds;
}
async function getNeedMaintanenceBedsQuantity() {
    const needMaintanenceBeds = await prisma.beds.findMany({
        where: {
            status: 'MAINTANENCE_NEEDED'
        }
    });
    return needMaintanenceBeds;
}
async function getAllBeds() {
    const allBeds = await prisma.beds.findMany();
    return allBeds;
}
async function getBedsPerSection(req, res) {
    const { section } = req.body;
    const bedsPerSection = await prisma.beds.findMany({
        where: {
            sectionId: section
        }
    });
    res.send({
        bedsPerSection
    });
}
exports.getBedsPerSection = getBedsPerSection;
async function getBedsPerSectionQuantity(req, res) {
    const { section } = req.body;
    const bedsPerSection = await prisma.beds.count({
        where: {
            sectionId: section
        }
    });
    res.send({
        bedsPerSection
    });
}
exports.getBedsPerSectionQuantity = getBedsPerSectionQuantity;
async function getAvailableBedsPerSectionQuantity(req, res) {
    const { section } = req.body;
    const availableBedsPerSection = await prisma.beds.count({
        where: {
            status: 'AVAILABLE',
            sectionId: section
        }
    });
    res.send({
        availableBedsPerSection
    });
}
exports.getAvailableBedsPerSectionQuantity = getAvailableBedsPerSectionQuantity;
async function getOccupiedBedsPerSection(req, res) {
    const { section } = req.body;
    const occupiedBedsPerSection = await prisma.beds.findMany({
        where: {
            status: 'OCCUPIED',
            sectionId: section
        }
    });
    res.send({
        occupiedBedsPerSection
    });
}
exports.getOccupiedBedsPerSection = getOccupiedBedsPerSection;
async function getNeedCleaningBedsPerSection(req, res) {
    const { section } = req.body;
    const needCleaningBedsPerSection = await prisma.beds.findMany({
        where: {
            sectionId: section,
            status: 'CLEANING_NEEDED'
        }
    });
    res.send({
        needCleaningBedsPerSection
    });
}
exports.getNeedCleaningBedsPerSection = getNeedCleaningBedsPerSection;
async function getNeedMaintanenceBedsPerSection(req, res) {
    const { section } = req.body;
    const needMaintanenceBedsPerSection = await prisma.beds.findMany({
        where: {
            status: 'MAINTANENCE_NEEDED',
            sectionId: section
        }
    });
    res.send({
        needMaintanenceBedsPerSection
    });
}
exports.getNeedMaintanenceBedsPerSection = getNeedMaintanenceBedsPerSection;
async function getCleaningBedsPerSection(req, res) {
    const { section } = req.body;
    const CleaningBedsPerSection = await prisma.beds.findMany({
        where: {
            status: 'CLEANING',
            sectionId: section
        }
    });
    res.send({
        CleaningBedsPerSection
    });
}
exports.getCleaningBedsPerSection = getCleaningBedsPerSection;
async function getMaintenenceBedsPerSection(req, res) {
    const { section } = req.body;
    const maintanenceBedsPerSection = await prisma.beds.findMany({
        where: {
            status: 'MAINTANENCE',
            sectionId: section
        }
    });
    res.send({
        maintanenceBedsPerSection
    });
}
exports.getMaintenenceBedsPerSection = getMaintenenceBedsPerSection;
async function getBedStatus(req, res) {
    const { id } = req.body;
    const getBedStatus = await prisma.beds.findUnique({
        where: {
            id: id
        },
    });
    res.send({
        getBedStatus
    });
}
exports.getBedStatus = getBedStatus;
async function updateBed(req, res) {
    const { id, status, section, name } = req.body;
    const updateBedStatus = await prisma.beds.update({
        where: {
            id: id
        },
        data: {
            status: status,
            sectionId: section,
            name: name
        }
    });
    res.send({
        updateBedStatus
    });
}
exports.updateBed = updateBed;
async function deleteBed(req, res) {
    const { id } = req.body;
    const deleteBed = await prisma.beds.delete({
        where: {
            id: id
        }
    });
    res.send({
        deleteBed
    });
}
exports.deleteBed = deleteBed;
async function getBedsPercentage(req, res) {
    const availableBedsQuantity = await getAvailableBedsQuantity();
    const occupiedBedsQuantity = await getOccupiedBedsQuantity();
    const getAllBedsQuantity = await (await getAllBeds()).length;
    res.send({
        availableBedsQuantity,
        occupiedBedsQuantity,
        getAllBedsQuantity
    });
}
exports.getBedsPercentage = getBedsPercentage;
async function occupiedBedsQuantity(req, res) {
    const occupiedBedsQtd = getOccupiedBedsQuantity();
    res.send({
        occupiedBedsQtd
    });
}
exports.occupiedBedsQuantity = occupiedBedsQuantity;
