"use strict";
// src/models/Vehicle.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(marca, modelo, año, precio, _id, // Campo _id opcional
    id // Campo id opcional
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        this._id = _id;
        this.id = id;
    }
}
exports.Vehicle = Vehicle;
