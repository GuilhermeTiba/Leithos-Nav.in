import path from "path";
import { Router } from "express";
import { checkUserCredencials } from "../controllers/authPasswordController";
import { createUser } from "../controllers/userController";
import { authenticateToken } from "../middleware/authenticateToken";
import { createBeds, allBeds, availableBedsQuantity, bedsPerSection, occupiedBedsQuantity, updateBed, deleteBed} from "../controllers/bedsController";
import { createSection, findAllSections } from "../controllers/sectionController";



const router = Router();

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get('/occupiedBeds', authenticateToken, occupiedBedsQuantity)
router.get('/availableBeds', authenticateToken, availableBedsQuantity)
router.get('/allBeds', authenticateToken, allBeds)

router.get('/findAllSections', authenticateToken, findAllSections)

router.post('/bedsPerSection', authenticateToken, bedsPerSection)

router.post('/register', createUser)
router.post('/login', checkUserCredencials)

router.post('/createBeds', authenticateToken, createBeds)

router.post('/createSection', authenticateToken, createSection )

router.put('/updateBed', authenticateToken, updateBed)

router.delete('/deleteBed', authenticateToken, deleteBed)

export {router}