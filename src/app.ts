import "dotenv/config";
import express from "express";
import { router } from "./routes/registerRouter";

const app = express();

app.use(express.json());
app.use(router);

app.listen(4321, ()=>{
  console.log("Server listening on port 4321...")
})
