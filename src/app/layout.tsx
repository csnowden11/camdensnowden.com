import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Camden Snowden – Official Site",
  description: "West Point-bred Intelligence Officer & Berkeley Haas MBA candidate leveraging strategic-intelligence expertise to create business impact.",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
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
