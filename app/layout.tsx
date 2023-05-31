import localFont from 'next/font/local';

import './globals.css';

const montserrat = localFont({
  src: '../public/fonts/montserrat-font.ttf',
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Fress',
  description: 'Tienda virtual Fress',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="bg-neutral-100 min-h-screen">{children}</body>
    </html>
  );
}
