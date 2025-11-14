import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Footer from '@/components/Footer';
import BottomText from '@/components/BottomText';

const momoTrust = localFont({
  src: './../../public/fonts/MomoTrustDisplay-Regular.ttf',
  variable: '--font-momo-trust',
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dev Sharma - AI Application Developer",
  description: "Full-Stack AI Orchestrator building with Next.js and MERN.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${momoTrust.className} antialiased bg-black text-gray-100`}>
        {children}
        <BottomText text="Dev Sharma" />
        <Footer />
      </body>
    </html>
  );
}
