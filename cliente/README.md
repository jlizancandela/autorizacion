# Cliente React con Vite para Autenticación Clerk

Este directorio contiene el código para una aplicación cliente construida con React y Vite. Se conecta a una API de Express para demostrar un flujo completo de autenticación y autorización de usuarios utilizando Clerk.

## Características

- Interfaz de usuario para registro e inicio de sesión con los componentes de Clerk.
- Rutas protegidas que solo son accesibles para usuarios autenticados.
- Comunicación con la API del backend para obtener datos protegidos.

## Puesta en Marcha

Sigue estos pasos para ejecutar el cliente localmente:

1.  **Instalar dependencias:**

    ```bash
    npm install
    ```

2.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz de este directorio (`/cliente`) y añade tu clave publicable de Clerk:

    ```
    VITE_CLERK_PUBLISHABLE_KEY="tu_clave_publicable_aqui"
    ```

3.  **Iniciar la aplicación cliente:**
    ```bash
    npm run dev
    ```
    La aplicación se ejecutará en `http://localhost:5173`.
