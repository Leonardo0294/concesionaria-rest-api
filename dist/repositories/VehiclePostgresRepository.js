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
exports.VehiclePostgresRepository = void 0;
// Esta clase simula un repositorio que interactúa con una base de datos PostgreSQL
class VehiclePostgresRepository {
    constructor() {
        // Simulación de una base de datos PostgreSQL
        this.vehicles = [];
    }
    create(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            this.vehicles.push(vehicle);
            // Aquí iría la lógica real de insertar en PostgreSQL
            return vehicle;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehicle = this.vehicles.find(v => v.id === id);
            // Aquí iría la lógica real de consulta a PostgreSQL
            return vehicle || null;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            // Aquí deberías realizar una consulta real a PostgreSQL
            return this.vehicles;
        });
    }
    update(id, vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.vehicles.findIndex(v => v.id === id);
            if (index !== -1) {
                this.vehicles[index] = vehicle;
                // Lógica de actualización en PostgreSQL
                return vehicle;
            }
            return null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.vehicles = this.vehicles.filter(v => v.id !== id);
        });
    }
}
exports.VehiclePostgresRepository = VehiclePostgresRepository;
