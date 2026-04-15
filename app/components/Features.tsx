"use client";

import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="feature-icon">
        <path
          d="M20 4L4 12v16l16 8 16-8V12L20 4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M4 12l16 8 16-8M20 20v16" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Sistem Berbasis Web",
    description:
      "Pemesanan, konfirmasi, tracking, dan komunikasi — semuanya terintegrasi dalam satu platform.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="feature-icon">
        <rect
          x="4"
          y="8"
          width="32"
          height="24"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M4 16h32" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Panel Admin & Driver",
    description:
      "Dashboard lengkap untuk pengelolaan pesanan, konfirmasi mitra, dan monitoring pengiriman real-time.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="feature-icon">
        <path
          d="M8 8h24v24H8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M8 16h24M16 16v16M24 16v16" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Dukungan Multi Mitra",
    description:
      "Berbagai pelaku usaha lokal dapat menampilkan katalog produk dan menjangkau customer lebih luas.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="feature-icon">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 12v8l6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Cepat & Efisien",
    description:
      "Proses pemesanan instan, kurir responsif, dan estimasi waktu pengiriman yang akurat.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="feature-icon">
        <path
          d="M12 20a8 8 0 1 1 16 0c0 6-8 12-8 12s-8-6-8-12z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Fokus Wilayah Lokal",
    description:
      "Dirancang khusus untuk Kecamatan Balai Riam dan sekitarnya — layanan yang relevan dan dekat.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="feature-icon">
        <path
          d="M20 4c-6 0-12 6-12 12 0 4 2 7 5 9l7 11 7-11c3-2 5-5 5-9 0-6-6-12-12-12z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M16 18l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Aman & Terpercaya",
    description:
      "Setiap pengiriman dipantau dan aman. Kurir dan mitra terverifikasi untuk ketenangan Anda.",
  },
];

export default function Features() {
  return (
    <section id="fitur" className="section">
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label">Fitur Platform</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="section-heading">
            Teknologi untuk
            <br />
            kemudahan daerah
          </h2>
        </ScrollReveal>

        <div className="features-list">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={0.1 + i * 0.08}>
              <div className="feature-item">
                {feature.icon}
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
