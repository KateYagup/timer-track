import React, { useState, useEffect } from 'react';
import Timer from '../timer/Timer';
import TimersForm from '../timersForm/TimersForm';
import './timers.scss';
import moment from 'moment';

const Timers = () => {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    const storedTimers = localStorage.getItem("timers");
    console.log(storedTimers);
    setTimers(JSON.parse(storedTimers));
    if(storedTimers){
      setTimers(JSON.parse(storedTimers))
    } 
  }, []);

  useEffect(() => {
    const onUnload = ()=>{
      const updatedTimers = timers.map((timer) =>
        timers.isActive
          ? { ...timer, lastUpdatedDate: moment().toISOString() }
          : timer
      );
localStorage.setItem('timers', JSON.stringify(updatedTimers))
}
  window.addEventListener('beforeunload', onUnload);
  return() => {
    window.removeEventListener('beforeunload', onUnload);
  }
  //  console.log('Запись в сторидж')
  //   localStorage.setItem('timers', JSON.stringify(timers));
  //   console.log(JSON.parse(localStorage.getItem('timers')));
  }, [timers]); 

  const onDelete = (id) => {
    setTimers(timers.filter((timers) => timers.id !== id));
  };

  const onToggle = (id) => {
    setTimers(
      timers.map((timer) =>
        id === timer.id 
      ? { 
        ...timer, 
        isActive: !timer.isActive,
        lastUpdatedDate: timer.isActive ?  null : moment().toISOString
       } 
       : { ...timer }
      ),
    );
  };
 
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
      <ul className="timers-group">
        {timers.map((initialTimer) => (
          <Timer
            key={initialTimer.id}
            initialTimer={initialTimer}
            setTimers={setTimers}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default Timers;
