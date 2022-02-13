import type { NextPage } from 'next';
import Link from 'next/link';
import Box from '../components/Box';
import { Button } from '../components/Button';
import 'slick-carousel/slick/slick.css';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Timezones</title>
      </Head>
      <Link href='/table'>
        <a>
          <Button className='absolute top-5 right-5' size='small'>
            Table
          </Button>
        </a>
      </Link>
      <Box />
    </>
  );
};

export default Home;
