import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../configs/routes';
import AboutSection from '../screens/Home/AboutSection';
import Project from '../screens/Project';
import ModalProjectCard from '../screens/Project/ModalProjectCard';

const Home = lazy(() => import('../screens/Home'));

const BaseRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={routes.HOMESECTION} element={<Home />} />
      <Route path={routes.ABOUT} element={<AboutSection />} />
      <Route path={routes.PROJECT} element={<Project />} />
    </Routes>
  );
};

export default BaseRoutes;
