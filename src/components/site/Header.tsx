import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const nav = [
  {
    label: "Piscinas",
    items: [
      {
        label: "Piscina lista para disfrutar",
        desc: "Oferta principal con instalación guiada.",
        href: "/piscina-lista-para-disfrutar",
      },
      {
        label: "Piscinas instaladas",
        desc: "Casco directo de fábrica y colocación.",
        href: "/piscinas-de-fibra",
      },
      { label: "Jacuzzi / Spa", desc: "Relax y bienestar todo el año.", href: "/jacuzzi-spa" },
      { label: "Climatización", desc: "Disfrutá la temporada extendida.", href: "/climatizacion" },
    ],
  },
  { label: "Obras", href: "/obras", items: null },
  { label: "Empresa", href: "/#contacto", items: null },
  { label: "Contacto", href: "/#contacto", items: null },
];

export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const isSolid = solid || scrolled || mobile;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolid ? "glass border-b border-border/60 shadow-[var(--shadow-glass)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="/" className="flex items-center">
          <img
            src="/logo FYE Piscinas.png"
            alt="FYE Piscinas"
            className={`h-10 w-auto transition-all md:h-12 ${
              isSolid ? "drop-shadow-none" : "brightness-0 invert drop-shadow-md"
            }`}
            width={186}
            height={125}
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <div
              key={n.label}
              className="relative"
              onMouseEnter={() => n.items && setOpen(n.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <a
                href={n.href ?? "/#servicios"}
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isSolid
                    ? "text-foreground/80 hover:text-foreground hover:bg-secondary"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {n.label}
                {n.items && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
              </a>
              <AnimatePresence>
                {n.items && open === n.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full w-[360px] -translate-x-1/2 pt-3"
                  >
                    <div className="rounded-2xl border border-border bg-popover p-2 shadow-[var(--shadow-lift)]">
                      {n.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block rounded-xl px-4 py-3 transition-colors hover:bg-secondary"
                        >
                          <div className="text-sm font-semibold text-foreground">{item.label}</div>
                          <div className="text-xs text-muted-foreground">{item.desc}</div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/diagnostico?origen=header"
            className={`hidden rounded-full px-4 py-2 text-sm font-medium transition-all md:inline-flex ${
              isSolid
                ? "border border-border text-foreground hover:bg-secondary"
                : "border border-white/30 text-white hover:bg-white/10"
            }`}
          >
            Aplicar a diagnóstico
          </a>
          <button
            onClick={() => setMobile((value) => !value)}
            className={`grid h-10 w-10 place-items-center rounded-md lg:hidden ${
              isSolid ? "text-foreground" : "text-white"
            }`}
            aria-label={mobile ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobile}
          >
            {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile && (
          <>
            <motion.button
              type="button"
              aria-label="Cerrar menú"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-x-0 top-16 bottom-0 z-40 bg-primary/20 backdrop-blur-sm md:top-20 lg:hidden"
              onClick={() => setMobile(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full z-50 max-h-[calc(100svh-4rem)] overflow-y-auto border-y border-border bg-background/96 px-5 py-4 shadow-[var(--shadow-lift)] backdrop-blur-xl md:max-h-[calc(100svh-5rem)] lg:hidden"
            >
              <div className="mx-auto max-w-7xl space-y-1">
                {nav.map((n) =>
                  n.items ? (
                    <div key={n.label} className="rounded-2xl bg-secondary/70 p-2">
                      <div className="px-2 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {n.label}
                      </div>
                      <div className="grid gap-1">
                        {n.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobile(false)}
                            className="rounded-xl px-3 py-3 transition-colors active:bg-white"
                          >
                            <div className="text-sm font-semibold text-foreground">{item.label}</div>
                            <div className="mt-0.5 text-xs leading-snug text-muted-foreground">
                              {item.desc}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      key={n.label}
                      href={n.href ?? "/#servicios"}
                      onClick={() => setMobile(false)}
                      className="block rounded-2xl px-4 py-3 text-base font-semibold transition-colors active:bg-secondary"
                    >
                      {n.label}
                    </a>
                  ),
                )}
                <a
                  href="/diagnostico?origen=header-mobile"
                  onClick={() => setMobile(false)}
                  className="mt-3 flex items-center justify-center rounded-full bg-aqua px-5 py-3 text-sm font-semibold text-primary"
                >
                  Aplicar a diagnóstico
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
