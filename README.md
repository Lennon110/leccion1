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

Se utilizó el método **GET** para consultar información de la API, obteniendo todas las publicaciones, buscando una publicación por su identificador y filtrando publicaciones por usuario.

El método **POST** permitió crear una nueva publicación enviando datos en formato JSON. El método **PATCH** se utilizó para actualizar únicamente el título de una publicación, mientras que **DELETE** simuló la eliminación de una publicación.

Como se trabajó con **JSONPlaceholder**, las operaciones **POST**, **PATCH** y **DELETE** son simuladas y los cambios no se almacenan permanentemente en el servidor.

---

## Capturas de funcionamiento

El repositorio incluye capturas de pantalla que muestran:

- Listado de publicaciones.
- Búsqueda por ID.
- Filtrado por usuario.
- Creación de una publicación.
- Actualización del título.
- Eliminación de una publicación.