// eslint-disable-next-line import/no-import-module-exports
import { Router } from 'express';

const { createUser } = require('../controllers/userController.ts');

const router = Router();

router.post('/', createUser);

module.exports = router;
