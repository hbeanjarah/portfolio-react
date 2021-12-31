import cx from 'classnames';
import { useState } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  children: any;
}

const Header = (props: HeaderProps) => {
  const { children } = props;
  const [headerHighlight, setHeaderHighlight] = useState(false);
  const scrollHandler = () => {
    setHeaderHighlight(window.scrollY >= 20);
  };
  window.addEventListener('scroll', scrollHandler);

  return (
    <div
      className={cx(styles.header, {
        [styles.highlighted]: headerHighlight
      })}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Header;
