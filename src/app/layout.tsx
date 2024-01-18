import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { inter } from '@/ui/font';

export const metadata: Metadata = {
  title: 'Website ecommerce',
  description: 'Website ecommerce',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
