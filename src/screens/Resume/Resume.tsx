import React from 'react';
import styles from './Resume.module.scss';
import { Row, Col } from 'antd';

const Resume = () => {
  return (
    <div className={styles.content}>
      <div className={styles.image}>Image</div>
      <div className={styles.text}>Text</div>
    </div>
  );
};

export default Resume;
