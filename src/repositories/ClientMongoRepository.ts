import { Client } from '../models/Client'; // Asegúrate de que este modelo existe
import { MongoClient, ObjectId  } from 'mongodb';

export class ClientMongoRepository {
  private client: MongoClient;
  private db: any; // Aquí puedes definir el tipo de tu base de datos, por ejemplo, `Db`

  constructor() {
    this.client = new MongoClient(process.env.MONGODB_URI!); // Asegúrate de tener una URI válida
    this.connect();
  }

  private async connect() {
    await this.client.connect();
    this.db = this.client.db('your_database_name'); // Cambia por tu nombre de base de datos
  }

  async create(client: Client): Promise<Client> {
    const result = await this.db.collection('clients').insertOne(client);
    return { ...client, id: result.insertedId.toString() }; // Asignar el id de MongoDB
  }

  async findById(id: string): Promise<Client | null> {
    return this.db.collection('clients').findOne({ _id: new ObjectId(id) });
  }

  async update(id: string, clientData: Partial<Client>): Promise<Client | null> {
    const result = await this.db.collection('clients').findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: clientData },
      { returnOriginal: false }
    );
    return result.value;
  }

  async delete(id: string): Promise<void> {
    await this.db.collection('clients').deleteOne({ _id: new ObjectId(id) });
  }

  async findAll(): Promise<Client[]> {
    return this.db.collection('clients').find().toArray();
  }
}
