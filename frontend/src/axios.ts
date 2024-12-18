import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',  // Adjust the base URL for your backend API
  timeout: 10000,
});

export default instance;
