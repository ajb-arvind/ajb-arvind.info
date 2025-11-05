import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { Preloader } from './_components/Preloader';
import { Lenis } from './_components/lensis';

export const cooperBTLight = localFont({
  src: '../font/CooperBTLight.woff2',
});

export const maisonNeue = localFont({
  src: '../font/MaisonNeueWEB-Mono.woff2',
});

export const metadata: Metadata = {
  title: 'Arvind Badwar',
  description:
    'Personal portfolio website of Arvind Badwar — Frontend Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${maisonNeue.className} antialiased`}>
        {children}
        <Lenis root />
        <Preloader />
      </body>
    </html>
  );
}
