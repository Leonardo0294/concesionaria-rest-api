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
exports.ClientMongoRepository = void 0;
const mongodb_1 = require("mongodb");
class ClientMongoRepository {
    constructor() {
        this.client = new mongodb_1.MongoClient(process.env.MONGODB_URI); // Asegúrate de tener una URI válida
        this.connect();
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.connect();
            this.db = this.client.db('your_database_name'); // Cambia por tu nombre de base de datos
        });
    }
    create(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.collection('clients').insertOne(client);
            return Object.assign(Object.assign({}, client), { id: result.insertedId.toString() }); // Asignar el id de MongoDB
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.collection('clients').findOne({ _id: new mongodb_1.ObjectId(id) });
        });
    }
    update(id, clientData) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.collection('clients').findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, { $set: clientData }, { returnOriginal: false });
            return result.value;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db.collection('clients').deleteOne({ _id: new mongodb_1.ObjectId(id) });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.collection('clients').find().toArray();
        });
    }
}
exports.ClientMongoRepository = ClientMongoRepository;
