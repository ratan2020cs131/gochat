import authController from '../controllers/auth.controller.js';
import { Router } from 'express';
const router = Router();


router
    .post('/login', authController.login)
    .post('/signup', authController.signup);

    
const authRoute = router;
export default authRoute;