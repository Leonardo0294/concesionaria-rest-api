"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientController_1 = require("../controllers/ClientController");
const ClientService_1 = require("../services/ClientService");
const ClientMongoRepository_1 = require("../repositories/ClientMongoRepository");
// Crear el router
const router = (0, express_1.Router)();
// Instanciar el repositorio y servicio de clientes
const clientRepo = new ClientMongoRepository_1.ClientMongoRepository();
const clientService = new ClientService_1.ClientService(clientRepo);
const clientController = new ClientController_1.ClientController(clientService);
// Definir las rutas para las operaciones de clientes
router.post('/clients', clientController.create.bind(clientController));
router.get('/clients', clientController.getAllClients.bind(clientController));
router.get('/clients/:id', clientController.find.bind(clientController));
router.put('/clients/:id', clientController.update.bind(clientController));
router.delete('/clients/:id', clientController.delete.bind(clientController));
exports.default = router;
