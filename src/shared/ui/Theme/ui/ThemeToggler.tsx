import { DarkModeIcon } from "@shared/assets/Components/DarkModeIcon";
import { useThemeStore } from "../model/useThemeStore";

import { LightModeIcon } from "@shared/assets/Components/LightModeIcon";

//TODO: немного переделать дизайн тоглера
export const ThemeToggler = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button onClick={toggleTheme} className="rounded-[100%] p-[8px]  text-white max-w-[40px]">
      {theme === "light" ? (
          <DarkModeIcon/>
      ) : (
          <LightModeIcon />
      )}
    </button>
  );
};
