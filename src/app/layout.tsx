import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { inter } from '@/ui/font';
import HeaderTop from '@/ui/layout/navbar/HeaderTop';
import Navbar from '@/ui/layout/navbar/Navbar';
import Footer from '@/ui/layout/footer/Footer';
import CopyRight from '@/ui/layout/copy-right/CopyRight';

export const metadata: Metadata = {
  title: 'Website ecommerce',
  description: 'Website ecommerce',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <Navbar />
        {children}
        <Footer />
        <CopyRight />
      </body>
    </html>
  );
}
