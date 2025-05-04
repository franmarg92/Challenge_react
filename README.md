# 📝 Lista de Tareas - React + Node + MySQL

Aplicación fullstack para gestionar tareas. Incluye backend con Express y Sequelize, y frontend con React (Vite).

---

## 📦 Requisitos previos

- Node.js ≥ 18
- MySQL ≥ 8
- Git

---

## ⚙️ Clonar el proyecto

```bash
git clone https://github.com/franmarg92/Challenge_react
cd challenge_react
```

---

## 🗂️ Estructura de carpetas

```
/back      -> backend con Express + Sequelize
/front     -> frontend con React + Vite
```

---

## 🔧 Configuración del backend

1. Ir a la carpeta del backend:

```bash
cd back
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear un archivo `.env` con los siguientes datos:

```env
DB_NAME=nombre_base_de_datos
DB_USER=usuario
DB_PASSWORD=contraseña
DB_HOST=localhost
DB_DIALECT=mysql
DB_PORT=3306
```

4. Iniciar el servidor:

```bash
npm run dev
```

Servidor corriendo en: `http://localhost:3000`

---

## 🖥️ Configuración del frontend

1. Ir a la carpeta del frontend:

```bash
cd ../front
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear un archivo `.env` con la URL de la API:

```env
VITE_API_URL=http://localhost:3000/api
```

4. Iniciar el frontend:

```bash
npm run dev
```

Aplicación corriendo en: `http://localhost:5173`

---

## ✅ Funcionalidades

- Crear, ver, editar y eliminar tareas
- Visualización de detalle
- Estilos con Bootstrap
- Comunicación React ↔️ Express via `fetch`

---

## 🧪 Testeo manual

Podés usar Postman o Insomnia para probar los endpoints:

- `GET /api/tasks`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

---



## 🧑‍💻 Autor

- Franco Gabrielleschi
- [LinkedIn] https://www.linkedin.com/in/francogabrielleschi/