"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    number: "01",
    title: "Antar Makanan",
    description:
      "Pesan dari berbagai mitra kedai, warung, dan UMKM kuliner lokal — langsung diantar ke pintu rumah Anda.",
    image: "/hero-village.png",
    comingSoon: false,
  },
  {
    number: "02",
    title: "Sianter Kurir",
    description:
      "Dokumen, paket, titipan belanja, dan kebutuhan harian lainnya — kami antarkan dengan cepat dan aman.",
    image: "/package-delivery.png",
    comingSoon: true,
  },
  {
    number: "03",
    title: "Sianter Sehat",
    description:
      "Kebutuhan obat-obatan dan layanan kesehatan esensial diantar langsung ke rumah Anda dengan aman.",
    image: "/pharmacy.png",
    comingSoon: true,
  },
];

export default function Services() {
  return (
    <section id="layanan" className="section">
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label">Layanan Kami</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="section-heading">
            Tiga layanan utama,
            <br />
            satu platform mudah
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="section-description">
            Semua transaksi dilakukan melalui web — cepat, terorganisir, dan terintegrasi.
          </p>
        </ScrollReveal>

        <div className="services-grid">
          {services.map((service, i) => (
            <ScrollReveal
              key={service.number}
              delay={0.1 + i * 0.15}
              direction={i === 0 ? "left" : i === 2 ? "right" : "up"}
            >
              <div className="service-item">
                {service.comingSoon && (
                  <span className="badge-coming-soon">Coming Soon</span>
                )}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  quality={85}
                />
                <div className="service-item-overlay">
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
