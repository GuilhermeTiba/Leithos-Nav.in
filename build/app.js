"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const { swaggerDocument } = require('./swagger.ts');
const registerRouter = require('./routes/registerRouter.ts');
const dashboardRouter = require('./routes/dashboardRouter.ts');
const loginRouter = require('./routes/loginRouter.ts');
const navbarRouter = require('./routes/navbarRouter.ts');
const sectionRouter = require('./routes/sectionRouter.ts');
const dataManagementRouter = require('./routes/dataManagementRouter.ts');
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/register', registerRouter);
app.use('/dashboard', dashboardRouter);
app.use('/login', loginRouter);
app.use('/navbar', navbarRouter);
app.use('/section', sectionRouter);
app.use('/dataManagement', dataManagementRouter);
app.listen(process.env.PORT || 4321, () => {
    console.log('Server listening on port 4321...');
});
