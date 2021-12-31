import styles from './AboutSection.module.scss';
import { AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import { FaFacebookSquare, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { forwardRef } from 'react';

const SecondSection = forwardRef((props, ref) => (
  <section className={styles.content} ref={ref as any} id="section-about">
    <div className={styles.introduction}>
      <div className={styles.introductionText}>
        <h1 className={styles.title}>
          Few <span className={styles.purple}> Things about </span> me
        </h1>

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

    <div className={styles.introSocial}>
      <h1>FIND ME ON</h1>
      <p>
        Feel free to <span className={styles.purple}>contact </span> me on
      </p>
      <ul className={styles.socialLinks}>
        <li className={styles.socialLink}>
          <a
            href="https://github.com/hbeanjarah"
            target="_blank"
            rel="noreferrer"
            className={styles.socialIcon}>
            <AiFillGithub />
          </a>
        </li>
        <li className={styles.socialLink}>
          <a
            href="https://gitlab.com/Beanjara"
            target="_blank"
            rel="noreferrer"
            className={styles.socialIcon}>
            <AiFillGitlab />
          </a>
        </li>
        <li className={styles.socialLink}>
          <a
            href="mailto:hbeanjarahoussen@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.socialIcon}>
            <FaEnvelope />
          </a>
        </li>
        <li className={styles.socialLink}>
          <a
            href="https://www.linkedin.com/in/be-anjara-houssen-4273a815a/"
            target="_blank"
            rel="noreferrer"
            className={styles.socialIcon}>
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </div>
  </section>
));

export default SecondSection;
