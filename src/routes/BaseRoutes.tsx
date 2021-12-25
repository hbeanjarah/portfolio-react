import React, { lazy } from 'react';
import {} from 'history';
import { Route, Routes, useLocation } from 'react-router-dom';
//modals
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const About = lazy(() => import('../scenes/About/About'));
const Projects = lazy(() => import('../scenes/Projects/Projects'));
const Resume = lazy(() => import('../scenes/Resume/Resume'));
export const routes = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  PROJECT: '/project/:id',
  RESUME: '/resume'
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={location}>
        <Route path={routes.HOME} exact component={Home} />
      </Routes>

      {background && <Route path={routes.PROJECT} component={ModalProjectCard} />}
    </>
  );
};

export default BaseRoutes;
