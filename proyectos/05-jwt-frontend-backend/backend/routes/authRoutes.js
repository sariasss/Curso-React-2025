import express from 'express';
import { login, logout, register } from '../controller/authController.js';

const router = express.Router();

// rutas de autenticación
// /login /register /logout 

router.post('/login', login);
router.post('/register', register);
router.get('/logout', logout);
// aqui tendremod que añadir las rutas que faltan, como la de loggearse con google

router.get("/check-auth", authMiddleware, (req, res) => {
    res.status(200).json({ message: "Autenticado", userId: req.userId })
})
export default router;