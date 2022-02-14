import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import Box from '../components/Box';
import { Button } from '../components/Button';
import 'slick-carousel/slick/slick.css';
import Head from 'next/head';
import { BoxProps } from '../utils/types';
import tz from '@utils/tz';

const Home: BoxProps = ({ timezones }) => {
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
      <Box timezones={timezones} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      timezones: await tz.boxTimezones(),
    },
  };
};
