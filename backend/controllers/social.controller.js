import User from "../database/models/user.model.js";

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
    }
}