"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleController = void 0;
const Vehicle_1 = require("../models/Vehicle");
class VehicleController {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vehicleData = req.body;
                // Crear el vehículo utilizando el nuevo orden de parámetros
                const newVehicle = new Vehicle_1.Vehicle(vehicleData.marca, // marca
                vehicleData.modelo, // modelo
                vehicleData.año, // año
                vehicleData.precio, // precio
                undefined, // _id, se puede definir más tarde
                vehicleData.id // id opcional
                );
                const createdVehicle = yield this.vehicleService.createVehicle(newVehicle);
                res.status(201).json(createdVehicle);
            }
            catch (error) {
                res.status(500).json({ error: 'Error creating vehicle' });
            }
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const vehicle = yield this.vehicleService.findVehicleById(id);
                if (vehicle) {
                    res.status(200).json(vehicle);
                }
                else {
                    res.status(404).json({ message: 'Vehicle not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Error finding vehicle' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const vehicleData = req.body;
                // Crear un objeto Vehicle utilizando el nuevo orden de parámetros
                const updatedVehicleData = new Vehicle_1.Vehicle(vehicleData.marca, // marca
                vehicleData.modelo, // modelo
                vehicleData.año, // año
                vehicleData.precio, // precio
                undefined, // _id, se puede definir más tarde
                vehicleData.id // id opcional
                );
                const updatedVehicle = yield this.vehicleService.updateVehicle(id, updatedVehicleData);
                if (updatedVehicle) {
                    res.status(200).json(updatedVehicle);
                }
                else {
                    res.status(404).json({ message: 'Vehicle not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Error updating vehicle' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield this.vehicleService.deleteVehicle(id);
                res.status(200).json({ message: 'Vehicle deleted' });
            }
            catch (error) {
                res.status(500).json({ error: 'Error deleting vehicle' });
            }
        });
    }
}
exports.VehicleController = VehicleController;
