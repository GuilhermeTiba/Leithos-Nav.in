"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-import-module-exports
const express_1 = require("express");
const { createUser } = require('../controllers/userController.ts');
const router = (0, express_1.Router)();
router.post('/', createUser);
module.exports = router;
