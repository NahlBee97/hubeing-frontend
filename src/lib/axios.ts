import { apiUrl } from "@/config";
import { useAuthStore } from "@/stores/useAuthStore";
import axios, { InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

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

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Check if the error is specifically a 401
    if (error.response?.status === 401) {
      const { logout } = useAuthStore.getState();

      logout();

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
