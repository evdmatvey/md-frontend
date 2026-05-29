import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

export const NotFoundText = () => {
  const glitchRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glitch = glitchRef.current;
      const shadow = shadowRef.current;

      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;

      if (glitch) {
        glitch.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (shadow) {
        shadow.style.transform = `translate(calc(-50% + ${-x}px), calc(-50% + ${-y}px))`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.root}>
      <div ref={shadowRef} className={styles.glitchShadow}>
        404
      </div>

      <h1
        ref={glitchRef}
        className={clsx(styles.glitchText, styles.glitchMain)}
        data-text="404"
      >
        404
      </h1>
    </div>
  );
};
