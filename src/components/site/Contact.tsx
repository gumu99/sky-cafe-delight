import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Get in Touch</p>
        <h2 className="font-display text-4xl md:text-6xl mb-10">
          Call us, <span className="italic text-gradient-gold">we'll save you a seat</span>
        </h2>

        <a
          href="tel:+918250086507"
          className="group inline-flex flex-col items-center gap-4 border border-gold/30 rounded-sm px-12 py-10 bg-card/40 backdrop-blur-sm hover:border-gold transition-all duration-500 hover:shadow-glow"
        >
          <Phone className="w-8 h-8 text-gold group-hover:scale-110 transition-transform" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Reservations</span>
          <span className="font-display text-3xl md:text-5xl text-gradient-gold tracking-wider">
            +91 82500 86507
          </span>
        </a>
      </motion.div>
    </section>
  );
}