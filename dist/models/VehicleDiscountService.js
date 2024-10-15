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
exports.VehicleDiscountService = void 0;
class VehicleDiscountService {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
    }
    applyDiscount(id, percentage) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehicle = yield this.vehicleService.findVehicleById(id);
            if (vehicle) {
                vehicle.precio = vehicle.precio * (1 - percentage / 100);
                return this.vehicleService.updateVehicle(id, vehicle);
            }
            return null;
        });
    }
}
exports.VehicleDiscountService = VehicleDiscountService;
