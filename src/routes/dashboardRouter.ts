import { Router } from "express";
import { getBedsPercentage, getBedsQuantityPerStatus } from "../controllers/bedsController";
import { authenticateToken } from "../middleware/authenticateToken";
import { getAvailableBedsfromAllSections } from "../controllers/sectionController";
import { getQuantityPerAge, getQuantityPerDiagnosis, getQuantityPerSex } from "../controllers/patientController";
import { getAverageTimes, getDailyInAndOuts, getMonthlyInAndOuts, getWeeklyInAndOuts, getYearlyInAndOuts } from "../controllers/historicController";
import { searchSection } from "../controllers/searchController";

const router = Router();

router.get('/beds-percentage-per-status',authenticateToken, getBedsPercentage);

router.get('/beds-quantity-per-status', authenticateToken, getBedsQuantityPerStatus);

router.get('/patient-quantity-per-diagnosis', authenticateToken, getQuantityPerDiagnosis)
router.get('/patient-quantity-per-sex', authenticateToken, getQuantityPerSex)
router.get('/patient-quantity-per-age', authenticateToken, getQuantityPerAge)

router.get('/daily-in-and-outs', authenticateToken, getDailyInAndOuts)
router.get('/weekly-in-and-outs', authenticateToken, getWeeklyInAndOuts)
router.get('/monthly-in-and-outs', authenticateToken, getMonthlyInAndOuts)
router.get('/yearly-in-and-outs', authenticateToken, getYearlyInAndOuts)

router.get('/average-time-per-funcionality', authenticateToken, getAverageTimes)

router.get('/beds-quantity-per-status-and-section', authenticateToken, getAvailableBedsfromAllSections)

router.post('/search-section', authenticateToken, searchSection)

module.exports = router