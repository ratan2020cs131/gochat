import User from "../database/models/user.model.js";
import bcrypt from 'bcrypt';

export default {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const result = await User.findOne({ $or: [{ username: email }, { email }] }).populate('friends', '_id name username').populate('requests', '_id name username');
            if (result) {
                const verified = await bcrypt.compare(password, result.password);
                if (verified) {
                    const { name, username, email, requests, friends } = result;
                    const token = await result.generateToken();
                    res.send({ token, data: { name, username, email, requests, friends } })
                }
                else
                    res.status(401).send({ message: 'wrong password' })
            }
            else {
                res.status(404).send({ message: 'user not found' })
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
    },

    //profile constroller
    profile: async (req, res) => {
        try {
            if (req.user) {
                res.send(req.user)
            }
        } catch (error) {
            console.log("profile error: ", error.message);
        }
    }
}