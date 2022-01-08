import React from 'react';
import Header from '../../components/Header';
import MainNavigation from '../../components/MainNavigation';
import Particles from '../../components/UIElement/Particles';
import styles from './HomeLayout.module.scss';
interface HomeLayoutProps {
  children: any;
}
const HomeLayout = (props: HomeLayoutProps) => {
  const { children } = props;

  return (
    <div className={styles.layout} id="section-home">
      <Particles />
      <Header>
        <MainNavigation />
      </Header>
      {children}
    </div>
  );
};

export default HomeLayout;
