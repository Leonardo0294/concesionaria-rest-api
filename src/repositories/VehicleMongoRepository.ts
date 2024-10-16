import { MongoClient, ObjectId } from 'mongodb';
import { IVehicleRepository } from '../interfaces/IVehicleRepository';
import { Vehicle } from '../models/Vehicle';

export class VehicleMongoRepository implements IVehicleRepository {
  private db: any;

  constructor() {
    const client = new MongoClient('tu_url_de_mongodb'); // Reemplaza con tu URL de MongoDB
    client.connect()
      .then(() => {
        this.db = client.db('tu_nombre_de_base_de_datos'); // Reemplaza con tu nombre de base de datos
        console.log('Connected to MongoDB');
      })
      .catch(err => console.error('Could not connect to MongoDB', err));
  }

  async create(vehicle: Vehicle): Promise<Vehicle> {
    const result = await this.db.collection('vehicles').insertOne(vehicle);
    return { ...vehicle, id: result.insertedId.toString() }; // Asegúrate de que el modelo Vehicle tenga un campo "id"
  }

  async findById(id: string): Promise<Vehicle | null> {
    const vehicle = await this.db.collection('vehicles').findOne({ _id: new ObjectId(id) });
    return vehicle ? { ...vehicle, id: vehicle._id.toString() } : null; // Convertir ObjectId a string
  }

  async update(id: string, vehicle: Vehicle): Promise<Vehicle | null> {
    const result = await this.db.collection('vehicles').findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: vehicle },
      { returnOriginal: false }
    );
    return result.value ? { ...result.value, id: result.value._id.toString() } : null; // Convertir ObjectId a string
  }

  async delete(id: string): Promise<void> {
    await this.db.collection('vehicles').deleteOne({ _id: new ObjectId(id) });
  }

  async findAll(): Promise<Vehicle[]> {
    const vehicles = await this.db.collection('vehicles').find().toArray();
    return vehicles.map((vehicle: any) => {
      const id = vehicle._id ? vehicle._id.toString() : null; // Verificar si _id existe
      return { ...vehicle, id }; // Agregar id solo si existe
    });
  }
}
