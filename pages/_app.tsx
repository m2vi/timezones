import '../styles/globals.css';
import '../styles/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='h-screen w-full flex items-center justify-center relative overflow-y-auto'>
      <NextSeo defaultTitle='Timezones' description='This page shows the most popular time zones and also a table with all time zones.' />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
