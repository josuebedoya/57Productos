import {Sofia_Sans} from 'next/font/google';

const sofiaSans = Sofia_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sofia-sans',
});

export {sofiaSans};