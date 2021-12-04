import { Router } from "express";
import { createBeds, deleteBed, updateBed } from "../controllers/bedsController";
import { createPatient, getDiagnosisFromPatient, updateDiagnosticFromPatient } from "../controllers/patientController";
import { getBedsPerSection } from "../controllers/sectionController";
import { authenticateToken } from "../middleware/authenticateToken";

const router = Router();

router.get('/bedsPerSection/:sectionId', authenticateToken, getBedsPerSection)
router.get('/patientDiagnosis/:patientId', authenticateToken, getDiagnosisFromPatient)

router.post('/createBeds', authenticateToken, createBeds)
router.post('/createPatient', authenticateToken, createPatient)

router.put('/updateBed', authenticateToken, updateBed)
router.put('/updateDiagnosis', authenticateToken, updateDiagnosticFromPatient)

router.delete('/deleteBed', authenticateToken, deleteBed)

module.exports = router