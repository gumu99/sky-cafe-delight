import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#hours", label: "Hours" },
  { href: "#find", label: "Find Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-xl md:text-2xl tracking-[0.25em] text-gold">
          ONESKY
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+918250086507"
          className="hidden md:inline-block text-xs uppercase tracking-widest text-gold border border-gold/40 px-4 py-2 rounded-full hover:bg-gold hover:text-primary-foreground transition-colors"
        >
          Reserve
        </a>
      </div>
    </motion.header>
  );
}