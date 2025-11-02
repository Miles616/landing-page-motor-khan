import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Motor Khan Quick Quote',
  description: 'Car Denting & Painting Experts in Rohini, Delhi. Get same-day denting, painting & restoration from Motor Khan – trusted since 1995.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
