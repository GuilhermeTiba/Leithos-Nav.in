/* eslint-disable import/no-import-module-exports */
import { Router } from 'express';

const { checkUserCredencials } = require('../controllers/authPasswordController.ts');

const router = Router();

router.post('/', checkUserCredencials);

module.exports = router;
