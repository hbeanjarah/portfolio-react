import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../configs/routes';
import AboutSection from '../screens/Home/AboutSection';

const Home = lazy(() => import('../screens/Home'));

const BaseRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={routes.HOMESECTION} element={<Home />} />
      <Route path={routes.ABOUT} element={<AboutSection />} />
    </Routes>
  );
};

export default BaseRoutes;
