"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const VehicleController_1 = require("./controllers/VehicleController");
const VehicleService_1 = require("./services/VehicleService");
const VehicleMongoRepository_1 = require("./repositories/VehicleMongoRepository");
const vehicleRepo = new VehicleMongoRepository_1.VehicleMongoRepository();
const vehicleService = new VehicleService_1.VehicleService(vehicleRepo);
const vehicleController = new VehicleController_1.VehicleController(vehicleService);
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
        this.config();
        this.routes();
    }
    config() {
        this.app.use(body_parser_1.default.json());
    }
    routes() {
        // Aquí irán los controladores
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
const server = new Server();
server.start();
