# WEEK-3 — Node.js, Express & MongoDB REST API

This week covers backend development with Express.js and MongoDB using Mongoose for building a RESTful Product API.

## 📁 Structure

```
WEEK-3/
├── 1.js              # Partial route handlers (GET all, GET by ID, DELETE)
├── ProductAPI.js      # Full CRUD Express Router for Products
└── ProductModel.js    # Mongoose Schema & Model definition
```

## 🧠 Concepts Covered

| Concept | Files |
|---|---|
| Express.js Router | `ProductAPI.js`, `1.js` |
| Mongoose Schema & Model | `ProductModel.js` |
| CRUD Operations | `ProductAPI.js` |
| async/await | All files |
| REST API Design | `ProductAPI.js` |
| Input Validation (Mongoose) | `ProductModel.js` |

## 🔗 API Endpoints

| Method | Route | Description |
|---|---|---|
| POST | `/products` | Create a new product |
| GET | `/products` | Get all products |
| GET | `/products/:productId` | Get a product by ID |
| PUT | `/products/:productId` | Update a product |
| DELETE | `/products/:id` | Delete a product |

## ▶️ How to Run

```bash
# Requires Node.js and MongoDB running locally
npm install express mongoose
node ProductAPI.js
```
