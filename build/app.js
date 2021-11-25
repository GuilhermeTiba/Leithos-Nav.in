"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const registerRouter = require('./routes/registerRouter');
const dashboardRouter = require('./routes/dashboardRouter');
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use('', registerRouter);
app.use('/dashboard', dashboardRouter);
app.listen(process.env.PORT || 80, () => {
    console.log("Server listening on port 4321...");
});
