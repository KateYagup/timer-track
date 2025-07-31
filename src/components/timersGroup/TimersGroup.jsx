import React from 'react';
import Timer from '../timer/Timer';

const TimersGroup = ({ timers, setTimers }) => {

  const removeTimer = (id) => {
    setTimers([...timers.filter((timers) => timers.id !== id)]);
  };

  const handleToggle = (id) => {
    setTimers([
      ...timers.map((timer) =>
        id === timer.id
          ? { ...timer, pauseTimer: !timer.pauseTimer }
          : { ...timer }
      ),
    ]);
  };

  const handleStartTime = (id, newTime) => {
    setTimers([
      ...timers.map((timer) =>
        id === timer.id ? { ...timer, startTime: newTime } : { ...timer }
      ),
    ]);
  };

  const handleStopTime = (id, stopTime) => {
    setTimers(
      timers.map((timer) =>
        id === timer.id ? { ...timer, endTime: stopTime } : { ...timer }
      )
    );
  };

  const handleNewStartTime = (id) => {
    setTimers([
      ...timers.map((timer) =>
        id === timer.id
          ? {
              ...timer,
              startTime: timer.startTime,
            }
          : { ...timer }
      ),
    ]);
  };

  return (
    <ul className="timers-group">
      {timers.map((timer) => (
        <Timer
          key={timer.id}
          {...timer}
          removeTimer={removeTimer}
          handleToggle={handleToggle}
          handleStartTime={handleStartTime}
          handleNewStartTime={handleNewStartTime}
          handleStopTime={handleStopTime}
        />
      ))}
    </ul>
  );
};

export default TimersGroup;
