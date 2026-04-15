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
  metadataBase: new URL("https://www.siantersolusi.web.id/"),
  title: {
    default: "SiAnter — Layanan Antar Makanan & Kirim Barang | Balai Riam, Sukamara",
    template: "%s | SiAnter",
  },
  description:
    "SiAnter adalah platform layanan antar makanan dan kirim barang berbasis aplikasi untuk Kecamatan Balai Riam, Kabupaten Sukamara, Kalimantan Tengah. Cepat, mudah, dan efisien.",
  keywords: [
    "SiAnter",
    "layanan antar makanan",
    "kirim barang",
    "Balai Riam",
    "Sukamara",
    "Kalimantan Tengah",
    "Kalteng",
    "UMKM lokal",
    "delivery desa",
    "jasa antar",
    "delivery Balai Riam",
    "antar makanan Sukamara",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "SiAnter — Layanan Antar Makanan & Kirim Barang",
    description:
      "Platform layanan antar makanan dan kirim barang untuk masyarakat Kecamatan Balai Riam, Sukamara, Kalimantan Tengah.",
    url: "https://www.siantersolusi.web.id/",
    siteName: "SiAnter",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/siantar-aja-logo.png",
        width: 120,
        height: 40,
        alt: "SiAnter Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SiAnter — Layanan Antar Makanan & Kirim Barang",
    description:
      "Platform layanan antar makanan dan kirim barang untuk masyarakat Kecamatan Balai Riam, Sukamara, Kalimantan Tengah.",
    images: ["/siantar-aja-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SiAnter",
    "image": "https://www.siantersolusi.web.id/siantar-aja-logo.png",
    "@id": "https://www.siantersolusi.web.id",
    "url": "https://www.siantersolusi.web.id",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kecamatan Balai Riam",
      "addressLocality": "Sukamara",
      "addressRegion": "Kalimantan Tengah",
      "addressCountry": "ID"
    },
    "description": "Layanan antar makanan dan kirim barang di Balai Riam, Sukamara, Kalimantan Tengah.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <html lang="id" className={`${ebGaramond.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
