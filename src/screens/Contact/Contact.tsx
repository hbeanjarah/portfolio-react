import React from 'react';
import { AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import styles from './Contact.module.scss';
const Contact = () => {
  return (
    <div className={styles.introSocial} id="section-contact">
      <h1>Find me on</h1>
      <p>Feel free to contact me on</p>
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
  );
};

export default Contact;
