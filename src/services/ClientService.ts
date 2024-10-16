// src/services/ClientService.ts

import { IClientRepository } from '../repositories/IClientRepository'; // Cambiado a IClientRepository
import { Client } from '../models/Client'; 

export class ClientService {
  constructor(private clientRepository: IClientRepository) {} // Cambiado a IClientRepository

  async createClient(client: Client): Promise<Client> {
    return this.clientRepository.create(client);
  }

  async findClientById(id: string): Promise<Client | null> {
    return this.clientRepository.findById(id);
  }

  async updateClient(id: string, clientData: Partial<Client>): Promise<Client | null> {
    return this.clientRepository.update(id, clientData);
  }

  async deleteClient(id: string): Promise<void> {
    return this.clientRepository.delete(id);
  }

  async getAllClients(): Promise<Client[]> {
    return this.clientRepository.findAll(); // Asegúrate de que findAll esté definido en la interfaz
  }
}
