import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' })


const user = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    requests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    tokens: [String]
})


//encrypting pass
user.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})


//generating jwt token
user.methods.generateToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.JWT_KEY);
        this.tokens = this.tokens.concat(token);
        await this.save();
        return token;
    }
    catch (err) {
        console.log(err);
    }
}


const User = mongoose.model('users', user);
export default User;