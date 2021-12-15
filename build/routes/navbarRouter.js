"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-import-module-exports
const express_1 = require("express");
const { searchPatientOrBed } = require('../controllers/searchController.ts');
const { createSection, getAllSections } = require('../controllers/sectionController.ts');
const { authenticateToken } = require('../middleware/authenticateToken.ts');
const router = (0, express_1.Router)();
router.get('/get-all-sections', authenticateToken, getAllSections);
router.post('/create-section', authenticateToken, createSection);
router.post('/search', authenticateToken, searchPatientOrBed);
module.exports = router;
