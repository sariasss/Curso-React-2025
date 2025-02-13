import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';

const app = express();

// configuarcion de cors 
const allowOrigins = ['http://localhost:5173', 'https://localhost:5174'];

app.use(cors({
    origin: (origin, callback) => {
        if(!origin || allowOrigins.includes(origin)){
            callback(null, origin);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    },
    credentials: true, // para permitir que el navegador envie las cookies
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json()); 
app.use(cookieParser()); 

// conexión con base de datos mongodb
connectDB();

// rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

export default app;