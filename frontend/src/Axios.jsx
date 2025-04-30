import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://dhfghdfdhjgdfhjg.aurax.ma',  // Your backend API URL
    // http://localhost:3001
    withCredentials: true,  // Ensures cookies are sent automatically
});

export default axiosInstance;
