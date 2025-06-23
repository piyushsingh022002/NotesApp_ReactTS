import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // placeholder — replace with your backend URL once CORS is configured

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional interceptor for attaching auth token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

