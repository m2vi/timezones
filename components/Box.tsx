import moment from 'moment-timezone';
import { useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
import Time from './Time';

const Box = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
  };
  const tz = moment.tz.guess();

  return (
    <div className='max-w-xs px-8 py-6 bg-primary-900 text-center rounded-8'>
      <Slider {...settings}>
        <div className='flex flex-col w-full'>
          <p className='mb-1'>{tz}</p>
          <Time timezone={tz} />
        </div>
        <div className='flex flex-col w-full'>
          <p className='mb-1'>{tz}</p>
          <Time timezone={tz} />
        </div>
      </Slider>
    </div>
  );
};

export default Box;
