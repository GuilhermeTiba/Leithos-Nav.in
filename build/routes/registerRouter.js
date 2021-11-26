"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
const authPasswordController_1 = require("../controllers/authPasswordController");
const userController_1 = require("../controllers/userController");
const authenticateToken_1 = require("../middleware/authenticateToken");
const bedsController_1 = require("../controllers/bedsController");
const sectionController_1 = require("../controllers/sectionController");
const router = (0, express_1.Router)();
router.get('/register', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../public/index.html"));
});
router.get('/getAllSections', authenticateToken_1.authenticateToken, sectionController_1.getAllSections);
router.get('/allBeds', authenticateToken_1.authenticateToken, bedsController_1.allBeds);
router.post('/bedsPerSection', authenticateToken_1.authenticateToken, sectionController_1.getBedsPerSection);
router.post('/register', userController_1.createUser);
router.post('/login', authPasswordController_1.checkUserCredencials);
router.post('/createBeds', authenticateToken_1.authenticateToken, bedsController_1.createBeds);
router.post('/createSection', authenticateToken_1.authenticateToken, sectionController_1.createSection);
router.put('/updateBed', authenticateToken_1.authenticateToken, bedsController_1.updateBed);
router.delete('/deleteBed', authenticateToken_1.authenticateToken, bedsController_1.deleteBed);
module.exports = router;
