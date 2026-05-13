import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brew & Co. — Specialty Coffee",
  description:
    "Artisan coffee crafted with patience and purpose. Sourced from the world's finest farms, roasted in small batches.",
  openGraph: {
    title: "Brew & Co. — Specialty Coffee",
    description:
      "Artisan coffee crafted with patience and purpose. Sourced from the world's finest farms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
