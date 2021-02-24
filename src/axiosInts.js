import axios from "axios";


let headers = {};

const instance = axios.create({
    baseURL: "http://localhost:3001/api/v1",
    headers
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
       if (token){
           config.headers.Authorization = `Bearer ${token}`
       }
       return config;
    },
    (error) => {
       return Promise.reject(error)
    },
)

export default instance;
