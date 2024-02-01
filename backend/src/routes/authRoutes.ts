import { Router } from 'express';
import { login, logout, register, status } from '../controllers/authController';

const authRoutes = Router();

authRoutes.post('/register', register);
authRoutes.post('/login', login);
authRoutes.get('/logout', logout);
authRoutes.get('/status', status);


export default authRoutes;