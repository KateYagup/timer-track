import React from 'react';
import Headline from '../Headline/Headline';
import './header.scss';

const Header = () => {
  return (
    <div>
      <Headline />
      <div className="header">
        <div className="tablet">
          <div className="tablet__logo">
            <img
              className="tablet__logo-img"
              src="/public/images/header/A.jpg"
              alt=""
            />
          </div>
          <div className="tablet__text">
            <span className="boldText">AppStarter.</span> Best landing page for
            web and mobile apps
          </div>
          <div className="buttons">
            <button className="button button_orange" style={{ width: '167px' }}>
              Download Now
            </button>
            <button className="button button__white" style={{ width: '144px' }}>
              Watch Video
            </button>
          </div>
        </div>
        <img
          className="header__decoration"
          src="/public/images/header/Tablet.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
