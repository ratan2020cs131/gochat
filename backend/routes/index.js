import express from 'express';
const indexRoute = express();

import authRoute from './auth.route.js';
import socialRoute from './social.route.js';

indexRoute.use('/auth', authRoute)
indexRoute.use('/social', socialRoute)


export default indexRoute;

