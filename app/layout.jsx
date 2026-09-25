import './globals.css';
import Script from 'next/script';
import { archivo, barlowCondensed, plexMono } from './fonts';

export const metadata = {
  metadataBase: new URL('https://bosschallenge.xyz'),
  title: '₿OSS Challenge',
  description: '₿OSS Challenge - start your career in bitcoin open source',
  // Icons from docs/brand/favicon_new/export/favicon-btc. favicon.svg switches between a dark
  // and a light ₿ with the browser's color scheme; favicon.ico covers browsers without SVG icons.
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: '₿OSS Challenge',
    description: '₿OSS Challenge - start your career in bitcoin open source',
    images: ['/img/boss-challenge.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '₿OSS Challenge',
    description: '₿OSS Challenge - start your career in bitcoin open source',
    images: ['/img/boss-challenge.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${archivo.variable} ${plexMono.variable}`}>
      <body>{children}</body>
      <Script 
          src="https://visits.bitcoindevs.xyz/script.js" 
          data-website-id="05dba834-2439-4f5f-948e-34e7ab644de2"
          strategy="afterInteractive"
        />
    </html>
  );
}
