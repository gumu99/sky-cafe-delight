import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g2 from "@/assets/gallery-2.jpg";

const items = [
  { src: g4, alt: "Rooftop seating under string lights at night", span: "md:col-span-2 md:row-span-2 h-[420px] md:h-full" },
  { src: g1, alt: "Latte with delicate art on a dark table", span: "h-[200px]" },
  { src: g3, alt: "Espresso pouring into a glass cup", span: "h-[200px]" },
  { src: g6, alt: "Friends laughing at a candlelit rooftop table", span: "h-[200px]" },
  { src: g5, alt: "Pasta and burger plated for sharing", span: "h-[200px]" },
  { src: g2, alt: "Warm Edison bulbs glowing in the corner", span: "md:col-span-2 h-[260px]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-28 md:py-40 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Moments</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Glimpses of our <span className="italic text-gradient-gold">evenings</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:auto-rows-[200px]">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-sm group ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}