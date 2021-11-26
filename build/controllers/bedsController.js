"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allBeds = exports.getBedsQuantityPerStatus = exports.occupiedBedsQuantity = exports.getBedsPercentage = exports.deleteBed = exports.updateBed = exports.getBedStatus = exports.createBeds = void 0;
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
    const cleaningBeds = await prisma.beds.count({
        where: {
            status: 'CLEANING'
        }
    });
    return cleaningBeds;
}
async function getNeedCleaningBedsQuantity() {
    const needCleaningBeds = await prisma.beds.count({
        where: {
            status: 'CLEANING_NEEDED'
        }
    });
    return needCleaningBeds;
}
async function getMaintanenceBedsQuantity() {
    const maintanenceBeds = await prisma.beds.count({
        where: {
            status: 'MAINTANENCE'
        }
    });
    return maintanenceBeds;
}
async function getNeedMaintanenceBedsQuantity() {
    const needMaintanenceBeds = await prisma.beds.count({
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
async function getBedsQuantityPerStatus(req, res) {
    const availableBedsQtd = await getAvailableBedsQuantity();
    const occupiedBedsQtd = await getOccupiedBedsQuantity();
    const cleaningBedsQtd = await getCleaningBedsQuantity();
    const needCleaningBedsQtd = await getNeedCleaningBedsQuantity();
    const maintanenceBedsQtd = await getMaintanenceBedsQuantity();
    const needMaintanenceBedsQtd = await getNeedMaintanenceBedsQuantity();
    res.send({
        availableBedsQtd,
        occupiedBedsQtd,
        cleaningBedsQtd,
        needCleaningBedsQtd,
        maintanenceBedsQtd,
        needMaintanenceBedsQtd
    });
}
exports.getBedsQuantityPerStatus = getBedsQuantityPerStatus;
async function allBeds(req, res) {
    const showAllBeds = await getAllBeds();
    res.send({
        showAllBeds
    });
}
exports.allBeds = allBeds;
