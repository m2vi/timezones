import moment from 'moment';
import { useEffect, useState } from 'react';

const Time = ({ timezone }: { timezone: string }) => {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    setTime(moment().format('HH:MM:ss'));
    const interval = setInterval(() => {
      setTime(moment().format('HH:MM:ss'));
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone]);
  return (
    <>
      <p>Time: {time}</p>
    </>
  );
};

export default Time;
