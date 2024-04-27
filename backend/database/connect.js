import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({ path: './.env' })
import chalk from 'chalk'

const DB_URL = process.env.DB_URL;
(async () => {
    await mongoose.connect(DB_URL);
    console.log(chalk.cyan('DB connected'));
})()