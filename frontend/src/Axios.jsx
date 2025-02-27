import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://dhfghdfdhjgdfhjg.aurax.ma',  // Your backend API URL
    withCredentials: true,  // Ensures cookies are sent automatically
});

export default axiosInstance;
