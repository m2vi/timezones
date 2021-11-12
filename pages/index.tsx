import type { NextPage } from 'next';
import Link from 'next/link';
import Box from '../components/Box';
import { Button } from '../components/Button';
import 'slick-carousel/slick/slick.css';

const Home: NextPage = () => {
  return (
    <>
      <div className='h-screen w-full flex items-center justify-center relative'>
        <Link href='/table' passHref>
          <Button className='absolute top-5 right-5' size='small'>
            Table
          </Button>
        </Link>
        <Box />
      </div>
    </>
  );
};

export default Home;
