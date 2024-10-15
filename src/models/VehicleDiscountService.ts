import { VehicleService } from "../services/VehicleService";
import { Vehicle } from "../models/Vehicle";

export class VehicleDiscountService {
  constructor(private vehicleService: VehicleService) {}

  async applyDiscount(id: string, percentage: number): Promise<Vehicle | null> {
    const vehicle = await this.vehicleService.findVehicleById(id);
    if (vehicle) {
      vehicle.precio = vehicle.precio * (1 - percentage / 100);
      return this.vehicleService.updateVehicle(id, vehicle);
    }
    return null;
  }
}
