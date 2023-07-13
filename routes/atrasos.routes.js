import { Router } from "express";
import { GetAllAtrasos } from "../controllers/atrasos.controller.js";

const router = Router();

router.get("/", GetAllAtrasos);

export default router;
