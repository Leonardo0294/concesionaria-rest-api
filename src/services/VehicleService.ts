import { IVehicleRepository } from "../interfaces/IVehicleRepository";
import { Vehicle } from "../models/Vehicle";

export class VehicleService {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async createVehicle(vehicle: Vehicle): Promise<Vehicle> {
    return this.vehicleRepository.create(vehicle);
  }

  async findVehicleById(id: string): Promise<Vehicle | null> {
    return this.vehicleRepository.findById(id);
  }

  async updateVehicle(id: string, vehicle: Vehicle): Promise<Vehicle | null> {
    return this.vehicleRepository.update(id, vehicle);
  }

  async deleteVehicle(id: string): Promise<void> {
    return this.vehicleRepository.delete(id);
  }
}
