import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Platform } from "@/types";

interface AuthState {
  platform: Platform | null;
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: number | null;

  setTokens: (
    platform: Platform,
    accessToken: string,
    refreshToken: string,
    expiresIn: number
  ) => void;
  clearAuth: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      platform: null,
      accessToken: null,
      refreshToken: null,
      expiresAt: null,

      setTokens: (platform, accessToken, refreshToken, expiresIn) =>
        set({
          platform,
          accessToken,
          refreshToken,
          expiresAt: Date.now() + expiresIn * 1000,
        }),

      clearAuth: () =>
        set({
          platform: null,
          accessToken: null,
          refreshToken: null,
          expiresAt: null,
        }),

      isAuthenticated: () => {
        const { accessToken, expiresAt } = get();
        return !!accessToken && !!expiresAt && Date.now() < expiresAt;
      },
    }),
    {
      name: "tuneship-auth",
      // Apenas persiste refresh token e metadata — access token é sensível
      partialize: (state) => ({
        platform: state.platform,
        refreshToken: state.refreshToken,
        expiresAt: state.expiresAt,
      }),
    }
  )
);
