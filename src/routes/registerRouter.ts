import path from "path";
import { Router } from "express";
import { checkUserCredencials } from "../controllers/authPasswordController";
import { createUser } from "../controllers/userController";
import { authenticateToken } from "../middleware/authenticateToken";
import { createBeds, getBedsPerSection, updateBed, deleteBed, getBedsPercentage} from "../controllers/bedsController";
import { createSection, getAllSections } from "../controllers/sectionController";

const router = Router();

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get('/bedsPercentage', authenticateToken, getBedsPercentage)

router.get('/getAllSections', authenticateToken, getAllSections)

router.post('/bedsPerSection', authenticateToken, getBedsPerSection)

router.post('/register', createUser)
router.post('/login', checkUserCredencials)

router.post('/createBeds', authenticateToken, createBeds)

router.post('/createSection', authenticateToken, createSection )

router.put('/updateBed', authenticateToken, updateBed)

router.delete('/deleteBed', authenticateToken, deleteBed)

module.exports = router