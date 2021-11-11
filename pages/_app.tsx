import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo title='Timezones' description='This page shows the most popular time zones and also a table with all time zones.' />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
