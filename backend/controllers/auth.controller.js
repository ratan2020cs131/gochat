import User from "../database/models/user.model.js";
import bcrypt from 'bcrypt';

export default {
    login: async (req, res) => {
        try {
            const { username, email, password } = req.body;
            const result = await User.findOne({ $or: [{ username }, { email }] }).populate('friends', 'requests');
            if (result) {
                const verified = await bcrypt.compare(password, result.password);
                if (verified) {
                    const { name, username, email, requests, friends } = result;
                    res.send({ name, username, email, requests, friends })
                }
                else
                    res.status(401).send({ message: 'wrong password' })
            }
        } catch (error) {
            console.log("login error: ", error.message);
        }
    },

    //signup controller
    signup: async (req, res) => {
        try {
            const { name, username, email, password } = req.body;
            const result = await User.findOne({ email })
            if (result)
                res.status(400).send({ error: 'user exists' })
            else {
                const user = new User({ name, username, email, password });
                await user.save();
                const token = await user.generateToken();
                res.send({ message: "user registered", token })
            }
        } catch (error) {
            console.log("signup error: ", error.message);
        }
    }
}