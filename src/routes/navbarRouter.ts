import { Router } from "express";
import { createSection, getAllSections } from "../controllers/sectionController";
import { authenticateToken } from "../middleware/authenticateToken";

const router = Router();

router.get('/getAllSections', authenticateToken, getAllSections)

router.post('/createSection', authenticateToken, createSection)

module.exports = router