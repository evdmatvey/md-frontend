import { ThemeKey } from '@/shared/config/theme-key.config';
import { type Theme, Themes } from '@/shared/model/theme';
import { applyTheme } from './apply-theme';

const getSystemTheme = (): Theme => {
  const isSystemDarkTheme = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;

  return isSystemDarkTheme ? 'dark' : 'light';
};

const applyThemeAndReturn = (theme: Theme): Theme => {
  applyTheme(theme);
  return theme;
};

export const applyInitialTheme = (): Theme => {
  const theme = window.localStorage.getItem(ThemeKey) as Theme;
  const fallbackTheme = getSystemTheme();

  if (theme && Themes.includes(theme)) return applyThemeAndReturn(theme);

  return applyThemeAndReturn(fallbackTheme);
};
