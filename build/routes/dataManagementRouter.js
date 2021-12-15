"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-import-module-exports
const express_1 = require("express");
const { allBeds } = require('../controllers/bedsController.ts');
const { getAllHistoric } = require('../controllers/historicController.ts');
const { authenticateToken } = require('../middleware/authenticateToken.ts');
const router = (0, express_1.Router)();
router.get('/allbeds', authenticateToken, allBeds);
router.get('/allhistoric', authenticateToken, getAllHistoric);
module.exports = router;
