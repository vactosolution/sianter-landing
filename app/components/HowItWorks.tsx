"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Buka Web SiAnter",
    description:
      "Akses layanan SiAnter langsung melalui browser Anda. Pilih layanan yang Anda butuhkan — antar makanan atau kirim barang.",
  },
  {
    number: "02",
    title: "Pilih & Pesan",
    description:
      "Telusuri mitra UMKM dan kedai lokal, pilih menu atau layanan, lalu konfirmasi pesanan Anda.",
  },
  {
    number: "03",
    title: "Kurir Menjemput",
    description:
      "Driver kami segera menjemput pesanan Anda. Pantau status pengiriman secara real-time langsung dari web.",
  },
  {
    number: "04",
    title: "Terima di Lokasi",
    description:
      "Pesanan diantar langsung ke pintu rumah Anda — cepat, aman, dan terjangkau.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="section" style={{ background: "var(--color-surface)" }}>
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label">Cara Kerja</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="section-heading">
            Empat langkah sederhana
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="section-description">
            Tidak perlu datang ke lokasi. Cukup pesan melalui web.
          </p>
        </ScrollReveal>

        <div className="steps-container">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={0.1 + i * 0.1}>
              <div className="step-item">
                <span className="step-number">{step.number}</span>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
