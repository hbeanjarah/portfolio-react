import BackgroundSection from '../../components/UIElement/BackgroundSection';
import HomeLayout from '../../layouts/HomeLayout';
import MainSection from './MainSection/MainSection';

const Home = () => {
  return (
    <HomeLayout>
      <BackgroundSection>
        <MainSection />
      </BackgroundSection>
    </HomeLayout>
  );
};

export default Home;
