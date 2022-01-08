import styles from './Logo.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../configs/routes';
interface LogoProps {
  className: any;
}
const Logo = (props: LogoProps) => {
  const { className } = props;
  return (
    <div className={className}>
      <Link to={routes.HOME} className={styles.logo}>
        Be Anjara
      </Link>
    </div>
  );
};
export default Logo;
