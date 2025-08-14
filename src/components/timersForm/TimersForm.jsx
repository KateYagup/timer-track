import React, { useState} from 'react';
import moment from 'moment';

const TimersForm = ({ timers, setTimers }) => {
  const [timerInput, setTimerInput] = useState('');

  const createNewTimer = () => {

    const newTimer = {
      id: Date.now(),
      title: timerInput || `From ${moment().format('HH:mm')}`,
      value: 0,
      isActive: true,
      lastUpdatedDate: null,
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
