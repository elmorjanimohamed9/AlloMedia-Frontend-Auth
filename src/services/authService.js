import api from "./api";

const AuthService = {
    register: async (userData) => {
        const response = await api.post('/auth/register', userData);
        return response.data;
    },

    login: async (userData) => {
        const response = await api.post('/auth/login', userData);
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('accessToken', response.data.accessToken);
        }
        if (response.data.requireOtp) {
            localStorage.setItem('userId', response.data.userId);
        }
        return response;
    },

    forgotPassword: async (email) => {
        return api.post('/auth/forget-password', { email });
    },

    resetPassword: async (token, newPassword) => {
        try {
          const response = await api.post('/auth/reset-password', { token, newPassword });
          return response.data;
        } catch (error) {
          console.error("Error in resetPassword:", error.response || error);
          throw error;
        }
    },

    verifyEmail: async (token) => {
        return api.get(`/auth/verify-email/${token}`);
    },

    verifyOtp: async (accessToken, otp) => {
        console.log("OTP being sent to server:", otp);
        return api.post('/auth/verify-otp', { otp }, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
    },

    resendOtp: async (accessToken) => {
        return api.post('/auth/resend-otp', {}, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
    },

    refreshToken: async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/refresh-token`, {}, {
                withCredentials: true, 
            });
            return response.data; 
        } catch (error) {
            throw new Error('Failed to refresh token');
        }
    },

    logout: async () => {
        try {
            await api.post('/auth/logout'); 
        } catch (error) {
            console.error("Logout error:", error);
        } finally {
            localStorage.removeItem('user');
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userId');
            window.dispatchEvent(new CustomEvent('logout')); 
        }
    },
};

export default AuthService;