import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://dhfghdfdhjgdfhjg.aurax.ma',  // Your backend API URL
    // 'https://dhfghdfdhjgdfhjg.aurax.ma' production
    withCredentials: true,  // Ensures cookies are sent automatically
});

export default axiosInstance;
