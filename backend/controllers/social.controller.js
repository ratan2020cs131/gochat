import User from "../database/models/user.model.js";
import chalk from 'chalk';
import { emitRoomSocketEvent } from "../socket/socket.index.js";
import socketEvent from "../socket/socket.event.js";

export default {
    //send request controller
    sendRequest: async (req, res) => {
        try {
            const { senderId, recieverId } = req.body;
            const result = await User.findOneAndUpdate(
                { _id: recieverId },
                { $push: { requests: senderId } },
                { returnOriginal: false }
            )
            res.send({ message: 'request sent' })
        } catch (error) {
            console.log("request error: ", error.message);
        }
    },

    //accept request controller
    acceptRequest: async (req, res) => {
        try {
            const { senderId, recieverId } = req.body;
            const result = await User.findOneAndUpdate(
                { _id: recieverId },
                {
                    $pull: { requests: senderId },
                    $push: { friends: senderId }
                },
                { returnOriginal: false }
            )
            res.send({ message: 'request accepted' })
        } catch (error) {
            console.log("accept request error: ", error.message);
        }
    },

    //send message controller
    sendMessage: async (req, res) => {
        try {
            const { chatId, message } = req.body;
            emitRoomSocketEvent(req, socketEvent.NEW_MSG, chatId, message);
            res.send({ message: 'message sent' })
        } catch (error) {
            console.log('error sending message: ', chalk.red(error?.message));
        }
    }
}