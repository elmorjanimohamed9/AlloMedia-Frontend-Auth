import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import AuthService from "../services/authService";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const refreshToken = async () => {
    try {
      const response = await AuthService.refreshToken();
      if (response.accessToken) {
        localStorage.setItem("accessToken", response.accessToken);
        return response.accessToken;
      }
    } catch (error) {
      console.error("Failed to refresh token:", error);
      logout();
    }
  };


  const login = async (credentials) => {
    try {
      const response = await AuthService.login(credentials);
      if (response.data.requireOtp) {
        localStorage.setItem("accessToken", response.data.accessToken);
        return { requireOtp: true, message: response.data.message };
      }
      setUser(response.data.user);
      localStorage.setItem("accessToken", response.data.accessToken);
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const data = await AuthService.register(userData);
      setUser(data);
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      navigate("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const handleLogout = () => {
      setUser(null);
      navigate("/auth/login");
    };

    window.addEventListener("logout", handleLogout);

    return () => {
      window.removeEventListener("logout", handleLogout);
    };
  }, [navigate]);

  const forgotPassword = async (email) => {
    setLoading(true);
    try {
      await AuthService.forgotPassword(email);
    } finally {
      setLoading(false);
    }
  };


  const resetPassword = async (token, newPassword) => {
    setLoading(true);
    try {
      await AuthService.resetPassword(token, newPassword);
    } finally {
      setLoading(false);
    }
  };

  const verifyEmail = async (token) => {
    try {
      const response = await AuthService.verifyEmail(token);
      console.log("Email verification response:", response);
      return response;
    } catch (error) {
      console.error("Email verification failed:", error);
      throw error;
    }
  };

  const verifyOtp = async (otp) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Access token not found");
      }
      const response = await AuthService.verifyOtp(accessToken, otp);
      console.log("OTP verification response:", response);
      return response.data;
    } catch (error) {
      console.error("OTP verification failed:", error);
      throw error;
    }
  };

  const resendOtp = async () => {
    try {
      const _id = localStorage.getItem("userId");
      if (!_id) {
        throw new Error("User ID not found in local storage");
      }
      await AuthService.resendOtp(_id);
      console.log("OTP resent successfully");
    } catch (error) {
      console.error("OTP resend failed:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
        verifyEmail,
        verifyOtp,
        resendOtp,
        refreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
