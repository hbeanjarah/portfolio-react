import React, { Suspense } from 'react';
import './styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Preloader from './components/UIElement/Preloader';
import BaseRoutes from './routes/BaseRoutes';
import 'antd/dist/antd.min.css';

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Router basename="/portfolio-react">
        <BaseRoutes />
      </Router>
    </Suspense>
  );
};

export default App;
