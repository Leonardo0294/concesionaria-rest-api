import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { VehicleController } from './controllers/VehicleController';
import { VehicleService } from './services/VehicleService';
import { VehicleMongoRepository } from './repositories/VehicleMongoRepository';
import vehicleRoutes from './routes/vehicleRoutes';
import clientRoutes from './routes/clientRoutes';

const vehicleRepo = new VehicleMongoRepository();
const vehicleService = new VehicleService(vehicleRepo);
const vehicleController = new VehicleController(vehicleService);

class Server {
  public app: Application;
  public port: number;

  constructor() {
    this.app = express();
    this.port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(bodyParser.json());
  }

  private routes(): void {
    // Aquí registramos las rutas
    this.app.use('/api', vehicleRoutes);
    this.app.use('/api', clientRoutes);
  } // Aquí se cierra correctamente el método routes()

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
