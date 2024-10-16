// src/repositories/VehiclePostgresRepository.ts
import { IVehicleRepository } from './IVehicleRepository';
import { Vehicle } from '../models/Vehicle';

// Esta clase simula un repositorio que interactúa con una base de datos PostgreSQL
export class VehiclePostgresRepository implements IVehicleRepository {
    // Simulación de una base de datos PostgreSQL
    private vehicles: Vehicle[] = [];

    async create(vehicle: Vehicle): Promise<Vehicle> {
        this.vehicles.push(vehicle);
        // Aquí iría la lógica real de insertar en PostgreSQL
        return vehicle;
    }

    async findById(id: string): Promise<Vehicle | null> {
        const vehicle = this.vehicles.find(v => v.id === id);
        // Aquí iría la lógica real de consulta a PostgreSQL
        return vehicle || null;
    }

    async findAll(): Promise<Vehicle[]> {
        // Aquí deberías realizar una consulta real a PostgreSQL
        return this.vehicles;
    }

    async update(id: string, vehicle: Vehicle): Promise<Vehicle | null> {
        const index = this.vehicles.findIndex(v => v.id === id);
        if (index !== -1) {
            this.vehicles[index] = vehicle;
            // Lógica de actualización en PostgreSQL
            return vehicle;
        }
        return null;
    }

    async delete(id: string): Promise<void> {
        this.vehicles = this.vehicles.filter(v => v.id !== id);
        
    }
}
