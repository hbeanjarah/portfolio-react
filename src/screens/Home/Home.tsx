import { createRef, useState } from 'react';
import BackgroundSection from '../../components/UIElement/BackgroundSection';
import HomeLayout from '../../layouts/HomeLayout';
import MainSection from './MainSection/MainSection';
import AboutSection from './AboutSection';
import ScrollToTop from '../../components/UIElement/ScrollToTop';
import ScrollToNext from '../../components/UIElement/ScrollToNext';
const Home = () => {
  const secondSectionRef = createRef();
  const topSectionRef = createRef();
  const [showScrollNext, setShowScrollNext] = useState<boolean>(true);

  return (
    <HomeLayout>
      <BackgroundSection>
        <MainSection secondSectionRef={secondSectionRef} topSectionRef={topSectionRef} />
        {showScrollNext && <ScrollToNext ref={secondSectionRef} />}
      </BackgroundSection>
      <AboutSection ref={secondSectionRef} />
      <ScrollToTop />
    </HomeLayout>
  );
};

export default Home;
