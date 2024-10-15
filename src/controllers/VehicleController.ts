import { Request, Response } from 'express';
import { VehicleService } from '../services/VehicleService';
import { Vehicle } from '../models/Vehicle';

export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const vehicleData = req.body;
      const newVehicle = new Vehicle(
        vehicleData.id,
        vehicleData.marca,
        vehicleData.modelo,
        vehicleData.año,
        vehicleData.precio
      );
      const createdVehicle = await this.vehicleService.createVehicle(newVehicle);
      res.status(201).json(createdVehicle);
    } catch (error) {
      res.status(500).json({ error: 'Error creating vehicle' });
    }
  }

  async find(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const vehicle = await this.vehicleService.findVehicleById(id);
      if (vehicle) {
        res.status(200).json(vehicle);
      } else {
        res.status(404).json({ message: 'Vehicle not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error finding vehicle' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const vehicleData = req.body;
      const updatedVehicle = await this.vehicleService.updateVehicle(id, vehicleData);
      if (updatedVehicle) {
        res.status(200).json(updatedVehicle);
      } else {
        res.status(404).json({ message: 'Vehicle not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error updating vehicle' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      await this.vehicleService.deleteVehicle(id);
      res.status(200).json({ message: 'Vehicle deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting vehicle' });
    }
  }
}
