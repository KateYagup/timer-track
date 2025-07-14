import React, { useState, useEffect } from 'react';
import Timer from '../timer/Timer';
import './timers.scss';
import moment from 'moment';

const Timers = () => {
  const [timers, setTimers] = useState(()=>{
    const saved = localStorage.getItem('timers');
    return saved? JSON.parse(saved) :[]
  });
  const [timerInput, setTimerInput] = useState('');

  useEffect(() => {
    const objTimers = localStorage.getItem('timers');
    setTimers(JSON.parse(objTimers));
    console.log(JSON.parse(objTimers));
    // return()=>{
    //   localStorage.setItem('timers', JSON.stringify(timers));
    // }

  }, []);

  useEffect(() => {
    localStorage.setItem('timers', JSON.stringify(timers));
    return () => {
      localStorage.setItem('timers', JSON.stringify(timers));
    };
  }, [timers]);

  const createNewTimer = () => {
    let newTimer;
    if (timerInput) {
      newTimer = {
        id: Math.random().toString(36).substr(2, 9),
        timerName: timerInput,
        startTime: 0,
        endTime: 0,
        pauseTimer: false,
      };
    } else {
      newTimer = {
        id: Math.random().toString(36).substr(2, 9),
        endTime: 0,
        timerName: `From ${moment().format('HH:mm')}`,
        startTime: 0,
        pauseTimer: false,
      };
    }

    setTimers([...timers, newTimer]);
    setTimerInput('');
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      createNewTimer(e);
    }
  };

  const removeTimer = id => {
    setTimers([...timers.filter(timers => timers.id !== id)]);
  };

  const handleEndTime = id => {
    console.log('Выполнилась запись времени handleEndTime');
    setTimers([
      ...timers.map(timer => (id === timer.id ? { ...timer, endTime: moment() } : { ...timer })),
    ]);
  };

  const handleNewStartTime = id => {
    console.log('Выполняется прибавка прошедшего времени handleNewStartTime ' + id);
    setTimers([
      ...timers.map(timer =>
        id === timer.id
          ? {
              ...timer,
              startTime: timer.startTime ,
            }
          : { ...timer },
      ),
    ]);
  };

  const handleToggle = id => {
    setTimers([
      ...timers.map(timer =>
        id === timer.id ? { ...timer, pauseTimer: !timer.pauseTimer } : { ...timer },
      ),
    ]);
  };

  const handleStartTime = (id, newTime) => {
    setTimers([
      ...timers.map(timer => (id === timer.id ? { ...timer, startTime: newTime } : { ...timer })),
    ]);
  };

  const handleStopTime = (id, stopTime) => {
    setTimers([
      ...timers.map((timer) =>
        id === timer.id ? { ...timer, endTime: stopTime } : { ...timer }
      ),
    ]);
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
      <div className="createTimers">
        <input
          className="inputName"
          type="text"
          placeholder="Timer name"
          value={timerInput}
          onChange={(e) => setTimerInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className="button button__orange" onClick={createNewTimer}>
          Create Timer
        </button>
      </div>
      <div className="separateLine"></div>
      <ul className="timers-group">
        {timers.map((timer) => (
          <Timer
            key={timer.id}
            {...timer}
            removeTimer={removeTimer}
            handleToggle={handleToggle}
            handleStartTime={handleStartTime}
            handleEndTime={handleEndTime}
            handleNewStartTime={handleNewStartTime}
            handleStopTime={handleStopTime}
          />
        ))}
      </ul>
    </div>
  );
};

export default Timers;
