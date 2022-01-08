import styles from './MainSection.module.scss';
import homeMainIcon from '../../../assets/home-screen.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '../../../components/UIElement/Button/Button';
import { FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import { saveAs } from 'file-saver';
import { cvURL, onLineCVUrl } from '../../../configs/personalInformation';

interface MainSectionProps {
  secondSectionRef: React.RefObject<unknown>;
  topSectionRef: React.RefObject<unknown>;
}

const MainSection = (props: MainSectionProps) => {
  const { secondSectionRef, topSectionRef } = props;

  const handleSaveFile = () => {
    saveAs(cvURL, 'Be_Anjara_CV.pdf');
  };

  const handleViewCv = () => {
    window.open(onLineCVUrl);
  };
  return (
    <>
      <section className={styles.content}>
        <div>
          <h2 style={{ paddingBottom: 15 }} className={styles.title}>
            Hi! <span className={styles.wave}>👋🏻</span>
          </h2>

          <h1 className={styles.mainTitle}>
            I'm
            <strong className={styles.mainName}> Be Anjara HOUSSEN</strong>
          </h1>
          <h2 className={styles.postTitle}> Javascript Developer</h2>
          <div>
            <Button
              onClick={() => handleSaveFile()}
              className="primary"
              // target="_blank"
              style={{ margin: 'auto' }}>
              <FaDownload /> &nbsp; Download CV
            </Button>
            <Button
              className="primary"
              style={{ marginLeft: 10 }}
              target="_blank"
              onClick={handleViewCv}>
              <FaExternalLinkAlt /> &nbsp; See online CV
            </Button>
          </div>
        </div>

        <LazyLoadImage
          alt="home-img"
          effect="blur"
          src={homeMainIcon}
          wrapperClassName={styles.homeMainIcon}
        />
      </section>
    </>
  );
};

export default MainSection;
