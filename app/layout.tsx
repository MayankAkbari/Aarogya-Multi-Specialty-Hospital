import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import EmergencyTopBar from '@/components/layout/EmergencyTopBar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import EmergencySOSModal from '@/components/booking/EmergencySOSModal';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Aarogya Multi-Specialty Hospital | Advanced Medical Care & 24/7 Trauma',
  description: 'Premier Multi-Specialty & Super-Specialty Hospital offering world-class cardiac surgery, neurosciences, robotic orthopedics, oncology, and Level 1 Emergency Trauma care.',
  keywords: 'Best Hospital In India, Multi Specialty Hospital, Super Specialty Hospital, Emergency Hospital, Robotic Surgery, Cardiology, Neurology, ICU Hospital',
  authors: [{ name: 'Aarogya Medical Institute' }],
  icons: {
    icon: '/favicon-logo.png',
    shortcut: '/favicon-logo.png',
    apple: '/favicon-logo.png',
  },
  openGraph: {
    title: 'Aarogya Multi-Specialty Hospital | Premium Healthcare',
    description: 'World-class medical excellence with 20 super-specialty institutes and 24/7 emergency care.',
    url: 'https://www.aarogyahospital.com',
    siteName: 'Aarogya Hospital',
    images: ['/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hospitalSchema = {
    '@context': 'https://schema.org',
    '@type': 'Hospital',
    name: 'Aarogya Multi-Specialty Hospital',
    alternateName: 'Aarogya Super-Specialty Healthcare Institute',
    url: 'https://www.aarogyahospital.com',
    logo: 'https://www.aarogyahospital.com/logo.png',
    description: 'Premier Quaternary Multi-Specialty Hospital offering world-class medical care, 24/7 emergency trauma resuscitation, modular OTs, and robotic surgery.',
    telephone: '+91-88888-10800',
    emergencyTelephone: '+91-88888-10800',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Healthcare Boulevard, Medical District',
      addressLocality: 'Metropolis',
      addressRegion: 'MH',
      postalCode: '400001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.9218,
      longitude: 72.8332,
    },
    medicalSpecialty: [
      'Cardiovascular', 'Neurologic', 'Oncologic', 'Orthopedic', 'Pediatric', 'Gynecologic', 'Urologic'
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col pt-24 sm:pt-28`}>
        <EmergencyTopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <EmergencySOSModal />
      </body>
    </html>
  );
}
