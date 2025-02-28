import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: ['https://dhfghdfdhjgdfhjg.aurax.ma','http://localhost:3001'],  // Your backend API URL
    withCredentials: true,  // Ensures cookies are sent automatically
});

export default axiosInstance;
