import { Router } from "express";
import { getBedsPercentage, getBedsQuantityPerStatus } from "../controllers/bedsController";
import { authenticateToken } from "../middleware/authenticateToken";
import { getAvailableBedsfromAllSections } from "../controllers/sectionController";
import { getQuantityPerAge, getQuantityPerDiagnosis, getQuantityPerSex } from "../controllers/patientController";
import { getAverageTimes, getDailyInAndOuts, getMonthlyInAndOuts, getWeeklyInAndOuts, getYearlyInAndOuts } from "../controllers/historicController";
import { searchSection } from "../controllers/searchController";

const router = Router();

router.get('/bedspercentageperstatus',authenticateToken, getBedsPercentage);

router.get('/bedsquantityperstatus', authenticateToken, getBedsQuantityPerStatus);

router.get('/patientquantityperdiagnosis', authenticateToken, getQuantityPerDiagnosis)
router.get('/patientquantitypersex', authenticateToken, getQuantityPerSex)
router.get('/patientquantityperage', authenticateToken, getQuantityPerAge)

router.get('/dailyinandouts', authenticateToken, getDailyInAndOuts)
router.get('/weeklyinandouts', authenticateToken, getWeeklyInAndOuts)
router.get('/monthlyinandouts', authenticateToken, getMonthlyInAndOuts)
router.get('/yearlyinandouts', authenticateToken, getYearlyInAndOuts)

router.get('/averagetimeperfuncionality', authenticateToken, getAverageTimes)

router.get('/bedsquantityperstatusandsection', authenticateToken, getAvailableBedsfromAllSections)

router.post('/searchsection', authenticateToken, searchSection)

module.exports = router