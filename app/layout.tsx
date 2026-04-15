import type { Metadata } from "next";
import { EB_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SiAnter — Layanan Antar Makanan & Kirim Barang | Balai Riam",
  description:
    "SiAnter adalah platform layanan antar makanan dan kirim barang berbasis aplikasi untuk Kecamatan Balai Riam dan sekitarnya. Cepat, mudah, dan efisien.",
  keywords: [
    "SiAnter",
    "layanan antar makanan",
    "kirim barang",
    "Balai Riam",
    "UMKM lokal",
    "delivery desa",
    "jasa antar",
  ],
  openGraph: {
    title: "SiAnter — Layanan Antar Makanan & Kirim Barang",
    description:
      "Platform layanan antar makanan dan kirim barang untuk masyarakat Kecamatan Balai Riam dan sekitarnya.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${ebGaramond.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
