import React, { lazy } from 'react';
import {} from 'history';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from '../configs/routes';

const Home = lazy(() => import('../screens/Home'));

const BaseRoutes = () => {
  const location: any = useLocation();
  const background = location.state?.background;

  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default BaseRoutes;
