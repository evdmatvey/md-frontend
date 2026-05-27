import { useThemeContext } from '@/shared/model/use-theme-context';
import { MoonIcon } from '@/shared/ui/icons/MoonIcon';
import { SunIcon } from '@/shared/ui/icons/SunIcon';
import styles from './styles.module.css';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button className={styles.root} onClick={toggleTheme}>
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
