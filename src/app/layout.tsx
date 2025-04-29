import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://camdensnowden.com"),
  title: "Camden Snowden – Official Site",
  description: "West Point-bred Intelligence Officer & Berkeley Haas MBA candidate leveraging strategic-intelligence expertise to create business impact.",
  openGraph: {
    title: "Camden Snowden – From the Long Gray Line to the Bottom Line",
    type: "website",
    url: "https://camdensnowden.com",
    images: [
      {
        url: "/img/personal1_800.jpg",
        width: 800,
        height: 600,
        alt: "Camden Snowden",
      },
    ],
    description: "Follow Camden's journey from Army Intelligence to venture & real estate.",
    siteName: "Camden Snowden",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
