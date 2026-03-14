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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
