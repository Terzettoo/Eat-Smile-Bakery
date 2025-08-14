import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Eat Smile Bakery - Brooklyn\'s Hometown Bakery',
  description: 'Proudly serving Brooklyn for over 70 years with fresh baked goods, custom cakes, and specialty items.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}