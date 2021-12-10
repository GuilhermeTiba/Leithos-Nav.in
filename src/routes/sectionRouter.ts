import { Router } from "express";
import { createBeds, deleteBed, updateBed } from "../controllers/bedsController";
import { createPatient, deletePatient, getPatientData, updatePatientData } from "../controllers/patientController";
import { getAllBedStatsQuantityFromASection, getBedsFromASection } from "../controllers/sectionController";
import { authenticateToken } from "../middleware/authenticateToken";

const router = Router();

router.get('/beds-per-section/:id', authenticateToken, getBedsFromASection)
router.get('/beds-status-quantity-per-section/:id', authenticateToken, getAllBedStatsQuantityFromASection)
router.get('/patient/:id', authenticateToken, getPatientData)

router.post('/bed', authenticateToken, createBeds)
router.post('/patient', authenticateToken, createPatient)

router.put('/bed', authenticateToken, updateBed)
router.put('/patient', authenticateToken, updatePatientData)

router.delete('/bed', authenticateToken, deleteBed)
router.delete('/patient', authenticateToken, deletePatient)

module.exports = router