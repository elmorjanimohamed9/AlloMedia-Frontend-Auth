import api from "./api";

const AuthService = {
    register: async (userData) => {
        const response = await api.post('/auth/register', userData);
        return response.data;
    },

    login: async (userData) => {
        const response = await api.post('/auth/login', userData);
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    },

    forgotPassword: async (email) => {
        return api.post('/auth/forgot-password', { email });
    },

    resetPassword: async (token, newPassword, confirmPassword) => {
        return api.post('/auth/reset-password', { token, newPassword, confirmPassword });
    },

    verifyEmail: async (token) => {
        return api.post('/auth/verify-email', { token });
    },

    VerifyOtp: async (otp) => {
        return api.post('/auth/verify-otp', { otp });
    },

    logout: () => {
        localStorage.removeItem('user');
    },
};

export default AuthService;