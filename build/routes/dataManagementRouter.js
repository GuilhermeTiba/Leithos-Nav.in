"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bedsController_1 = require("../controllers/bedsController");
const historicController_1 = require("../controllers/historicController");
const authenticateToken_1 = require("../middleware/authenticateToken");
const router = (0, express_1.Router)();
router.get('/allbeds', authenticateToken_1.authenticateToken, bedsController_1.allBeds);
router.get('/allhistoric', authenticateToken_1.authenticateToken, historicController_1.getAllHistoric);
module.exports = router;
