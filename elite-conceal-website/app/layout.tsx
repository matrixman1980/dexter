import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elite Conceal™ | Invisible Luxury Safe Solutions for Premium Hotels",
  description: "Redefine hotel security with Elite Conceal™ – the undetectable luxury safe chest. NFC-secured, invisible design, seamless furniture integration. Elevate guest trust and room aesthetics.",
  keywords: "luxury hotel safes, invisible safe chest, NFC hotel security, premium hotel furniture, boutique hotel safes, concealed hotel storage, hospitality security solutions, luxury room safes, undetectable hotel safe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
