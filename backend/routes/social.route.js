import socialController from '../controllers/social.controller.js';
import { Router } from 'express';
const router = Router();


router
    .post('/send-request', socialController.sendRequest)
    .post('/accept-request', socialController.acceptRequest);


const socialRoute = router;
export default socialRoute;