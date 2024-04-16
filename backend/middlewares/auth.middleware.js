import jwt from 'jsonwebtoken';
import User from '../database/models/user.model.js';

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findOne({ _id: decodedToken._id, tokens: token }).populate('friends', '_id name username').populate('requests', '_id name username');
        if (user) {
            req.user = user;
            req.token = token;
            next();
        }
        else {
            res.status(401).send({ message: "token expired" });
        }
    } catch (error) {
        console.log('auth middleware error: ', error.message);
    }
}
export default authMiddleware;