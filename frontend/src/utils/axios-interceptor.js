import * as Axios from "axios";

const axios = Axios.create({});

axios.interceptors.request.use(async (config) => {
    try {
        const token = window.localStorage.getItem('token');
        config.headers.Authorization = `${token}`;
        return config;
    } catch (error) {
        throw error;
    }
});

export default axios;