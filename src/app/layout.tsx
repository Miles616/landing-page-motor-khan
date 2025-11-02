import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Car Denting & Painting in Rithala, Rohini - Motor Khan",
  description:
    "Get expert car denting and painting in Rithala, Rohini, Delhi. Motor Khan offers fast, affordable, and high-quality car repair and restoration services near you.",
  keywords:
    "car denting painting rithala, car repair rohini, auto body shop near me, dent removal delhi, car painting service rohini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Motor Khan Rithala",
    "image": "https://motorkhan.com/images/workshop.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No 12, Vijay Vihar Phase I, Rithala, Rohini",
      "addressLocality": "Delhi",
      "postalCode": "110085",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.7163,
      "longitude": 77.0963
    },
    "url": "https://delhi.motorkhan.com",
    "telephone": "+918595853918",
    "priceRange": "₹₹",
    "openingHours": "Mo-Su 09:00-21:00"
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;1,900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
