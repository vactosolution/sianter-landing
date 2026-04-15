"use client";

import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section id="gabung" className="section cta-section">
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label">Bergabung Bersama Kami</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2>
            Jadilah bagian dari
            <br />
            perubahan di daerah
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p>
            Baik sebagai mitra UMKM, kurir, maupun pengguna — SiAnter membuka peluang bagi seluruh masyarakat Balai Riam dan sekitarnya.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="cta-actions">
            <a href="https://www.siantersolusi.my.id/" className="btn-primary-light" target="_blank" rel="noopener noreferrer">
              Buka Aplikasi Web
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#" className="btn-outline-light">
              Gabung Jadi Kurir
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
