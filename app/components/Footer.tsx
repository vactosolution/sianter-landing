import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image
            src="/siantar-aja-logo.png"
            alt="SiAnter"
            width={90}
            height={28}
            className="footer-logo"
          />
          <span className="footer-text">
            © 2026 PT Sianter Solusi Nusantara. Hak cipta dilindungi.
          </span>
        </div>
        <div className="footer-links">
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Syarat & Ketentuan</a>
          <a href="#">Kontak</a>
        </div>
      </div>
    </footer>
  );
}
