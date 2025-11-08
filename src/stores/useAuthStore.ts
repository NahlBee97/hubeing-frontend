import api from "@/lib/axios";
import { IUser } from "@/interfaces/dataInterfaces";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  user: IUser | null;
  isLoggedIn: boolean;
  isAuthLoading: boolean;
  setAccessToken: (token: string) => void;
  login: (userData: IUser, token?: string) => void;
  logout: () => Promise<void>;
  clearAuth: () => void;
  initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      user: null,
      isLoggedIn: false,
      isAuthLoading: true,

      setAccessToken: (token: string) => {
        set({ accessToken: token });
      },

      login: (user: IUser, token?: string) => {
        set({
          user,
          isLoggedIn: true,
          accessToken: token || get().accessToken,
          isAuthLoading: false,
        });
      },

      logout: async () => {
        try {
          // Only call logout API if we have a token
          if (get().accessToken) {
            await api.post("api/auth/logout", get().accessToken);
          }
        } catch (error) {
          console.error("Logout API call failed:", error);
          // Continue with local logout even if API call fails
        } finally {
          get().clearAuth();
        }
      },

      clearAuth: () => {
        set({
          user: null,
          isLoggedIn: false,
          accessToken: null,
          isAuthLoading: false,
        });
      },

      initializeAuth: async () => {
        // Check if we have stored auth data and validate it
        const { accessToken } = get();
        const response = await api.post("api/auth/check", {accessToken});

        const { isLoggedIn } = response.data;

        set({
          isLoggedIn,
          isAuthLoading: false,
        });
      },
    }),
    {
      name: "auth-storage", // unique name for localStorage key
      storage: createJSONStorage(() => localStorage), // or sessionStorage
      partialize: (state) => ({
        accessToken: state.accessToken,
        user: state.user,
        isLoggedIn: state.isLoggedIn,
      }),
      // Optional: version to handle migrations if store structure changes
      version: 1,
      // Optional: migration function if you change the store structure
      // migrate: (persistedState: any, version: number) => {
      //   if (version === 0) {
      //     // Migrate from version 0 to 1
      //     return persistedState;
      //   }
      //   return persistedState;
      // },
    }
  )
);

// Initialize auth state when store is created
useAuthStore.getState().initializeAuth();
