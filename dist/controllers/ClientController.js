"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const Client_1 = require("../models/Client");
class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientData = req.body;
                const newClient = new Client_1.Client(clientData.id, clientData.nombre, clientData.email, clientData.telefono);
                const createdClient = yield this.clientService.createClient(newClient);
                res.status(201).json(createdClient);
            }
            catch (error) {
                res.status(500).json({ error: 'Error creating client' });
            }
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const client = yield this.clientService.findClientById(id);
                if (client) {
                    res.status(200).json(client);
                }
                else {
                    res.status(404).json({ message: 'Client not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Error finding client' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const clientData = req.body;
                const updatedClient = yield this.clientService.updateClient(id, clientData);
                if (updatedClient) {
                    res.status(200).json(updatedClient);
                }
                else {
                    res.status(404).json({ message: 'Client not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Error updating client' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield this.clientService.deleteClient(id);
                res.status(200).json({ message: 'Client deleted' });
            }
            catch (error) {
                res.status(500).json({ error: 'Error deleting client' });
            }
        });
    }
    getAllClients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield this.clientService.getAllClients();
                res.status(200).json(clients);
            }
            catch (error) {
                res.status(500).json({ error: 'Error retrieving clients' });
            }
        });
    }
}
exports.ClientController = ClientController;
