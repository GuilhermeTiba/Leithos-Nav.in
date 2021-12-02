import { Router } from "express";
import { getBedsPercentage, getBedsQuantityPerStatus } from "../controllers/bedsController";
import { authenticateToken } from "../middleware/authenticateToken";
import { getbedsStatsPerSection } from "../controllers/sectionController";
import { getQuantityPerAge, getQuantityPerDiagnosis, getQuantityPerSex } from "../controllers/patientController";

const router = Router();

router.get('/bedsPercentagePerStatus',authenticateToken, getBedsPercentage);
router.get('/bedsQuantityPerStatus', authenticateToken, getBedsQuantityPerStatus);
router.get('/patientQuantityPerDiagnosis', authenticateToken, getQuantityPerDiagnosis)
router.get('/patientQuantityPerSex', authenticateToken, getQuantityPerSex)
router.get('/patientQuantityPerAge', authenticateToken, getQuantityPerAge)

router.post('/bedsQuantityPerStatusAndSection', authenticateToken, getbedsStatsPerSection)

module.exports = router