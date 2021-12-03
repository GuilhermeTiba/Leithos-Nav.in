import { Router } from "express";
import { getBedsPercentage, getBedsQuantityPerStatus } from "../controllers/bedsController";
import { authenticateToken } from "../middleware/authenticateToken";
import { getbedsStatsPerSection } from "../controllers/sectionController";
import { getQuantityPerAge, getQuantityPerDiagnosis, getQuantityPerSex } from "../controllers/patientController";
import { getAverageTimes, getDailyInAndOuts, getMonthlyInAndOuts, getWeeklyInAndOuts, getYearlyInAndOuts } from "../controllers/historicController";
import { searchSection } from "../controllers/searchController";

const router = Router();

router.get('/bedsPercentagePerStatus',authenticateToken, getBedsPercentage);

router.get('/bedsQuantityPerStatus', authenticateToken, getBedsQuantityPerStatus);

router.get('/patientQuantityPerDiagnosis', authenticateToken, getQuantityPerDiagnosis)
router.get('/patientQuantityPerSex', authenticateToken, getQuantityPerSex)
router.get('/patientQuantityPerAge', authenticateToken, getQuantityPerAge)

router.get('/dailyInAndOuts', authenticateToken, getDailyInAndOuts)
router.get('/weeklyInAndOuts', authenticateToken, getWeeklyInAndOuts)
router.get('/monthlyInAndOuts', authenticateToken, getMonthlyInAndOuts)
router.get('/yearlyInAndOuts', authenticateToken, getYearlyInAndOuts)

router.get('/averageTimePerFuncionality', authenticateToken, getAverageTimes)

router.post('/bedsQuantityPerStatusAndSection', authenticateToken, getbedsStatsPerSection)
router.post('/searchSection', authenticateToken, searchSection)

module.exports = router