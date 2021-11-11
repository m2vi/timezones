import type { NextPage } from 'next';
import Box from '../components/Box';
import { Button } from '../components/Button';
import Slider, { Settings } from 'react-slick';

const Home: NextPage = () => {
  const settings: Settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='h-screen w-full flex items-center justify-center relative'>
      <Button className='absolute top-5 right-5' size='small'>
        Table
      </Button>

      <Box />
    </div>
  );
};

export default Home;
