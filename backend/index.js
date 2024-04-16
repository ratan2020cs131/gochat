import express, { json } from 'express'
import dotenv from 'dotenv';
dotenv.config({ path: './.env' })
import './database/connect.js';

const app = express();
const port = 5000

import routes from './routes/index.route.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes)

app.listen(port, () => {
    console.log('Server running on: ', port);
})