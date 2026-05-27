import { ThemeToggle } from '@/feature/theme-toggle';
import { Container } from '@/shared/ui/Container';
import { IconLink } from '@/shared/ui/IconLink';
import { GithubIcon } from '@/shared/ui/icons/GithubIcon';
import { HeaderLogo } from '../HeaderLogo';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <HeaderLogo />
          <div className={styles.controls}>
            <ThemeToggle />
            <IconLink
              icon={<GithubIcon />}
              href="https://github.com/evdmatvey"
              target="_blank"
            />
          </div>
        </div>
      </Container>
    </header>
  );
};
