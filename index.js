import { Server } from "./model/server.js";
import { configDotenv } from "dotenv";

configDotenv();

const server = new Server();

server.listen();
