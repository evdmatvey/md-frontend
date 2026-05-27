import { Link } from 'react-router';
import { ROUTES } from '@/shared/config/routes.config';
import { LogoIcon } from '@/shared/ui/icons/LogoIcon';
import styles from './styles.module.css';

export const HeaderLogo = () => {
  return (
    <Link to={ROUTES.HOME} className={styles.root}>
      <LogoIcon />
      MD Share
    </Link>
  );
};
