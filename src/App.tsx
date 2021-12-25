import './styles/main.scss';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Preloader from './components/UIElement/Preloader';
import BaseRoutes from './routes/BaseRoutes';
import Home from './screens/Home';

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Router>
        <BaseRoutes />
      </Router>
    </Suspense>
  );
};

export default App;
