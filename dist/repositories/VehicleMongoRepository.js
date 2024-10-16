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
exports.VehicleMongoRepository = void 0;
const mongodb_1 = require("mongodb");
class VehicleMongoRepository {
    constructor() {
        const client = new mongodb_1.MongoClient('mongodb+srv://leonardo0294:wdwPqZxDPHKyc5jp@cluster0.o1znu.mongodb.net/vehiculos?retryWrites=true&w=majority&appName=Cluster0'); // Reemplaza con tu URL de MongoDB
        client.connect()
            .then(() => {
            this.db = client.db('tu_nombre_de_base_de_datos'); // Reemplaza con tu nombre de base de datos
            console.log('Connected to MongoDB');
        })
            .catch(err => console.error('Could not connect to MongoDB', err));
    }
    create(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.collection('vehicles').insertOne(vehicle);
            return Object.assign(Object.assign({}, vehicle), { id: result.insertedId.toString() }); // Asegúrate de que el modelo Vehicle tenga un campo "id"
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehicle = yield this.db.collection('vehicles').findOne({ _id: new mongodb_1.ObjectId(id) });
            return vehicle ? Object.assign(Object.assign({}, vehicle), { id: vehicle._id.toString() }) : null; // Convertir ObjectId a string
        });
    }
    update(id, vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.collection('vehicles').findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, { $set: vehicle }, { returnOriginal: false });
            return result.value ? Object.assign(Object.assign({}, result.value), { id: result.value._id.toString() }) : null; // Convertir ObjectId a string
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db.collection('vehicles').deleteOne({ _id: new mongodb_1.ObjectId(id) });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const vehicles = yield this.db.collection('vehicles').find().toArray();
            return vehicles.map((vehicle) => {
                const id = vehicle._id ? vehicle._id.toString() : null; // Verificar si _id existe
                return Object.assign(Object.assign({}, vehicle), { id }); // Agregar id solo si existe
            });
        });
    }
}
exports.VehicleMongoRepository = VehicleMongoRepository;
