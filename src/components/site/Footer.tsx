import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-14 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <div className="font-display text-2xl tracking-[0.25em] text-gold mb-2">ONESKY</div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Where the sky meets your coffee
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Follow ONESKY on Instagram"
            className="w-11 h-11 grid place-items-center border border-gold/30 rounded-full text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Follow ONESKY on Facebook"
            className="w-11 h-11 grid place-items-center border border-gold/30 rounded-full text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        <div className="text-xs uppercase tracking-widest text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} ONESKY Cafe<br />
          Ashoknagar · West Bengal
        </div>
      </div>
    </footer>
  );
}