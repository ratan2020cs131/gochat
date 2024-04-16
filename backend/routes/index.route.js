import express from 'express';
const indexRoute = express();

import authRoute from './auth.route.js';

indexRoute
    .use('/auth', authRoute)


export default indexRoute;

