import { Router } from "express";
import { GetAllAutores } from "../controllers/autores.controller.js";

const router = Router();

router.get("/", GetAllAutores);

export default router;
