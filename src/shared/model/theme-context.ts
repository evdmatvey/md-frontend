import { createContext } from 'react';
import type { Theme } from './theme';

export type ThemeContextData = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextData | null>(null);
