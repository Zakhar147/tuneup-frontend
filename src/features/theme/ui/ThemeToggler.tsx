import { useThemeStore } from "../model/useThemeStore";

export const ThemeToggler = () => {
    const { theme, toggleTheme } = useThemeStore();

  return (
    <button onClick={toggleTheme} className="bg-accent text-white px-4 py-2 rounded">
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}