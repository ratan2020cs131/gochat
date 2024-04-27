import chalk from 'chalk';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' })
import socketEvent from './socket.event.js'

const mountChatEvent = (socket) => {
    socket.on(socketEvent.JOIN_CHAT, (chatId) => {
        socket.join(chatId);
        console.log('user joined chat: ', chalk.bgBlueBright(chatId));
    })
}

const mountTypingEvent = (socket) => {
    socket.on(socketEvent.TYPING_EVENT, (chatId) => {
        socket.in(chatId).emit(socketEvent.TYPING_EVENT, chatId);
    })
}

const mountStoppedTypingEvent = (socket) => {
    socket.on(socketEvent.STOP_TYPING_EVENT, (chatId) => {
        socket.in(chatId).emit(socketEvent.STOP_TYPING_EVENT, chatId);
    });
}

const unmountSocket = (socket) => {
    socket.on(socketEvent.DISCONNECT_EVENT, () => {
        console.log("user has disconnected " + socket?.id);
        if (socket.userId) {
            socket.leave(socket.userId);
        }
    });
}

export const initSocket = (io) => {
    return io.on('connection', async (socket) => {
        console.log('user connected to socket with id: ', chalk.bgGreenBright(socket.id));

        const token = socket?.handshake?.headers?.authorization;
        const { _id: userId } = jwt.verify(token, process.env.JWT_KEY);
        socket.userId = userId;

        socket.join(userId);
        mountChatEvent(socket);
        mountTypingEvent(socket);
        mountStoppedTypingEvent(socket);
        unmountSocket(socket);
    })
}

export const emitRoomSocketEvent = async (req, event, room, payload) => {
    req.app.get('io').in(room).emit(event, payload)
}
