import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const ADDRESS = "Jirat Rd, near Chowrangee More, Ashoknagar Kalyangarh, West Bengal 743222";
const MAPS_QUERY = encodeURIComponent(ADDRESS);

export function FindUs() {
  return (
    <section id="find" className="py-28 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Find Us</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Up the <span className="italic text-gradient-gold">stairs</span>, into the sky
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-card/60 border border-border rounded-sm p-10 flex flex-col justify-between"
          >
            <div>
              <MapPin className="w-8 h-8 text-gold mb-6" />
              <h3 className="font-display text-3xl mb-4">Our Address</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                3rd Floor, Jirat Road<br />
                Near Chowrangee More<br />
                Ashoknagar Kalyangarh<br />
                West Bengal 743222
              </p>
              <p className="text-sm text-gold/80 italic font-display">
                Look up — you'll see our string lights from the street.
              </p>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.25em] text-gold border border-gold/40 px-5 py-3 rounded-full hover:bg-gold hover:text-primary-foreground transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3 rounded-sm overflow-hidden border border-border min-h-[420px] shadow-warm"
          >
            <iframe
              title="ONESKY Cafe location on Google Maps"
              src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
              className="w-full h-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: "invert(0.9) hue-rotate(180deg) saturate(0.7) brightness(0.95)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}