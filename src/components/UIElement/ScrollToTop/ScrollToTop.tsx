import { BackTop } from 'antd';
import { BsChevronDoubleUp } from 'react-icons/bs';
import styles from './ScrollToTop.module.scss';

const ScrollToTop = () => {
  return (
    <BackTop>
      <div className={styles.chevronIcon}>
        <BsChevronDoubleUp size={40} />
      </div>
    </BackTop>
  );
};

export default ScrollToTop;
