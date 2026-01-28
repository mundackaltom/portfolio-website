import type { Metadata } from "next";
import { Special_Elite, Playfair_Display } from "next/font/google";
import "./globals.css";

const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-special-elite',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Crafting beautiful digital experiences with modern technologies and thoughtful design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`antialiased ${specialElite.className} ${playfairDisplay.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
