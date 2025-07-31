import React, { useState} from 'react';
import moment from 'moment';

const TimersForm = ({ timers, setTimers }) => {
  const [timerInput, setTimerInput] = useState('');

  const createNewTimer = () => {
    const id = Math.random().toString(36).substr(2, 9);
    const timerName = timerInput || `From ${moment().format('HH:mm')}`;

    const newTimer = {
      id,
      timerName,
      startTime: 0,
      endTime: 0,
      pauseTimer: false,
    };

    setTimers([...timers, newTimer]);
    setTimerInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      createNewTimer(e);
    }
  };
  return (
    <div className="createTimers">
      <input
        className="inputName"
        type="text"
        placeholder="Timer name"
        value={timerInput}
        onChange={(e) => setTimerInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        className="button button_orange"
        style={{ width: '165px' }}
        onClick={createNewTimer}
      >
        Create Timer
      </button>
    </div>
  );
};

export default TimersForm;
