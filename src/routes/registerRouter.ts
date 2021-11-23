import path from "path";
import { Router } from "express";
import { checkUserCredencials } from "../controllers/authPasswordController";
import { createUser } from "../controllers/createUserController";
import { authenticateToken } from "../middleware/authenticateToken";
import { createBeds } from "../controllers/createBedsController";
import { allBeds, availableBedsQuantity, bedsPerSection, occupiedBedsQuantity } from "../controllers/bedsController";


const router = Router();

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get('/occupiedBeds', authenticateToken, occupiedBedsQuantity)
router.get('/availableBeds', authenticateToken, availableBedsQuantity)
router.get('/allBeds', authenticateToken, allBeds)
router.post('/bedsPerSection', authenticateToken, bedsPerSection)

router.post('/register', createUser)
router.post('/login', checkUserCredencials)

router.post('/createBeds', authenticateToken, createBeds)

export {router}