import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mikana — AI Sales Assistant for WhatsApp | Available on Google Play',
  description:
    'Mikana watches WhatsApp business groups 24/7, detects customer inquiries matching what you sell, and sends instant notifications. Download now on the Google Play Store.',
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Mikana — AI Sales Assistant for WhatsApp',
    description:
      'Never miss your next customer in WhatsApp trade groups. Live now on Google Play.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#18181B] font-sans antialiased selection:bg-[#1E56A0] selection:text-white">
        {children}
      </body>
    </html>
  );
}
