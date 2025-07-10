import React from 'react';
import Timers from '../timers/Timers';
import HeaderTablet from '../HeaderTablet/HeaderTablet';
import Footer from '../footer/Footer';
import './main.scss';

const Main = () => {
  return (
    <div className="main">
      <HeaderTablet />
      <Timers />
      <Footer />
    </div>
  );
};

export default Main;
