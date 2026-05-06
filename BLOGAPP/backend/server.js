/**
 * server.js
 * ----------
 * Main entry point for the BlogApp backend server.
 * Sets up Express, CORS, cookie parsing, routes, MongoDB connection,
 * and global error handlers.
 *
 * Architecture:
 *   - /user-api    → User-related operations (userAPI.js)
 *   - /author-api  → Author CRUD & article management (authorAPI.js)
 *   - /admin-api   → Admin operations (adminAPI.js)
 *   - /auth        → Authentication (login/register) (commonAPI.js)
 *
 * Concepts: Express middleware, CORS, Mongoose connect, Error handling
 */

import exp from 'express';
import { config } from 'dotenv';
import { connect } from 'mongoose';
import { userApp } from './APIs/userAPI.js';
import { authorApp } from './APIs/authorAPI.js';
import { adminApp } from './APIs/adminAPI.js';
import { commonApp } from './APIs/commonAPI.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Initialize Express app & load environment variables
const app = exp();
config();

// ─── Body Parser Middleware ──────────────────────────────────
app.use(exp.json());

// ─── CORS Configuration ─────────────────────────────────────
// Supports multiple frontend origins via comma-separated env var
const rawFrontends = process.env.FRONTEND_URLS || process.env.FRONTEND_URL || '';
const allowedOrigins = rawFrontends
    .split(',')
    .map((u) => u.trim().replace(/\/$/, ''))
    .filter(Boolean);

// Log allowed origins on startup for debugging
console.log('Resolved FRONTEND origins for CORS:', allowedOrigins.length ? allowedOrigins.join(', ') : '<<NONE - allowing all origins (unsafe for production)>>');

// Diagnostic endpoint to verify CORS setup
app.get('/cors-check', (req, res) => {
    const origin = req.headers.origin || null;
    res.json({ origin, allowedOrigins });
});

// Custom CORS middleware: sets headers and handles preflight OPTIONS requests
app.use((req, res, next) => {
    const origin = req.headers.origin;

    // Allow non-browser requests (curl/Postman) without Origin header
    if (!origin) return next();

    // Allow if no whitelist set (dev mode) or origin is whitelisted
    if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

        // Handle preflight requests
        if (req.method === 'OPTIONS') {
            return res.sendStatus(204);
        }
        return next();
    }

    // Reject disallowed origins
    return res.status(403).json({ message: 'CORS not allowed for origin: ' + origin });
});

// ─── Cookie Parser ───────────────────────────────────────────
app.use(cookieParser());

// ─── API Routes ──────────────────────────────────────────────
app.use('/user-api', userApp);      // User operations
app.use('/author-api', authorApp);  // Author & article management
app.use('/admin-api', adminApp);    // Admin operations
app.use('/auth', commonApp);        // Authentication (login/register)

// ─── Database Connection & Server Start ──────────────────────
const connectDB = async () => {
    try {
        await connect(process.env.DB_URL);
        console.log("DB server is connected");
        const port = process.env.PORT || 5000;
        app.listen(port, () => console.log(`Server listening on ${port}...`));
    } catch (err) {
        console.log("Unable to connect", err);
    }
};
connectDB();

// ─── 404 Handler (Invalid Paths) ─────────────────────────────
app.use((req, res, next) => {
    res.status(404).json({ message: `path ${req.url} is invalid` });
});

// ─── Global Error Handler ────────────────────────────────────
app.use((err, req, res, next) => {
    // Ensure CORS headers are present even on error responses
    try {
        const origin = req.headers.origin;
        if (origin) {
            if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
                res.setHeader('Access-Control-Allow-Origin', origin);
                res.setHeader('Access-Control-Allow-Credentials', 'true');
                res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
            }
        }
    } catch (e) {
        console.log('Error setting CORS headers on failure response', e);
    }

    console.log("Error is:", err);

    // Handle Mongoose validation errors
    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: "Error Occurred", error: err.message });
    }
    // Handle Mongoose cast errors (invalid ObjectId, etc.)
    if (err.name == 'CastError') {
        return res.status(400).json({ message: "Error Occurred", error: err.message });
    }

    // Generic server error
    res.status(500).json({ message: "Error Occurred", error: err.message });
});