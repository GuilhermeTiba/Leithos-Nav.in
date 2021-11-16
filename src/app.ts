import "dotenv/config"
import express, { Request, Response } from "express";


const app = express()

app.use(express.json())

app.get("/", (req :Request, res: Response) => {
  res.json("Working")
})

app.listen(4321, ()=>{
  console.log("Server listening on port 4321...")
})
