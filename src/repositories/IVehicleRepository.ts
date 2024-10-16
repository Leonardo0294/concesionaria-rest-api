
import { Vehicle } from '../models/Vehicle';

export interface IVehicleRepository {
    create(vehicle: Vehicle): Promise<Vehicle>;
    findById(id: string): Promise<Vehicle | null>;
    findAll(): Promise<Vehicle[]>;
    update(id: string, vehicle: Vehicle): Promise<Vehicle | null>;
    delete(id: string): Promise<void>;
}
