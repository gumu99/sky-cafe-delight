import { motion } from "framer-motion";
import gallery2 from "@/assets/gallery-2.jpg";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
          <img
            src={gallery2}
            alt="Cozy rooftop corner with hanging Edison bulbs"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative rounded-sm shadow-warm w-full h-[520px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-background border border-gold/30 px-6 py-4 rounded-sm">
            <p className="font-display italic text-gold text-lg">3rd Floor</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">open sky</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            A rooftop where <span className="italic text-gradient-gold">stars</span> are part of the menu.
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              Tucked above the bustle of Jirat Road, ONESKY is an open-sky retreat
              — a place to slow down, sip slowly, and look up. Warm fairy lights
              hang like lazy constellations above hand-finished wooden tables.
            </p>
            <p>
              Whether you've come for a quiet evening espresso, a long chat with
              friends, or a moment alone with the night air, our rooftop holds
              space for it all. No noise. No hurry. Just a peaceful sky and a
              very, very good cup of coffee.
            </p>
          </div>

          <div className="mt-10 flex gap-10">
            <div>
              <p className="font-display text-4xl text-gold">∞</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Open Sky</p>
            </div>
            <div>
              <p className="font-display text-4xl text-gold">8.5h</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Daily</p>
            </div>
            <div>
              <p className="font-display text-4xl text-gold">3F</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Rooftop</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}