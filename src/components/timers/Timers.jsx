import React, { useState, useEffect, useRef } from 'react';
import TimersGroup from '../timersGroup/TimersGroup';
import TimersForm from '../timersForm/TimersForm';
import './timers.scss';

const Timers = () => {
  const [timers, setTimers] = useState([]);
  const timersRef = useRef(timers);

  const onUnload = () =>
    localStorage.setItem('timers', JSON.stringify(timersRef.current));

  useEffect(() => {
    timersRef.current = timers;
  }, [timers]);

  useEffect(() => {
    const storedTimers = localStorage.getItem('timers');
    if (storedTimers) {
      setTimers(JSON.parse(storedTimers));
    }
    window.addEventListener('beforeunload', onUnload);
    return () => {
      window.removeEventListener('beforeunload', onUnload);
    };
  }, []);

  return (
    <div className="track-zone">
      <div className="whyUse">
        <p className="whyUse__header">
          <span className="whyUse__header-bold">Why</span> do we use it?
        </p>
        <p className="whyUse__text">
          This sounded nonsense to Alice, so she said nothing, but set off at
          once toward the Red Queen. To her surprise, she lost sight of her in a
          moment.
        </p>
      </div>
      <TimersForm timers={timers} setTimers={setTimers} />
      <div className="separateLine"></div>
      <TimersGroup timers={timers} setTimers={setTimers} />
    </div>
  );
};

export default Timers;
