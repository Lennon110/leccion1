# Consumo de API REST con TypeScript

## Descripción

Este proyecto consiste en una aplicación web desarrollada en TypeScript que consume la API pública **JSONPlaceholder** utilizando el recurso `/posts`. La aplicación permite consultar, crear, actualizar y eliminar publicaciones mediante solicitudes HTTP.

API utilizada:
https://jsonplaceholder.typicode.com

---

## Funcionalidades

- Mostrar todas las publicaciones.
- Buscar una publicación por su ID.
- Filtrar publicaciones por ID de usuario.
- Crear una nueva publicación (POST).
- Actualizar el título de una publicación (PATCH).
- Simular la eliminación de una publicación (DELETE).
- Manejo básico de errores durante las solicitudes.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- TypeScript
- Fetch API
- Docker
- Node.js

---

## Ejecución del proyecto

### Ejecutar localmente

```bash
npm install
npm run build
npm start
```

Abrir en el navegador:

```
http://localhost:8080
```

---

## Ejecución con Docker

Construir la imagen:

```bash
docker build -t leccion1 .
```

Ejecutar el contenedor:

```bash
docker run -p 8080:8080 leccion1
```

Abrir en el navegador:

```
http://localhost:8080
```

## Publicar la imagen en Docker Hub

1. Iniciar sesión en Docker Hub:

```bash
docker login
```

2. Construir la imagen:

```bash
docker build -t leccion1 .
```

3. Etiquetar la imagen con el nombre del repositorio en Docker Hub:

```bash
docker tag leccion1 lennon210/leccion1:latest
```

4. Subir la imagen a Docker Hub:

```bash
docker push lennon210/leccion1:latest
```

Una vez publicada, cualquier persona podrá descargarla con:

```bash
docker pull lennon210/leccion1:latest
```

Y ejecutarla con:

```bash
docker run -p 8080:8080 lennon210/leccion1:latest
```

---

## Métodos HTTP utilizados

- **GET**: Utilizado para solicitar y recuperar datos del servidor. En este proyecto se usó para listar todas las publicaciones, buscar una específica por su ID y filtrar el contenido por identificador de usuario (`userId`).
- **POST**: Utilizado para enviar datos al servidor con el fin de crear un nuevo recurso. Se implementó para añadir una nueva publicación enviando un cuerpo en formato JSON.
- **PATCH**: Utilizado para realizar modificaciones parciales a un recurso existente. Se utilizó para actualizar de manera aislada únicamente el título de una publicación específica.
- **DELETE**: Utilizado para eliminar un recurso específico del servidor. Se empleó para simular el borrado de una publicación mediante su ID.

*Nota: Al interactuar con JSONPlaceholder, las operaciones POST, PATCH y DELETE son simulaciones lógicas directas en el cliente; los cambios no persisten de manera permanente en el servidor externo.*

---

## Capturas de funcionamiento

El repositorio incluye capturas de pantalla que muestran:

- Listado de publicaciones.
- Búsqueda por ID.
- Filtrado por usuario.
- Creación de una publicación.
- Actualización del título.
- Eliminación de una publicación.