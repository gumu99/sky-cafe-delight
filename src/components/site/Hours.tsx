import { motion } from "framer-motion";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export function Hours() {
  return (
    <section id="hours" className="relative py-28 md:py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-ember pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Opening Hours</p>
        <h2 className="font-display text-4xl md:text-6xl mb-10">
          We're open <span className="italic text-gradient-gold">every evening</span>
        </h2>

        <div className="border border-gold/30 rounded-sm bg-card/40 backdrop-blur-sm p-10 md:p-14 shadow-warm">
          <div className="font-display text-5xl md:text-7xl text-gradient-gold mb-2 tracking-wide">
            2:00 PM — 10:30 PM
          </div>
          <p className="text-muted-foreground uppercase tracking-[0.3em] text-xs">7 days a week</p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-7 gap-2 text-xs uppercase tracking-wider">
            {days.map((d) => (
              <div
                key={d}
                className="border border-border/60 py-3 rounded-sm text-muted-foreground hover:border-gold/50 hover:text-gold transition-colors"
              >
                {d.slice(0, 3)}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}