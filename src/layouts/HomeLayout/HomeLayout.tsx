import React from 'react';
import styles from './HomeLayout.module.scss';
interface HomeLayoutProps {
  children: any;
}
const HomeLayout = (props: HomeLayoutProps) => {
  const { children } = props;

  return <div className={styles.layout}>{children}</div>;
};

export default HomeLayout;
