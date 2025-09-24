import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NutriZen – Open Source Nutrition & Fitness Companion',
  description:
    'NutriZen é um app open source e gratuito para acompanhar sua dieta, evolução física e metas de saúde com transparência e comunidade.',
  applicationName: 'NutriZen',
  keywords: [
    'nutrição',
    'dieta',
    'fitness',
    'open source',
    'calorias',
    'saúde',
    'macros',
    'nutrizen',
  ],
  authors: [{ name: 'Coffee System', url: 'https://github.com/Coffee-System' }],
  creator: 'Coffee System',
  publisher: 'Coffee System',
  metadataBase: new URL('https://nutrizen.dev'),
  openGraph: {
    title: 'NutriZen – Open Source Nutrition & Fitness Companion',
    description:
      'Aplicativo gratuito e colaborativo para gerenciar dieta, progresso e motivação.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://nutrizen.dev',
    siteName: 'NutriZen',
    images: [
      {
        url: '/logo-icon.png',
        width: 512,
        height: 512,
        alt: 'NutriZen Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NutriZen – Open Source Nutrition & Fitness Companion',
    description:
      'Gerencie sua jornada de dieta e saúde com um app aberto, sem anúncios e comunitário.',
    images: ['/logo-icon.png'],
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/logo-icon.png' },
  ],
  robots: { index: true, follow: true },
  category: 'health',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
