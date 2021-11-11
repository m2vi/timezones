import moment from 'moment';
import { useEffect, useState } from 'react';

const Time = ({ timezone }: { timezone: string }) => {
  const [time, setTime] = useState('00:00:00');
  const format = 'HH:mm:ss';

  useEffect(() => {
    setTime(moment().format(format));
    const interval = setInterval(() => {
      setTime(moment().format(format));
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
