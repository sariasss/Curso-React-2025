import express from 'express';
import { addUser, getUserProfile } from '../controller/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// rutas de usuario
router.post('/', addUser);
router.get('/profile', authMiddleware, getUserProfile);

export default router;