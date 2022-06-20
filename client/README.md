# Front End Test | Mercado Libre

Aplicación web que permite buscar artículos del catálogo de Mercado Libre.


## Tecnologías

- React
- Express
- API Mercado Libre
- SASS

## Instalación

Clonar el repositorio

```bash
  npm install
  npm start
  cd client
  npm start
```

## API

#### Get Product data

```http
  GET /api/items/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Item id |

#### Get search results

```http
  GET /api/items/q/:q
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `q`      | `string` | **Required**. Query to search |



