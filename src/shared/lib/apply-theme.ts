import { ThemeKey } from '@/shared/config/theme-key.config';
import type { Theme } from '@/shared/model/theme';

export const applyTheme = (theme: Theme) => {
  window.localStorage.setItem(ThemeKey, theme);
  document.body.dataset.theme = theme;
};
