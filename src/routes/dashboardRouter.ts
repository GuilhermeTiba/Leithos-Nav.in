// eslint-disable-next-line import/no-import-module-exports
import { Router } from 'express';

const { getBedsPercentage, getBedsQuantityPerStatus } = require('../controllers/bedsController.ts');
const { authenticateToken } = require('../middleware/authenticateToken.ts');
const { getAvailableBedsfromAllSections } = require('../controllers/sectionController.ts');
const { getQuantityPerAge, getQuantityPerDiagnosis, getQuantityPerSex } = require('../controllers/patientController.ts');
const {
  getAverageTimes, getDailyInAndOuts, getMonthlyInAndOuts, getWeeklyInAndOuts, getYearlyInAndOuts,
} = require('../controllers/historicController.ts');
const { searchSection } = require('../controllers/searchController.ts');

const router = Router();

router.get('/beds-percentage-per-status', authenticateToken, getBedsPercentage);

router.get('/beds-quantity-per-status', authenticateToken, getBedsQuantityPerStatus);

router.get('/patient-quantity-per-diagnosis', authenticateToken, getQuantityPerDiagnosis);
router.get('/patient-quantity-per-sex', authenticateToken, getQuantityPerSex);
router.get('/patient-quantity-per-age', authenticateToken, getQuantityPerAge);

router.get('/daily-in-and-outs', authenticateToken, getDailyInAndOuts);
router.get('/weekly-in-and-outs', authenticateToken, getWeeklyInAndOuts);
router.get('/monthly-in-and-outs', authenticateToken, getMonthlyInAndOuts);
router.get('/yearly-in-and-outs', authenticateToken, getYearlyInAndOuts);

router.get('/average-time-per-funcionality', authenticateToken, getAverageTimes);

router.get('/beds-quantity-per-status-and-section', authenticateToken, getAvailableBedsfromAllSections);

router.post('/search-section', authenticateToken, searchSection);

module.exports = router;
