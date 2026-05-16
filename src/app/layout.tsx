import type { Metadata } from "next";
import { Inter, Fraunces, DM_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vior Skincare — Enhance Your Beauty",
  description: "A quiet ritual of botanically-rich serums, balms and waters — formulated in small batches to leave skin luminous, calm and unmistakably yours.",
  metadataBase: new URL("https://viorskincare.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} ${dmMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
