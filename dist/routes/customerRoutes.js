"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/customerRoutes.ts
const express_1 = require("express");
const CustomerController_1 = require("../controllers/CustomerController");
// Crear el router
const router = (0, express_1.Router)();
// Instanciar el controlador de clientes
const customerController = new CustomerController_1.CustomerController();
// Definir las rutas para las operaciones de clientes
router.get('/customers', customerController.getAllCustomers);
router.get('/customers/:id', customerController.getCustomerById);
router.post('/customers', customerController.createCustomer);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);
exports.default = router;
