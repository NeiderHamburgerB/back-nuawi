# back-nuawi

## Descripción
Api para gestionar tareas 

## Ejecución del Proyecto

### Requisitos
- Node.js
- npm o yarn

### Pasos para ejecutar el proyecto

1. **Colocar el archivo `.env` en la raíz del proyecto**

    Asegúrate de tener un archivo `.env` con las variables de entorno necesarias. (Ejemplo: variables para la base de datos)

2. **Instalación de dependencias**

    Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:
    ```bash
    npm install
    ```

3. **Ejecutar el proyecto en modo desarrollo**

    Utiliza el siguiente comando para iniciar el proyecto en modo desarrollo:
    ```bash
    npm run start:dev
    ```

    Esto iniciará el servidor en un entorno de desarrollo.

4. **Acceso a la aplicación**

    Una vez iniciado el servidor, accede a la aplicación desde tu navegador web utilizando la URL: `http://localhost:<PUERTO>`

    Reemplaza `<PUERTO>` con el número de puerto configurado en el archivo `.env` o el puerto predeterminado del servidor.

## Notas adicionales
- Este proyecto ya tiene configuradas las credenciales de la base de datos de prueba en la nube en las variables de entorno por defecto.
