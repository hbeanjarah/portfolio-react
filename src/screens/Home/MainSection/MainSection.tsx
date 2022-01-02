import styles from './MainSection.module.scss';
import homeMainIcon from '../../../assets/home-screen.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Typewriter from '../../../components/UIElement/Typewriter';
interface MainSectionProps {
  secondSectionRef: React.RefObject<unknown>;
  topSectionRef: React.RefObject<unknown>;
}

const MainSection = (props: MainSectionProps) => {
  const { secondSectionRef, topSectionRef } = props;

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

          {/* <div style={{ paddingTop: 0 }}>
            <Typewriter
              strings={[
                'Fullstack Javascript Developer',
                'Continuously Learning new stack',
                'Aims to become aws architect solution'
              ]}
              wrapperClassName={styles.typewriterWrapper}
              cursorClassName={styles.typewriterCursor}
            />
          </div> */}
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
