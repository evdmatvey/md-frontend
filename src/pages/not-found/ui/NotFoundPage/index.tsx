import { Link } from 'react-router';
import { ROUTES } from '@/shared/config/routes.config';
import { HomeIcon } from '@/shared/ui/icons/HomeIcon';
import { NotFoundParticles } from '../NotFoundParticles';
import { NotFoundText } from '../NotFoundText';
import styles from './styles.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.root}>
      <NotFoundText />
      <Link to={ROUTES.HOME} className={styles.button}>
        <HomeIcon />
        На главную
      </Link>
      <NotFoundParticles />
    </div>
  );
};
