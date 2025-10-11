import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const cooperBTLight = localFont({
  src: '../font/CooperBTLight.woff2',
});

const maisonNeue = localFont({
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
      <body className={`${cooperBTLight.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
