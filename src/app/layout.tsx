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
  title: "Tom Jimmy",
  description: "Crafting beautiful digital experiences with modern technologies and thoughtful design.",
  icons: {
    icon: "/images/favicon.jpg",
  },
  verification: {
    google: "umkrXMXfe68xrSRS1FwMXcid4Yvw2SYH3WOUZHlxHVI",
  },
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
        <meta name="google-site-verification" content="umkrXMXfe68xrSRS1FwMXcid4Yvw2SYH3WOUZHlxHVI" />
        <link rel="icon" type="image/jpeg" href="/images/favicon.jpg?v=20260131-1" />
        <link rel="shortcut icon" type="image/jpeg" href="/images/favicon.jpg?v=20260131-1" />
        <link rel="apple-touch-icon" href="/images/favicon.jpg?v=20260131-1" />
        <link rel="icon" sizes="32x32" href="/images/favicon.jpg?v=20260131-1" type="image/jpeg" />
        <link rel="icon" sizes="192x192" href="/images/favicon.jpg?v=20260131-1" type="image/jpeg" />
        <meta name="msapplication-TileImage" content="/images/favicon.jpg?v=20260131-1" />
      </head>
      <body className={`antialiased ${specialElite.className} ${playfairDisplay.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
