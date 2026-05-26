import { type ReactNode, useState } from 'react';
import { applyInitialTheme } from '../lib/apply-initial-theme';
import { applyTheme } from '../lib/apply-theme';
import { invertTheme } from '../lib/invert-theme';
import type { Theme } from '../model/theme';
import { ThemeContext, type ThemeContextData } from '../model/theme-context';

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => applyInitialTheme());

  const toggleThemeHandler = () => {
    const invertedTheme = invertTheme(theme);
    applyTheme(invertedTheme);
    setTheme(invertedTheme);
  };

  const contextData: ThemeContextData = {
    theme,
    toggleTheme: toggleThemeHandler,
  };

  return (
    <ThemeContext.Provider value={contextData}>
      {children}
    </ThemeContext.Provider>
  );
};
