"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSection = void 0;
const client_1 = require(".prisma/client");
const prisma = new client_1.PrismaClient;
async function checkSection(id) {
    const sectionCheck = await prisma.section.count({
        where: {
            id: id
        }
    });
    if (sectionCheck > 0) {
        return true;
    }
    return false;
}
exports.checkSection = checkSection;
