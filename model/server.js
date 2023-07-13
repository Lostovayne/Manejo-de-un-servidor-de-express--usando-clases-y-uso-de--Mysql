import express from "express";
import cors from "cors";
import {
    routes,
    atrasosRoutes,
    autoresRoutes,
    librosRoutes,
    routerError,
} from "../routes/index.js";

export class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.pathLibros = "/libros";
        this.pathAutores = "/autores";
        this.pathAtrasos = "/atrasos";
        this.pathRutaBase = "/";
        this.middlewares();
        this.routes();
    }

    //middelware
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.pathRutaBase, routes);
        this.app.use(this.pathLibros, librosRoutes);
        this.app.use(this.pathAutores, autoresRoutes);
        this.app.use(this.pathAtrasos, atrasosRoutes);
        this.app.use("*", routerError);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
