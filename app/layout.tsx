import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '8Air Technology',
  description: 'Clean and trusted air filtration systems',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="navbar p-4 shadow-md flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">8Air Technology</Link>
          </div>
          <nav className="flex space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/demo">Demo</Link>
          </nav>
        </header>
        <main className="p-4">{children}</main>
        <footer className="p-4 text-center bg-gray-200">
          &copy; 2024 8Air Technology. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
