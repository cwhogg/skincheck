import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: `SkinCheck — Professional skin cancer screening at home`,
  description: `Skin cancer screening without dermatologist visits. Medical-grade smartphone dermoscopy with 48-hour physician review. Skip 50+ day wait times.`,
  openGraph: {
    title: `SkinCheck — Professional skin cancer screening at home`,
    description: `Skin cancer screening without dermatologist visits. Medical-grade smartphone dermoscopy with 48-hour physician review. Skip 50+ day wait times.`,
    type: 'website',
    siteName: `SkinCheck`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `SkinCheck — Professional skin cancer screening at home`,
    description: `Skin cancer screening without dermatologist visits. Medical-grade smartphone dermoscopy with 48-hour physician review. Skip 50+ day wait times.`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-text min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
