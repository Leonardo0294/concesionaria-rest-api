"use strict";
// src/services/ClientService.ts
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
exports.ClientService = void 0;
class ClientService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    } // Cambiado a IClientRepository
    createClient(client) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clientRepository.create(client);
        });
    }
    findClientById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clientRepository.findById(id);
        });
    }
    updateClient(id, clientData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clientRepository.update(id, clientData);
        });
    }
    deleteClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clientRepository.delete(id);
        });
    }
    getAllClients() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clientRepository.findAll(); // Asegúrate de que findAll esté definido en la interfaz
        });
    }
}
exports.ClientService = ClientService;
