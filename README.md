# Front End Test | Mercado Libre

Aplicación web que permite buscar artículos del catálogo de Mercado Libre.


## Tecnologías

- React
- Express
- API Mercado Libre
- SASS

## Instalación

Clonar el repositorio

Iniciar express

```bash
  npm install
  npm start
```

Iniciar la app de react

```bash
  cd client
  npm install
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



