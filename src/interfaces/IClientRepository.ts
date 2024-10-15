import { Client } from "../models/Client";

export interface IClientRepository {
  create(client: Client): Promise<Client>;
  findById(id: string): Promise<Client | null>;
  update(id: string, client: Client): Promise<Client | null>;
  delete(id: string): Promise<void>;
}
