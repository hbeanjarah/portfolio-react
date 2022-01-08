import Logo from '../Logo/Logo';
import NavigationMenu from '../NavigationMenu';
import styles from './MainNavigation.module.scss';

const MainNavigation = () => {
  return (
    <>
      <Logo className={styles.desktop} />

      <nav className={styles.desktop}>
        <NavigationMenu />
      </nav>
    </>
  );
};

export default MainNavigation;
