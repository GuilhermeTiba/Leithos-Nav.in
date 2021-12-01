import path from "path";
import { Router } from "express";
import { checkUserCredencials } from "../controllers/authPasswordController";
import { createUser } from "../controllers/userController";
import { authenticateToken } from "../middleware/authenticateToken";
import { createBeds, updateBed, deleteBed, allBeds } from "../controllers/bedsController";
import { createSection, getAllSections, getBedsPerSection} from "../controllers/sectionController";
import { getAllHistoric } from "../controllers/historicController";
import { createPatient } from "../controllers/patientController";

const router = Router();

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get('/getAllSections', authenticateToken, getAllSections)
router.get('/allBeds', authenticateToken, allBeds)
router.get('/allHistoric', authenticateToken, getAllHistoric)

router.post('/bedsPerSection', authenticateToken, getBedsPerSection)


router.post('/register', createUser)
router.post('/login', checkUserCredencials)

router.post('/createBeds', authenticateToken, createBeds)

router.post('/createPatient', authenticateToken, createPatient)

router.post('/createSection', authenticateToken, createSection )

router.put('/updateBed', authenticateToken, updateBed)

router.delete('/deleteBed', authenticateToken, deleteBed)

module.exports = router