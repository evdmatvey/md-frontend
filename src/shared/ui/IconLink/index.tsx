import type { ReactNode } from 'react';
import { Link } from 'react-router';
import styles from './styles.module.css';

interface IconLinkProps {
  icon: ReactNode;
  href?: string;
  to?: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
}

export const IconLink = ({ icon, to, target, href = '#' }: IconLinkProps) => {
  if (to)
    return (
      <Link to={to} className={styles.root} target={target}>
        {icon}
      </Link>
    );

  return (
    <a href={href} className={styles.root} target={target}>
      {icon}
    </a>
  );
};
