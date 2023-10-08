import localFont from 'next/font/local';

import './globals.css';

const montserrat = localFont({
  src: '../public/fonts/montserrat-font.ttf',
  display: 'swap',
  variable: '--font-montserrat',
});

const oswald = localFont({
  src: '../public/fonts/oswald-font.ttf',
  display: 'swap',
  variable: '--font-oswald',
});

export const metadata = {
  title: 'Market',
  description: 'Tienda virtual Market',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${oswald.variable}`}>
      <body className="bg-neutral-100 min-h-screen">{children}</body>
    </html>
  );
}
