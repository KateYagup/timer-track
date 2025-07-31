import React from 'react';
import './headline.scss';

const Headline = () => {
  return(
  <div className="navPanel">
    <div className="navPanel__left">AppStarter</div>
    <div className="navPanel__right">
      <a className="navPanel__right-menu">Features</a>
      <a className="navPanel__right-menu">Video Tour</a>
      <a className="navPanel__right-menu">Reviews</a>
      <a className="navPanel__right-menu">Pricing</a>
      <button
        className="button button_white navPanel__button"
        style={{ width: '132px' }}
      >
        GET IT FREE
      </button>
    </div>
  </div>
  )
};

export default Headline;
