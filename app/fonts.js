import { Archivo, Barlow_Condensed, IBM_Plex_Mono } from 'next/font/google';

// Cold Storage type — see docs/brand/cold-storage-palette.md
export const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  style: ['italic'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-plex-mono',
  display: 'swap',
});
