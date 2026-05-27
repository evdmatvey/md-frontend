import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface PageLayoutProps {
  children: ReactNode;
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
}

export const PageLayout = ({
  children,
  headerSlot,
  footerSlot,
}: PageLayoutProps) => {
  return (
    <div className={styles.root}>
      {headerSlot}
      <main className={styles.main}>{children}</main>
      {footerSlot}
    </div>
  );
};
