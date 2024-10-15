import express, { Application } from 'express';
import bodyParser from 'body-parser';

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
    // Aquí irán los controladores
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
