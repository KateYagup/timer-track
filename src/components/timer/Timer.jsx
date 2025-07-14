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

  useEffect(() => {
    let intervalId;
    if (pauseTimer) {
      // handleStartTime(id, startTime);
      handleStartTime(id, currentTime);
      // handleEndTime(id); // устанавливаем суммарное количество секунд
      return;
    }
    if (!pauseTimer) {
      intervalId = setInterval(() => {
        setCurrentTime((t) => t + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
      // if(!pauseTimer){
      //   handleStopTime(id, moment().format('HH:mm:ss'));
      // }
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

  useEffect(()=>{
    if (!pauseTimer) {
      console.log('Секунды');
      console.log(moment(endTime).format('HH:mm:ss'));
      console.log(moment().diff(endTime, 'seconds'));
      // handleStartTime(id, currentTime + moment().diff(endTime, 'seconds'));
      handleStartTime(id, startTime + 60);
      // handleStartTime(id, startTime + moment().diff(endTime, 'seconds'));
      return () => {
        if (!pauseTimer) {
          console.log('Размонтирование');
          console.log(moment().format('HH:mm:ss'));
          handleStopTime(id, moment().format('HH:mm:ss'));
        }
      };
    }
  }, [])

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
