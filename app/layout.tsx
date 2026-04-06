import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SMR Enterprises - Building Materials Supplier in Vijayawada',
  description: 'SMR Enterprises is a trusted building materials supplier in Vijayawada, providing quality paints, cement, pipes and sanitary products for residential and commercial construction projects.',
  keywords: 'building materials, construction materials, paints, cement, pipes, sanitary, Vijayawada, Andhra Pradesh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#A0D2EB" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
