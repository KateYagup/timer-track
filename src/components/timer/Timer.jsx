import React, { useEffect } from 'react';
import './timer.scss';
import moment from 'moment';

const Timer = ({ initialTimer, setTimers, onToggle, onDelete }) => {
  const { id, value, isActive, title } = initialTimer;
  const lastUpdatedDate = 10;

  // useEffect(() => {
  //   let intervalId = null;
  //   const passedTime = moment().diff(moment(lastUpdatedDate), 'seconds');
  //   if (isActive && passedTime) {
  //     setTimers((prevState) => ({
  //       ...prevState,
  //       value: value + passedTime,
  //     }));
  //   }
  //   if (isActive) {
  //     intervalId = setInterval(() => {
  //       setTimers((prevState) => ({
  //         ...prevState,
  //         value: prevState.value + 1,
  //       }));
  //     }, 1000);
  //   }
  //   return () => {
  //     if (intervalId) {
  //       clearInterval(intervalId);
  //     }
  //     localStorage.setItem('closeTime', moment().format('HH:mm:ss'));
  //   };
  // }, [isActive]);

  // const onDelete = (id) => {
  //   setTimers([...initialTimer.filter((timers) => timers.id !== id)]);
  // };

  // const onToggle = (id) => {
  //   setTimers([
  //     ...initialTimer.map((timer) =>
  //       id === timer.id
  //         ? { ...timer, isActive: !timer.isActive }
  //         : { ...timer }
  //     ),
  //   ]);
  // };

  return (
    <li className="track">
      <p className="track__name-text">{title}</p>
      <span
        className={
          !isActive
            ? 'track__time   track__active'
            : 'track__time  track__passive'
        }
      >
        {moment.utc(value * 1000).format('HH:mm:ss')};
      </span>
      <button
        className={
          !isActive ? 'track__button play_button' : 'track__button pause_button'
        }
        onClick={() => {
          onToggle(id);
        }}
      ></button>
      <button
        className="track__button delete"
        onClick={() => {
          onDelete(id);
        }}
      >
        <img
          className="button-control"
          src="/public/images/control_buttons/deleteIcon.png"
          alt=""
        />
      </button>
    </li>
  );
};

export default Timer;
