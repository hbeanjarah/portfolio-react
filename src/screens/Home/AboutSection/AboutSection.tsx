import styles from './AboutSection.module.scss';
import { forwardRef } from 'react';

const SecondSection = forwardRef((props, ref) => (
  <section className={styles.content} ref={ref as any} id="section-about">
    <div className={styles.introduction}>
      <div className={styles.introductionText}>
        <h1 className={styles.title}>Few Things about me</h1>

        <div className={styles.description}>
          <p>
            I am FullStack developer with skills in developing, debugging and implementing of web or
            mobile solutions using Javascript. <br /> During the life cycle of the project, I can
            intervene on the front, back end and mobile part. <br /> Even being Fullstack
            Javascript, I have a clear preference for React, Node and react Native 🚀 🚀 🚀.
          </p>
        </div>
      </div>
    </div>
  </section>
));

export default SecondSection;
