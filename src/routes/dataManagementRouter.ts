// eslint-disable-next-line import/no-import-module-exports
import { Router } from 'express';

const { allBeds } = require('../controllers/bedsController.ts');
const { getAllHistoric } = require('../controllers/historicController.ts');
const { authenticateToken } = require('../middleware/authenticateToken.ts');

const router = Router();

router.get('/allbeds', authenticateToken, allBeds);
router.get('/allhistoric', authenticateToken, getAllHistoric);

module.exports = router;
