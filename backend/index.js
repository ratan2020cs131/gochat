import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' })
import './database/connect.js';
import { createServer } from 'http'
import { Server } from 'socket.io';
import { initSocket } from './socket/socket.index.js';
import chalk from 'chalk'

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
initSocket(io);
app.set('io', io)


import routes from './routes/index.js';

app.use(cors({
    origin:['http://localhost:3000']
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes)

const port = process.env.PORT;
httpServer.listen(port, () => {
    console.log('Server running @ ', chalk.blueBright(port));
})