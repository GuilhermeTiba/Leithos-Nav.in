import { Router } from "express";
import { searchPatientOrBed } from "../controllers/searchController";
import { createSection, getAllSections } from "../controllers/sectionController";
import { authenticateToken } from "../middleware/authenticateToken";

const router = Router();

router.get('/getAllSections', authenticateToken, getAllSections)

router.post('/createSection', authenticateToken, createSection)
router.post('/search', authenticateToken, searchPatientOrBed)

module.exports = router