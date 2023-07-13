import { Router } from "express";

const routerError = Router();

routerError.get("/", (req, res) => {
    res.send("ERROR 404 ESTA PAGINA NO EXISTE PAPII!!!!!");
});

export default routerError;
