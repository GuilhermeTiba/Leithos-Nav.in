import { Router } from "express";
import { searchPatientOrBed } from "../controllers/searchController";
import { createSection, getAllSections } from "../controllers/sectionController";
import { authenticateToken } from "../middleware/authenticateToken";

const router = Router();

router.get('/getallsections', authenticateToken, getAllSections)

router.post('/createsection', authenticateToken, createSection)
router.post('/search', authenticateToken, searchPatientOrBed)

module.exports = router