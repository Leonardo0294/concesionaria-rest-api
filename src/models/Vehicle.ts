// src/models/Vehicle.ts

import { ObjectId } from 'mongodb';

export class Vehicle {
  constructor(
    public marca: string,
    public modelo: string,
    public año: number,
    public precio: number,
    public _id?: ObjectId, // Campo _id opcional
    public id?: string // Campo id opcional
  ) {}
}
