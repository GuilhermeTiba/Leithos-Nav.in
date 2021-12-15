"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-import-module-exports */
const express_1 = require("express");
const { checkUserCredencials } = require('../controllers/authPasswordController.ts');
const router = (0, express_1.Router)();
router.post('/', checkUserCredencials);
module.exports = router;
