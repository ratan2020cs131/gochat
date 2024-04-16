import authController from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { Router } from 'express';
const router = Router();


router
    .post('/login', authController.login)
    .post('/signup', authController.signup)
    .get('/profile', authMiddleware, authController.profile);


const authRoute = router;
export default authRoute;