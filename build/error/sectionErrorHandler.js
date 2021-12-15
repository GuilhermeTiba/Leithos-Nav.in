"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSection = void 0;
/* eslint-disable import/prefer-default-export */
const client_1 = require(".prisma/client");
const prisma = new client_1.PrismaClient();
const checkSection = async (id) => {
    const sectionCheck = await prisma.section.count({
        where: {
            id,
        },
    });
    if (sectionCheck > 0) {
        return true;
    }
    return false;
};
exports.checkSection = checkSection;
