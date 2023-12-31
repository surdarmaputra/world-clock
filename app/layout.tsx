import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import axios from 'axios';

import { Providers } from './providers';

axios.defaults.baseURL = 'https://worldtimeapi.org/api';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'World Clock',
  description: 'A simple world clock app using http://worldtimeapi.org/',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto p-8`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
