import { apiUrl } from "@/config";
import { useAuthStore } from "@/stores/useAuthStore";
import axios, { InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

// === 1. Your Request Interceptor (Still 100% correct) ===
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// === 2. Your Response Interceptor (Simple Logout Logic) ===
api.interceptors.response.use(
  (response) => {
    // If the request was successful (status 200-299), just return the response
    return response;
  },
  (error) => {
    // Check if the error is specifically a 401
    if (error.response?.status === 401) {
      // Get the logout function from your store
      // We call getState() here *inside* the interceptor
      // to avoid circular dependency issues.
      const { logout } = useAuthStore.getState();

      // Trigger the logout action
      logout();

      // Optional but recommended:
      // Force a full page reload to the login page to clear any
      // remaining app state and redirect the user.
      window.location.href = "/login";
    }

    // For any other error (e.g., 500, 404), just let it reject normally
    return Promise.reject(error);
  }
);

export default api;
