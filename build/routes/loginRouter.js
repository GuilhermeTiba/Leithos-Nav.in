"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authPasswordController_1 = require("../controllers/authPasswordController");
const router = (0, express_1.Router)();
router.post('/', authPasswordController_1.checkUserCredencials);
module.exports = router;
