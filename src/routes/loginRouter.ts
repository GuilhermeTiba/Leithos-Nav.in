import { Router } from "express";
import { checkUserCredencials } from "../controllers/authPasswordController";

const router = Router();

router.post('/', checkUserCredencials)

module.exports = router