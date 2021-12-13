"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allBeds = exports.getBedsQuantityPerStatus = exports.occupiedBedsQuantity = exports.getBedsPercentage = exports.deleteBed = exports.updateBed = exports.updateBedFunc = exports.getBedStatus = exports.createBeds = void 0;
const client_1 = require("@prisma/client");
const uuid_1 = require("uuid");
const bedsErrorHandler_1 = require("../error/bedsErrorHandler");
const prisma = new client_1.PrismaClient();
async function createBeds(req, res) {
    const { name, type, section } = req.body;
    try {
        const uuid = await (0, uuid_1.v4)();
        if (await (0, bedsErrorHandler_1.bedNameValidator)(name)) {
            res.status(403).send({
                error: 'Bed name already exists'
            });
            return;
        }
        if (await (0, bedsErrorHandler_1.checkIfSectionIdExist)(section)) {
            res.status(404).send({
                error: 'Section does not exist'
            });
            return;
        }
        const createBed = await prisma.beds.create({
            data: {
                id: uuid,
                name: name,
                type: type,
                sectionId: section
            }
        });
        const findBed = await prisma.beds.findUnique({
            where: {
                id: uuid
            }
        });
        const now = new Date().getTime();
        const lastTime = findBed.status_changed_date.getTime();
        const timeDifference = now - lastTime;
        const createHistoric = await prisma.bedHistoric.create({
            data: {
                bedsId: uuid,
                lastBedStatus: findBed.status,
                newBedStatus: 'AVAILABLE',
                lastModifiedDate: findBed.status_changed_date,
                timeDifference: timeDifference
            }
        });
        res.status(200).send({
            createBed,
            createHistoric
        });
    }
    catch (error) {
        res.status(500).send({
            error: 'Server error'
        });
    }
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
const updateBedFunc = async (id, status, section, name, type) => {
    const findBed = await prisma.beds.findUnique({
        where: {
            id: id
        }
    });
    if (findBed.status != "AVAILABLE" && status == "OCCUPIED") {
        return { Error: "Bed needs to be available to make this change." };
    }
    else {
        const now = new Date().getTime();
        const lastTime = findBed.status_changed_date.getTime();
        const timeDifference = now - lastTime;
        const createHistoric = await prisma.bedHistoric.create({
            data: {
                bedsId: id,
                lastBedStatus: findBed.status,
                newBedStatus: status,
                lastModifiedDate: findBed.status_changed_date,
                timeDifference: timeDifference
            }
        });
        const updateBedStatus = await prisma.beds.update({
            where: {
                id: id
            },
            data: {
                status: status,
                sectionId: section,
                name: name,
                type: type
            }
        });
        return {
            updateBedStatus: updateBedStatus,
            createHistoric: createHistoric
        };
    }
};
exports.updateBedFunc = updateBedFunc;
async function updateBed(req, res) {
    const { id, status, section, name, type } = req.body;
    if (await (0, bedsErrorHandler_1.checkIfBedNotExists)(id)) {
        res.status(404).send({
            error: 'Bed ID does not exist'
        });
        return;
    }
    if (await (0, bedsErrorHandler_1.bedNameValidator)(name)) {
        res.status(403).send({
            error: 'Bed name already exists'
        });
        return;
    }
    if (await (0, bedsErrorHandler_1.checkIfSectionIdExist)(section)) {
        res.status(404).send({
            error: 'Section ID does not exist'
        });
        return;
    }
    const updateBed = await (0, exports.updateBedFunc)(id, status, section, name, type);
    res.send({
        updateBed
    });
}
exports.updateBed = updateBed;
async function deleteBed(req, res) {
    const { bedId } = req.body;
    if (await (0, bedsErrorHandler_1.checkPatient)(bedId)) {
        res.status = 403;
        res.send({
            error: "Leito Ocuppaded"
        });
        return;
    }
    try {
        const deleteBedHistoric = await prisma.bedHistoric.deleteMany({
            where: {
                bedsId: bedId
            }
        });
        const deleteBed = await prisma.beds.delete({
            where: {
                id: bedId
            }
        });
        res.send({
            deleteBed
        });
    }
    catch (error) {
        res.status(404).send({
            error: "Bed Not found"
        });
    }
}
exports.deleteBed = deleteBed;
async function getBedsPercentage(req, res) {
    try {
        const availableBedsQuantity = await getAvailableBedsQuantity();
        const occupiedBedsQuantity = await getOccupiedBedsQuantity();
        const getAllBedsQuantity = (await getAllBeds()).length;
        res.status(200).send({
            availableBedsQuantity,
            occupiedBedsQuantity,
            getAllBedsQuantity
        });
    }
    catch (error) {
        res.status(500).send({
            error: 'Database connection error'
        });
    }
}
exports.getBedsPercentage = getBedsPercentage;
async function occupiedBedsQuantity(req, res) {
    try {
        const occupiedBedsQtd = await getOccupiedBedsQuantity();
        res.status(200).send({
            occupiedBedsQtd
        });
    }
    catch (error) {
        res.status(500).send({
            error: 'Server error'
        });
    }
}
exports.occupiedBedsQuantity = occupiedBedsQuantity;
async function getBedsQuantityPerStatus(req, res) {
    try {
        const availableBedsQtd = await getAvailableBedsQuantity();
        const occupiedBedsQtd = await getOccupiedBedsQuantity();
        const cleaningBedsQtd = await getCleaningBedsQuantity();
        const needCleaningBedsQtd = await getNeedCleaningBedsQuantity();
        const maintanenceBedsQtd = await getMaintanenceBedsQuantity();
        const needMaintanenceBedsQtd = await getNeedMaintanenceBedsQuantity();
        res.status(200).send({
            availableBedsQtd,
            occupiedBedsQtd,
            cleaningBedsQtd,
            needCleaningBedsQtd,
            maintanenceBedsQtd,
            needMaintanenceBedsQtd
        });
    }
    catch (error) {
        res.status(500).send({
            error: 'Database connection error'
        });
    }
}
exports.getBedsQuantityPerStatus = getBedsQuantityPerStatus;
async function allBeds(req, res) {
    try {
        const showAllBeds = await getAllBeds();
        res.status(200).send({
            showAllBeds
        });
    }
    catch (error) {
        res.status(500).send({
            error: 'Server error'
        });
    }
}
exports.allBeds = allBeds;
