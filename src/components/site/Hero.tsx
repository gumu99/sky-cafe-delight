import { motion } from "framer-motion";
import { useState } from "react";
import heroImg from "@/assets/hero-rooftop.jpg";

export function Hero() {
  const [showSoon, setShowSoon] = useState(false);

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="ONESKY rooftop cafe under a starlit sky with warm fairy lights"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.13_0.018_55)_85%)]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold mb-6 animate-flicker"
        >
          ✦ Ashoknagar · West Bengal ✦
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] mb-6"
        >
          <span className="text-gradient-gold">ONESKY</span>
          <span className="block italic font-light text-foreground/90 text-5xl sm:text-6xl md:text-7xl mt-2">
            cafe
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground italic font-display mb-10"
        >
          “Where the sky meets your coffee.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#book"
              className="group relative overflow-hidden bg-gradient-gold text-primary-foreground px-10 py-4 rounded-full text-sm uppercase tracking-[0.25em] font-medium shadow-glow hover:shadow-warm transition-all duration-500 hover:scale-105"
            >
              <span className="relative z-10">Reserve a Table</span>
            </a>
            <button
              onClick={() => {
                setShowSoon(true);
                setTimeout(() => setShowSoon(false), 2800);
              }}
              className="px-10 py-4 rounded-full text-sm uppercase tracking-[0.25em] font-medium border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500"
            >
              View Menu
            </button>
          </div>
          {showSoon && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold text-sm tracking-widest uppercase"
            >
              ✦ Menu coming soon ✦
            </motion.div>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 text-xs tracking-[0.3em] uppercase"
      >
        scroll
      </motion.div>
    </section>
  );
}