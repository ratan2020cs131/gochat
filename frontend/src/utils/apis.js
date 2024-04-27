import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const auth = {
    login: async (data) => {
        try {
            const res = await axios.post(`${BASE_URL}/api/auth/login`, data)
            console.log('login api res: ', res.data);
            return res;
        } catch (error) {
            console.log("login error: ", error);
            return error.response
        }
    }
}