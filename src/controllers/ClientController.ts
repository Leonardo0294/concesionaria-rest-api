// src/controllers/ClientController.ts
import { Request, Response } from 'express';
import { ClientService } from '../services/ClientService';
import { Client } from '../models/Client';

export class ClientController {
  constructor(private clientService: ClientService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const clientData = req.body;
      const newClient = new Client(
        clientData.id,
        clientData.nombre,
        clientData.email,
        clientData.telefono
      );
      const createdClient = await this.clientService.createClient(newClient);
      res.status(201).json(createdClient);
    } catch (error) {
      res.status(500).json({ error: 'Error creating client' });
    }
  }

  async find(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const client = await this.clientService.findClientById(id);
      if (client) {
        res.status(200).json(client);
      } else {
        res.status(404).json({ message: 'Client not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error finding client' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const clientData = req.body;
      const updatedClient = await this.clientService.updateClient(id, clientData);
      if (updatedClient) {
        res.status(200).json(updatedClient);
      } else {
        res.status(404).json({ message: 'Client not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error updating client' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      await this.clientService.deleteClient(id);
      res.status(200).json({ message: 'Client deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting client' });
    }
  }

  async getAllClients(req: Request, res: Response): Promise<void> {
    try {
      const clients = await this.clientService.getAllClients();
      res.status(200).json(clients);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving clients' });
    }
  }
}
