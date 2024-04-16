import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

export const auth = {
    login: async () => {
        try {
            console.log(process.env.NEXT_PUBLIC_BASE_URL);
        } catch (error) {
            console.log("login error: ", error.message);
        }
    }
}