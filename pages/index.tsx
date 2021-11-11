import type { NextPage } from 'next';
import Box from '../components/Box';
import { Button } from '../components/Button';
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title='Timezones' description='This page shows the most popular time zones and also a table with all time zones.' />
      <div className='h-screen w-full flex items-center justify-center relative'>
        <Button className='absolute top-5 right-5' size='small'>
          Table
        </Button>
        <Box />
      </div>
    </>
  );
};

export default Home;
