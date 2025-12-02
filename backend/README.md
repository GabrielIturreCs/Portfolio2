# Portfolio Backend API

Backend API para el sistema de feedback del portfolio profesional.

## 🚀 Tecnologías

- **Node.js** + **Express**
- **MongoDB** (Atlas)
- **Mongoose** ODM
- **CORS** habilitado

## 📦 Instalación

```bash
npm install
```

## ⚙️ Configuración

Crea un archivo `.env` con:

```env
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
PORT=3000
```

## 🏃 Ejecución

```bash
npm start
```

El servidor correrá en `http://localhost:3000`

## 📡 Endpoints

### GET `/api/feedback`
Obtiene todos los feedbacks.

**Respuesta:**
```json
[
  {
    "_id": "...",
    "name": "Juan Pérez",
    "role": "CTO",
    "message": "Excelente trabajo...",
    "avatar": "https://...",
    "tag": "Calidad de Código",
    "createdAt": "2024-12-02T00:00:00.000Z"
  }
]
```

### POST `/api/feedback`
Crea un nuevo feedback.

**Body:**
```json
{
  "name": "Juan Pérez",
  "role": "CTO en TechCorp",
  "message": "Excelente trabajo en el proyecto...",
  "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  "tag": "Calidad de Código"
}
```

**Tags disponibles:**
- `Calidad de Código`
- `Arquitectura`
- `Velocidad`
- `Comunicación`

## 🔒 MongoDB Atlas Setup

1. Crear usuario en Database Access
2. Configurar Network Access (IP whitelist)
3. Obtener connection string del cluster

## 📝 Deploy en Render

1. Conectar este repositorio en Render
2. Configurar variables de entorno (`MONGODB_URI`)
3. Deploy automático en cada push a `main`
