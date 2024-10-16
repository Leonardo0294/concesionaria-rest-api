// src/routes/vehicleRoutes.ts
import { Router } from 'express';
import { VehicleController } from '../controllers/VehicleController';
import { VehicleService } from '../services/VehicleService';
import { VehicleMongoRepository } from '../repositories/VehicleMongoRepository';

// Crear el router
const router = Router();

// Instanciar el repositorio y el servicio
const vehicleRepo = new VehicleMongoRepository();
const vehicleService = new VehicleService(vehicleRepo);

// Instanciar el controlador de vehículos, pasando el servicio
const vehicleController = new VehicleController(vehicleService);

// Definir las rutas para las operaciones de vehículos
router.get('/vehicles', vehicleController.find.bind(vehicleController)); 
router.get('/vehicles/:id', vehicleController.find.bind(vehicleController)); 
router.post('/vehicles', vehicleController.create.bind(vehicleController)); 
router.put('/vehicles/:id', vehicleController.update.bind(vehicleController)); 
router.delete('/vehicles/:id', vehicleController.delete.bind(vehicleController)); 

export default router;
