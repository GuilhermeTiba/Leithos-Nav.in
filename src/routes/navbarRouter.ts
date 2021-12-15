// eslint-disable-next-line import/no-import-module-exports
import { Router } from 'express';

const { searchPatientOrBed } = require('../controllers/searchController.ts');
const { createSection, getAllSections } = require('../controllers/sectionController.ts');
const { authenticateToken } = require('../middleware/authenticateToken.ts');

const router = Router();

router.get('/get-all-sections', authenticateToken, getAllSections);

router.post('/create-section', authenticateToken, createSection);
router.post('/search', authenticateToken, searchPatientOrBed);

module.exports = router;
