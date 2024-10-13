import axios from 'axios';
import AuthService from './authService';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, 
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            console.log("Access token expired, attempting to refresh...");
            originalRequest._retry = true;

            try {
                const { accessToken } = await AuthService.refreshToken();
                console.log("Access token refreshed successfully");
                localStorage.setItem('accessToken', accessToken);
                api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                console.error("Failed to refresh access token:", refreshError);
                AuthService.logout();
                window.dispatchEvent(new CustomEvent('logout'));
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);



export default api;