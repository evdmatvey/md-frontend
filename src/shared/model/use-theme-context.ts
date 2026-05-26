import { useContext } from 'react';
import { ThemeContext, type ThemeContextData } from './theme-context';

export const useThemeContext = (): ThemeContextData => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error('useThemeContext must be used with ThemeContextProvider');

  return context;
};
