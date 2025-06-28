import type React from "react";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import MouseMoveEffect from "@/components/mouse-move-effect";

import "./globals.css";
import favicon from "./favicon.ico";

const inter = Inter({ subsets: ["latin"] });

const title = "Encrova Holding Limited - Digital Solutions";
const description =
  "Digital solutions: social network, communication, logistics, artificial intelligence, blockchain, and mobile platforms in a single strategic vision.";

export const metadata: Metadata = {
  metadataBase: new URL("https://encrova.com"),
  title: title,
  description: description,
  openGraph: {
    siteName: title,
    title: title,
    type: "website",
    url: "https://encrova.com",
    description: description,
    countryName: "Hong Kong",
    images: [
      {
        url: "/SEO.jpg",
        width: 1784,
        height: 923,
      },
    ],
    locale: "en_EN",
  },
  icons: {
    icon: favicon.src,
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["/SEO.jpg"],
  },
  generator: "v0.dev",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: "smooth" }}>
      <head>
        {/* Meta tags de Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/SEO.jpg" />
        <meta property="og:url" content="https://www.encrova.com" />
        <meta property="og:image:width" content="1916" />
        <meta property="og:image:height" content="982" />
        <meta property="og:image:alt" content="Encrova Holding Limited - Digital solutions" />
        <meta
          name="keywords"
          content="Tecnology, aplications, blockchain, infrastructure, AI, social network"
        />
        <meta property="og:type" content="website" />

        {/* Meta tags de Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/SEO.jpg" />

        {/* Meta tags para Android */}
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="apple-mobile-web-app-title" content="Encrova Holding Limited" />
      </head>
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  );
}
