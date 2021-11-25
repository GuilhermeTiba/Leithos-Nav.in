import "dotenv/config";
import express from "express";
const registerRouter = require('../src/routes/registerRouter')
const dashboardRouter = require('../src/routes/dashboardRouter')

const app = express();

app.use(express.json());
app.use('', registerRouter);
app.use('/dashboard', dashboardRouter)

app.listen(4321, ()=>{
  console.log("Server listening on port 4321...")
})
