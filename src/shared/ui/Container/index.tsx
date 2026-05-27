import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className={styles.root}>{children}</div>;
};
