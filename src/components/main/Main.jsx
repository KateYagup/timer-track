import React from 'react';
import Timers from '../timers/Timers';
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import './main.scss';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Timers />
      <Footer />
    </div>
  );
};

export default Main;
