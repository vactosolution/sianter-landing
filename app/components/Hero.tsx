"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const stagger: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section ref={ref} className="hero">
      {/* Parallax image */}
      <motion.div className="hero-image-wrapper" style={{ y: imageY, scale: imageScale }}>
        <Image
          src="/hero-village.png"
          alt="Suasana desa yang hangat dan asri"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
          quality={90}
        />
      </motion.div>

      {/* Gradient overlay */}
      <motion.div className="hero-overlay" style={{ opacity: overlayOpacity }} />

      {/* Content */}
      <motion.div
        className="hero-content"
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{ y: contentY }}
      >
        <motion.h1 variants={fadeUp}>
          Pesan Makanan &amp; Kirim Barang dari Desa, untuk Desa
        </motion.h1>

        <motion.p className="hero-subtitle" variants={fadeUp}>
          Layanan antar makanan dan kirim barang berbasis web untuk Kecamatan Balai Riam dan sekitarnya.
        </motion.p>

        <motion.div className="hero-actions" variants={fadeUp}>
          <a href="https://www.siantersolusi.my.id/" className="btn-primary" target="_blank" rel="noopener noreferrer">
            Pesan Sekarang
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
          <a href="#layanan" className="btn-secondary">
            Jelajahi Layanan
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
