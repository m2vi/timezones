import type { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '../components/Button';

const Table: NextPage = () => {
  return (
    <>
      <div className='h-screen w-full flex items-center justify-center relative'>
        <Link href='/' passHref>
          <Button className='absolute top-5 right-5' size='small'>
            Home
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Table;
