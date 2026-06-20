import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";

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
      {
        label: "Climatización",
        desc: "Disfrutá la temporada extendida.",
        href: "/climatizacion",
      },
      {
        label: "Equipamiento y Accesorios",
        desc: "Cascadas, luces, timer y mantas.",
        href: "/equipamiento-accesorios",
      },
      {
        label: "Jardinería y Entornos",
        desc: "Césped natural, muros y cascadas.",
        href: "/jardin-y-entornos",
      },
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
        <Link to="/" className="flex items-center">
          <img
            src="/logo FYE Piscinas.png"
            alt="FYE Piscinas"
            className={`h-10 w-auto transition-all md:h-12 ${
              isSolid ? "drop-shadow-none" : "brightness-0 invert drop-shadow-md"
            }`}
            width={186}
            height={125}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <div
              key={n.label}
              className="relative"
              onMouseEnter={() => n.items && setOpen(n.label)}
              onMouseLeave={() => setOpen(null)}
            >
              {n.href && !n.href.includes("#") ? (
                <Link
                  to={n.href}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isSolid
                      ? "text-foreground/80 hover:text-foreground hover:bg-secondary"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {n.label}
                  {n.items && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
                </Link>
              ) : (
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
              )}
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
                        <Link
                          key={item.label}
                          to={item.href}
                          className="block rounded-xl px-4 py-3 transition-colors hover:bg-secondary"
                        >
                          <div className="text-sm font-semibold text-foreground">{item.label}</div>
                          <div className="text-xs text-muted-foreground">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/diagnostico"
            search={{ origen: "header" }}
            className={`hidden rounded-full px-4 py-2 text-sm font-medium transition-all md:inline-flex ${
              isSolid
                ? "border border-border text-foreground hover:bg-secondary"
                : "border border-white/30 text-white hover:bg-white/10"
            }`}
          >
            Aplicar a diagnóstico
          </Link>
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px] lg:hidden"
              onClick={() => setMobile(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-5 top-[calc(100%+8px)] z-50 w-[min(20rem,calc(100vw-2.5rem))] origin-top-right rounded-2xl border border-border bg-background/96 p-3 shadow-[var(--shadow-lift)] backdrop-blur-xl lg:hidden"
            >
              <div className="space-y-1.5">
                {nav.map((n) =>
                  n.items ? (
                    <div key={n.label} className="rounded-xl bg-secondary/60 p-2">
                      <div className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/80">
                        {n.label}
                      </div>
                      <div className="grid gap-0.5">
                        {n.items.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={() => setMobile(false)}
                            className="rounded-lg px-2.5 py-1.5 transition-colors active:bg-white/80"
                          >
                            <div className="text-xs font-semibold text-foreground">{item.label}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    n.href && !n.href.includes("#") ? (
                      <Link
                        key={n.label}
                        to={n.href}
                        onClick={() => setMobile(false)}
                        className="block rounded-xl px-3 py-2 text-sm font-semibold transition-colors active:bg-secondary"
                      >
                        {n.label}
                      </Link>
                    ) : (
                      <a
                        key={n.label}
                        href={n.href ?? "/#servicios"}
                        onClick={() => setMobile(false)}
                        className="block rounded-xl px-3 py-2 text-sm font-semibold transition-colors active:bg-secondary"
                      >
                        {n.label}
                      </a>
                    )
                  ),
                )}
                <Link
                  to="/diagnostico"
                  search={{ origen: "header-mobile" }}
                  onClick={() => setMobile(false)}
                  className="mt-2 flex items-center justify-center rounded-full bg-aqua px-4 py-2.5 text-xs font-semibold text-primary"
                >
                  Aplicar a diagnóstico
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
