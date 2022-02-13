import moment from 'moment-timezone';
import Slider, { Settings } from 'react-slick';
import sift from 'sift';
import { moveToFront } from '../utils/array';
import { TableProps } from '../utils/types';
import tz from '../utils/tz';
import Time from './Time';

const Box = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
  };

  const table = tz.table();
  const local = moment.tz.guess();

  const timezones = table.filter(
    sift({
      timezone: {
        $in: [local, 'Universal'],
      },
    })
  );

  return (
    <div className='max-w-sm w-full px-8 py-8 bg-primary-900 text-center'>
      <Slider {...settings}>
        {moveToFront(moveToFront(timezones, 'Universal', 'timezone'), local, 'timezone').map(({ name, timezone }: TableProps) => (
          <div className='flex flex-col w-full' key={name}>
            <p className='font-bold mb-1'>{`${timezone} (${name})`}</p>
            <Time timezone={name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Box;
