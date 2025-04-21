import { create } from "zustand";
import { TehemeStore, Theme } from "./types";

//TODO: не работает нормально тема тоглер. переделать

const getInitialTheme = (): Theme => {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

export const useThemeStore = create<TehemeStore>((set) => ({
    theme: getInitialTheme(),
    toggleTheme: () =>
      set((state) => {
        const next = state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.classList.remove(state.theme);
        document.documentElement.classList.add(next);
        localStorage.setItem('theme', next);
        return { theme: next };
      }),
    setTheme: (theme) => {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      localStorage.setItem('theme', theme);
      set({ theme });
    },
  }));