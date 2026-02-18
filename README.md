

# Game Store API - Backend Node.js

Esta es la API REST oficial para la aplicación "Games App". Proporciona todos los servicios necesarios para la gestión de un catálogo de videojuegos, incluyendo el almacenamiento de datos en una base de datos NoSQL y la lógica de negocio para filtrar y gestionar favoritos.

## 🛠️ Tecnologías

* **Entorno de ejecución**: [Node.js](https://nodejs.org/)
* **Framework Web**: Express.js
* **Base de Datos**: MongoDB (vía Mongoose)
* **Middleware**:
* `cors`: Para permitir peticiones desde el frontend Angular.
* `body-parser`: Para el procesamiento de JSON.
* `dotenv`: Gestión de variables de entorno.



## 🚀 Configuración e Instalación

1. **Clonar el repositorio**:
```bash
git clone https://github.com/FranciscoBelda/api-games.git
cd api-games

```


2. **Instalar dependencias**:
```bash
npm install

```


3. **Variables de Entorno**:
Crea un archivo `.env` en la raíz del proyecto:
```env
PORT=3000
MONGODB_URI=tu_cadena_de_conexion_mongodb

```


4. **Lanzar el servidor**:
```bash
# Desarrollo (con nodemon)
npm run dev

# Producción
npm start

```



## 🛣️ Endpoints (API v1)

Todos los endpoints comienzan por el prefijo `/api/v1/games`.

| Método | Endpoint | Descripción |
| --- | --- | --- |
| **GET** | `/` | Obtiene todos los juegos del catálogo. |
| **GET** | `/:id` | Obtiene los detalles de un juego específico. |
| **POST** | `/` | Registra un nuevo videojuego. |
| **PUT** | `/:id` | Actualiza la información de un juego. |
| **DELETE** | `/:id` | Elimina un juego del sistema. |

### Parámetros de búsqueda

El endpoint `GET /` permite filtrar resultados mediante query strings:

* `?title=...`: Filtra juegos por título.
* `?category=...`: Filtra por categoría (Acción, RPG, etc.).

## 🗃️ Modelo de Datos (Mongoose Schema)

El esquema de cada juego en la base de datos contiene:

* **title**: (String) Título del juego (Obligatorio).
* **subtitle**: (String) Breve descripción secundaria.
* **description**: (String) Sinopsis o detalles.
* **imageUrl**: (String) Enlace a la carátula.
* **category**: (String) Género del videojuego.
* **isFavorite**: (Boolean) Estado de favorito (por defecto: false).

## 🛡️ CORS (Cross-Origin Resource Sharing)

La API está configurada para aceptar peticiones específicamente desde el entorno de desarrollo de Angular:

```javascript
app.use(cors({
  origin: 'http://localhost:4200'
}));

```

---

**Autor:** [Francisco Belda](https://www.google.com/search?q=https://github.com/FranciscoBelda)

**Proyecto:** Backend para el curso de Desarrollo de Aplicaciones Web.
