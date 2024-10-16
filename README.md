# Concesionaria REST API

Este proyecto implementa una API REST para gestionar vehículos y clientes en una concesionaria de autos, siguiendo los principios SOLID para asegurar modularidad, mantenibilidad y escalabilidad. Está desarrollado con **TypeScript** y utiliza **Express** para manejar las solicitudes HTTP.

## Características

- **Vehículos:** Permite crear, actualizar, eliminar y obtener información sobre vehículos (id, marca, modelo, año y precio).
- **Clientes:** Gestiona información de clientes (id, nombre, email, teléfono).
- **Principios SOLID:** La arquitectura sigue los principios SOLID para garantizar un código limpio y escalable.
- **Soporte de bases de datos simuladas:** Implementaciones para MongoDB y PostgresSQL (simuladas).
- **Aplicación de descuentos:** El servicio de vehículos permite aplicar descuentos sin modificar el servicio original.

## Requisitos

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB o PostgresSQL (si se desea extender con bases de datos reales)

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone 
   cd concesionaria-rest-api
