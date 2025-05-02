import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "Alejandro Zapiola",
  description: "Tu plataforma de desarrollo y artículos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${openSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
