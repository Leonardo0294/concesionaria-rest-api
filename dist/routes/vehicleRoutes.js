"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/vehicleRoutes.ts
const express_1 = require("express");
const VehicleController_1 = require("../controllers/VehicleController");
const VehicleService_1 = require("../services/VehicleService");
const VehicleMongoRepository_1 = require("../repositories/VehicleMongoRepository");
// Crear el router
const router = (0, express_1.Router)();
// Instanciar el repositorio y el servicio
const vehicleRepo = new VehicleMongoRepository_1.VehicleMongoRepository();
const vehicleService = new VehicleService_1.VehicleService(vehicleRepo);
// Instanciar el controlador de vehículos, pasando el servicio
const vehicleController = new VehicleController_1.VehicleController(vehicleService);
// Definir las rutas para las operaciones de vehículos
router.get('/vehicles', vehicleController.find.bind(vehicleController));
router.get('/vehicles/:id', vehicleController.find.bind(vehicleController));
router.post('/vehicles', vehicleController.create.bind(vehicleController));
router.put('/vehicles/:id', vehicleController.update.bind(vehicleController));
router.delete('/vehicles/:id', vehicleController.delete.bind(vehicleController));
exports.default = router;
