"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

const stats = [
  { value: 100, suffix: "+", label: "Mitra UMKM Lokal" },
  { value: 50, suffix: "+", label: "Kurir Aktif" },
  { value: 5000, suffix: "+", label: "Pesanan Terlayani" },
];

export default function Mission() {
  return (
    <section id="misi" className="section mission-section">
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label">Misi Kami</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="section-heading" style={{ maxWidth: 560 }}>
            Membangun dari daerah,
            <br />
            untuk daerah
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="section-description">
            SiAnter hadir sebagai motor penggerak ekonomi lokal — menghubungkan masyarakat dengan pelaku usaha melalui teknologi yang mudah diakses.
          </p>
        </ScrollReveal>

        <div className="mission-grid">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="mission-visual">
              <Image
                src="/package-delivery.png"
                alt="Pengiriman paket SiAnter"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                quality={85}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <div className="mission-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <div className="stat-value">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
