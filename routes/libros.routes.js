import { Router } from "express";
import { getAllLibros, GetIdLibro } from "../controllers/libros.controller.js";

const router = Router();

router.get("/", getAllLibros);
router.get("/mas_solicitado", GetIdLibro);

export default router;
