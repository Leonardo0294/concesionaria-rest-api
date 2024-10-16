import { Router } from 'express';
import { ClientController } from '../controllers/ClientController';
import { ClientService } from '../services/ClientService';
import { ClientMongoRepository } from '../repositories/ClientMongoRepository';

// Crear el router
const router = Router();

// Instanciar el repositorio y servicio de clientes
const clientRepo = new ClientMongoRepository();
const clientService = new ClientService(clientRepo);
const clientController = new ClientController(clientService);

// Definir las rutas para las operaciones de clientes
router.post('/clients', clientController.create.bind(clientController));
router.get('/clients', clientController.getAllClients.bind(clientController));
router.get('/clients/:id', clientController.find.bind(clientController));
router.put('/clients/:id', clientController.update.bind(clientController));
router.delete('/clients/:id', clientController.delete.bind(clientController));

export default router;
