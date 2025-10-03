# Servidor API con Express para Autenticación Clerk

Este directorio contiene el código para una API básica construida con Express.js. Su propósito es servir como backend para un cliente React, demostrando la autenticación y autorización de usuarios utilizando Clerk.

## Características

- API RESTful simple.
- Integración con el middleware de Clerk para proteger rutas.
- Configuración mediante variables de entorno.

## Puesta en Marcha

Sigue estos pasos para ejecutar el servidor localmente:

1.  **Instalar dependencias:**

    ```bash
    npm install
    ```

2.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz de este directorio (`/servidor`) y añade tu clave secreta de Clerk:

    ```
    CLERK_SECRET_KEY="tu_clave_secreta_aqui"
    ```

3.  **Iniciar el servidor:**
    ```bash
    npm start
    ```
    El servidor se ejecutará en `http://localhost:3000`.
