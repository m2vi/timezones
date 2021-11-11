import moment from 'moment-timezone';
import { useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
import Time from './Time';

const Box = () => {
  const settings: Settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const tz = moment.tz.guess();

  return (
    <div className='max-w-xs px-8 py-6 bg-primary-900 text-center flex items-center justify-center rounded-8'>
      <div className='flex flex-col w-full'>
        <p className='mb-1'>{tz}</p>
        <Time timezone={tz} />
      </div>
    </div>
  );
};

export default Box;
