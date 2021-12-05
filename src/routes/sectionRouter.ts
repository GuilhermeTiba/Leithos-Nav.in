import { Router } from "express";
import { createBeds, deleteBed, updateBed } from "../controllers/bedsController";
import { createPatient, deletePatient, getPatientData, updatePatientData } from "../controllers/patientController";
import { getAllBedStatsQuantityFromASection, getBedsFromASection } from "../controllers/sectionController";
import { authenticateToken } from "../middleware/authenticateToken";

const router = Router();

router.get('/bedsPerSection/:sectionId', authenticateToken, getBedsFromASection)
router.get('/bedsStatusQuantityPerSection/:sectionId', authenticateToken, getAllBedStatsQuantityFromASection)
router.get('/patientData/:patientId', authenticateToken, getPatientData)

router.post('/createBeds', authenticateToken, createBeds)
router.post('/createPatient', authenticateToken, createPatient)

router.put('/updateBed', authenticateToken, updateBed)
router.put('/updatePatientData', authenticateToken, updatePatientData)

router.delete('/deleteBed', authenticateToken, deleteBed)
router.delete('/deletePatient', authenticateToken, deletePatient)

module.exports = router