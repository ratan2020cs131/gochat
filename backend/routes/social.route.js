import socialController from '../controllers/social.controller.js';
import { Router } from 'express';
const router = Router();


router
    .post('/send-request', socialController.sendRequest)
    .post('/accept-request', socialController.acceptRequest)
    .post('/message', socialController.sendMessage)
    .get('/search', socialController.getPeople)


const socialRoute = router;
export default socialRoute;