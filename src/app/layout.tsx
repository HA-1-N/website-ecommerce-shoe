import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { inter } from '@/ui/font';
import HeaderTop from '@/ui/layout/navbar/HeaderTop';
import Navbar from '@/ui/layout/navbar/Navbar';
import Footer from '@/ui/layout/footer/Footer';
import CopyRight from '@/ui/layout/copy-right/CopyRight';
import ProviderStore from '@/components/redux/ReduxProvider';
import { EmailProvider } from '@/context/EmailContext';

export const metadata: Metadata = {
  title: 'Website ecommerce',
  description: 'Website ecommerce',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderStore>
          <EmailProvider>
            <HeaderTop />
            <Navbar />
            {children}
            <Footer />
            <CopyRight />
          </EmailProvider>
        </ProviderStore>
      </body>
    </html>
  );
}
