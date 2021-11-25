"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const client_1 = require(".prisma/client");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
exports.router = router;
