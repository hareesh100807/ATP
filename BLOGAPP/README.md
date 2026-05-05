# BLOGAPP

A full-stack web application containing a React frontend and Node/Express backend.

## Structure

- `/frontend`: React + Vite application containing all UI components and styling.
- `/backend`: Node.js Express server containing APIs, models, and controllers.

## Prerequisites
- Node.js (v18+)
- Active database connection configured in `backend/.env` (if applicable)

## Running the Project

### 1. Start Backend
Open a terminal and navigate to the backend directory:
```bash
cd backend
npm install
npm start
```
*(Check `backend/package.json` for specific dev/start scripts if `start` doesn't exist)*

### 2. Start Frontend
Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
npm install
npm run dev
```

Your React app should now be running (usually on `http://localhost:5173`) and communicating with your backend APIs.
