// eslint-disable-next-line import/no-import-module-exports
import { Router } from 'express';

const { createBeds, deleteBed, updateBed } = require('../controllers/bedsController.ts');
const {
  createPatient, deletePatient, getPatientData, updatePatientData,
} = require('../controllers/patientController.ts');
const { getAllBedStatsQuantityFromASection, getBedsFromASection } = require('../controllers/sectionController.ts');
const { authenticateToken } = require('../middleware/authenticateToken.ts');

const router = Router();

router.get('/beds-per-section/:id', authenticateToken, getBedsFromASection);
router.get('/beds-status-quantity-per-section/:id', authenticateToken, getAllBedStatsQuantityFromASection);
router.get('/patient/:id', authenticateToken, getPatientData);

router.post('/bed', authenticateToken, createBeds);
router.post('/patient', authenticateToken, createPatient);

router.put('/bed', authenticateToken, updateBed);
router.put('/patient', authenticateToken, updatePatientData);

router.delete('/bed', authenticateToken, deleteBed);
router.delete('/patient', authenticateToken, deletePatient);

module.exports = router;
