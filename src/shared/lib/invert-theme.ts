import type { Theme } from '../model/theme';

export const invertTheme = (theme: Theme): Theme => {
  if (theme === 'dark') return 'light';
  if (theme === 'light') return 'dark';

  return 'light';
};
