import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CalendarDays, Clock, Users, User, Phone } from "lucide-react";

const PHONE = "918250086507";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[+\d\s-]+$/, "Only digits, spaces, + and - allowed"),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
  guests: z.coerce.number().int().min(1, "At least 1 guest").max(30, "Max 30 guests"),
});

export function Booking() {
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      date: fd.get("date"),
      time: fd.get("time"),
      guests: fd.get("guests"),
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    const { name, phone, date, time, guests } = parsed.data;
    const msg = `Hello ONESKY CAFE! I want to book a table. Name: ${name}, Phone: ${phone}, Date: ${date}, Time: ${time}, Guests: ${guests}`;
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="book" className="py-28 md:py-40 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.22_0.05_60)_0%,transparent_60%)] opacity-50 pointer-events-none" />
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Reservations</p>
          <h2 className="font-display text-4xl md:text-6xl mb-4">
            Reserve a <span className="italic text-gradient-gold">table</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Send us your details and we'll confirm your seat under the stars on WhatsApp.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={onSubmit}
          className="bg-card/60 border border-border rounded-sm p-8 md:p-12 backdrop-blur-sm shadow-warm"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Field icon={<User className="w-4 h-4" />} label="Name">
              <input
                name="name"
                required
                maxLength={80}
                placeholder="Your full name"
                className="bg-transparent w-full outline-none text-foreground placeholder:text-muted-foreground/60 py-2"
              />
            </Field>

            <Field icon={<Phone className="w-4 h-4" />} label="Phone">
              <input
                name="phone"
                required
                inputMode="tel"
                maxLength={20}
                placeholder="+91 ..."
                className="bg-transparent w-full outline-none text-foreground placeholder:text-muted-foreground/60 py-2"
              />
            </Field>

            <Field icon={<CalendarDays className="w-4 h-4" />} label="Date">
              <input
                name="date"
                type="date"
                required
                min={today}
                className="bg-transparent w-full outline-none text-foreground py-2 [color-scheme:dark]"
              />
            </Field>

            <Field icon={<Clock className="w-4 h-4" />} label="Time">
              <input
                name="time"
                type="time"
                required
                min="14:00"
                max="22:30"
                defaultValue="19:00"
                className="bg-transparent w-full outline-none text-foreground py-2 [color-scheme:dark]"
              />
            </Field>

            <div className="md:col-span-2">
              <Field icon={<Users className="w-4 h-4" />} label="Number of Guests">
                <input
                  name="guests"
                  type="number"
                  required
                  min={1}
                  max={30}
                  defaultValue={2}
                  className="bg-transparent w-full outline-none text-foreground py-2"
                />
              </Field>
            </div>
          </div>

          {error && (
            <p className="mt-6 text-sm text-destructive tracking-wide">{error}</p>
          )}

          <div className="mt-10 flex flex-col items-center gap-3">
            <button
              type="submit"
              className="group relative overflow-hidden bg-gradient-gold text-primary-foreground px-12 py-4 rounded-full text-sm uppercase tracking-[0.25em] font-medium shadow-glow hover:shadow-warm transition-all duration-500 hover:scale-105"
            >
              Book Now
            </button>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              Opens WhatsApp to confirm
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block group">
      <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-2">
        {icon}
        {label}
      </span>
      <div className="border-b border-border group-focus-within:border-gold transition-colors">
        {children}
      </div>
    </label>
  );
}
