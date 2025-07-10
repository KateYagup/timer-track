import React from 'react';
import './headerTablet.scss';

const HeaderTablet = () => {
  return (
    <div>
      <div className="navPanel">
        <div className="navPanel__left">AppStarter</div>
        <div className="navPanel__right">
          <a className="navPanel__right-menu">Features</a>
          <a className="navPanel__right-menu">Video Tour</a>
          <a className="navPanel__right-menu">Reviews</a>
          <a className="navPanel__right-menu">Pricing</a>
          <button className="button button__white navPanel__button">GET IT FREE</button>
        </div>
      </div>
      <div className="header">
        <div className="tablet">
          <div className="tablet__logo">
            <img className="tablet__logo-img" src="/public/images/header/A.jpg" alt="" />
          </div>
          <div className="tablet__text">
            <span className="boldText">AppStarter.</span> Best landing page for web and mobile apps
          </div>
          <div className="buttons">
            <button className="button button__orange">Download Now</button>
            <button className="button button__white">Watch Video</button>
          </div>
        </div>
        <img className="header__decoration" src="/public/images/header/Tablet.png" alt="" />
      </div>
    </div>
  );
};

export default HeaderTablet;
