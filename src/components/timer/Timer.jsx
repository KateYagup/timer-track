import React, { useEffect, useState, useMemo } from 'react';
import './timer.scss';
import moment from 'moment';

const Timer = ({
  id,
  timerName,
  startTime,
  endTime,
  removeTimer,
  pauseTimer,
  handleToggle,
  handleStartTime,
  handleEndTime,
  handleStopTime,
}) => {
  const [currentTime, setCurrentTime] = useState(Number(startTime));
  const [timeFormated, setTimeFormated] = useState('');

  useEffect(()=>{
    if (!pauseTimer) {
      const secondsPast = moment().diff(endTime, 'seconds');
      console.log('Конечное время ' + endTime);
      console.log('Текущее время ' + moment().format());
      console.log('Прошло секунд ' + secondsPast);
      console.log('Накопленные секунды ' + startTime);
      setCurrentTime(startTime + secondsPast);
      console.log(`Суммарное количество секунд ${startTime + secondsPast}`);
      
      return;
    }
  }, []);

  useEffect(() => {
    let intervalId;
    if (pauseTimer) {
      handleStartTime(id, currentTime);
      handleStopTime(id, null);
      // handleEndTime(id); // устанавливаем суммарное количество секунд
      return;
    } else if (!pauseTimer) {
      intervalId = setInterval(() => {
        setCurrentTime((t) => t + 1);
      }, 1000);
      handleStopTime(id, moment().format());
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [pauseTimer]); // useCallBack родительсий элемент

  useEffect(() => {
    const hours = Math.trunc(currentTime / 3600);
    const minutes = Math.trunc((currentTime - hours * 3600) / 60);
    const seconds = currentTime - hours * 3600 - minutes * 60;
    const hoursString = hours >= 10 ? hours : `0${hours}`;
    const minutesString = minutes >= 10 ? minutes : `0${minutes}`;
    const secondsString = seconds >= 10 ? seconds : `0${seconds}`;

    setTimeFormated(`${hoursString} : ${minutesString} : ${secondsString}`);
  }, [currentTime]);

  useMemo(() => {
    handleStartTime(id, currentTime);
  }, [currentTime]);

  return (
    <li className="track">
      <p className="track__name-text">{timerName}</p>
      <span
        className={
          pauseTimer
            ? 'track__time   track__active'
            : 'track__time  track__passive'
        }
      >
        {timeFormated}
      </span>
      <button
        className={
          pauseTimer
            ? 'track__button play_button'
            : 'track__button pause_button'
        }
        onClick={() => {
          handleToggle(id);
        }}
      ></button>
      <button className="track__button delete" onClick={() => removeTimer(id)}>
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
