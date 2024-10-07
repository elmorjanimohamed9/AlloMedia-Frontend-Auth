import { createContext, useState, useEffect, useContext } from "react";
import AuthService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
        setLoading(false);
    }, []);

    const login = async (credentials) => {
        try {
            const data = await AuthService.login(credentials);
            setUser(data);
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const register = async (userData) => {
        try {
            const data = await AuthService.register(userData);
            setUser(data);
        } catch (error) {
            console.error('Registration failed:', error);
            throw error;
        }
    };

    const logout = () => {
        AuthService.logout();
        setUser(null);
    };

    const forgotPassword = async (email) => {
        try {
            await AuthService.forgotPassword(email);
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Forgot password failed:', error);
            throw error;
        }
    };

    const resetPassword = async (token, newPassword, confirmPassword) => {
        try {
            await AuthService.resetPassword(token, newPassword, confirmPassword);
            console.log('Password reset successfully');
        } catch (error) {
            console.error('Password reset failed:', error);
            throw error;
        }
    };

    const verifyEmail = async (token) => {
        try {
            await AuthService.verifyEmail(token);
            console.log('Email verified successfully');
        } catch (error) {
            console.error('Email verification failed:', error);
            throw error;
        }
    };

    const verifyOtp = async (otp) => {
        try {
            await AuthService.verifyOtp(otp);
            console.log('OTP verified successfully');
        } catch (error) {
            console.error('OTP verification failed:', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout, forgotPassword, resetPassword, verifyEmail, verifyOtp }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};