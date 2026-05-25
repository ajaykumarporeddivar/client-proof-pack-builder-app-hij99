import { useClient } from 'react';
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

useClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-inter">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;