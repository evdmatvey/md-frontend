import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

export const NotFoundParticles = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      const container = particlesRef.current;
      if (!container) return;

      container.innerHTML = '';
      const count = 20;

      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add(styles.particle);
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = Math.random() * 10 + 14 + 's';
        const size = Math.random() * 2.5 + 10;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return <div ref={particlesRef} className={styles.particles} />;
};
