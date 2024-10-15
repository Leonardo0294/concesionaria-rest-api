import { IVehicleRepository } from "../interfaces/IVehicleRepository";
import { Vehicle } from "../models/Vehicle";

export class VehicleMongoRepository implements IVehicleRepository {
  // Implementación simulada de los métodos
  async create(vehicle: Vehicle): Promise<Vehicle> {
    // Simulación de inserción en MongoDB
    return vehicle;
  }

  async findById(id: string): Promise<Vehicle | null> {
    // Simulación de búsqueda en MongoDB
    return null;
  }

  async update(id: string, vehicle: Vehicle): Promise<Vehicle | null> {
    // Simulación de actualización en MongoDB
    return vehicle;
  }

  async delete(id: string): Promise<void> {
    // Simulación de eliminación en MongoDB
  }
}
