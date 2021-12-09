"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const registerRouter = require('./routes/registerRouter');
const dashboardRouter = require('./routes/dashboardRouter');
const loginRouter = require('./routes/loginRouter');
const navbarRouter = require('./routes/navbarRouter');
const sectionRouter = require('./routes/sectionRouter');
const dataManagementRouter = require('./routes/dataManagementRouter');
const swagger_1 = require("./swagger");
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger_1.swaggerDocument));
app.use('/register', registerRouter);
app.use('/dashboard', dashboardRouter);
app.use('/login', loginRouter);
app.use('/navbar', navbarRouter);
app.use('/section', sectionRouter);
app.use('/dataManagement', dataManagementRouter);
app.listen(process.env.PORT || 4321, () => {
    console.log("Server listening on port 4321...");
});
