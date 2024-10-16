// src/repositories/IClientRepository.ts

import { Client } from '../models/Client';

export interface IClientRepository {
  findById(id: string): Promise<Client | null>;
  create(client: Client): Promise<Client>;
  update(id: string, client: Partial<Client>): Promise<Client | null>; // Cambiar aquí
  delete(id: string): Promise<void>;
  findAll(): Promise<Client[]>;
}
