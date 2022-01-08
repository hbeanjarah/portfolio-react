import React, { forwardRef } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { scrollToFunction } from '../../../utils/scrollToFunction';
import styles from './ScrollToNext.module.scss';

const ScrollToNext = forwardRef((props, ref) => {
  const goToRef = () => {
    scrollToFunction(ref, 3000);
  };
  return (
    <div className={styles.bounce} onClick={() => goToRef()}>
      <span className={styles.scrollText}>Click Me</span>
      <span className={styles.chevronIcon}>
        <BsChevronDown size={40} />
      </span>
    </div>
  );
});
export default ScrollToNext;
