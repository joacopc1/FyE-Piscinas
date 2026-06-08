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
  const isSolid = solid || scrolled;

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
            onClick={() => setMobile(true)}
            className={`grid h-10 w-10 place-items-center rounded-md lg:hidden ${
              isSolid ? "text-foreground" : "text-white"
            }`}
            aria-label="Abrir menú"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <img
                src="/logo FYE Piscinas.png"
                alt="FYE Piscinas"
                className="h-10 w-auto"
                width={186}
                height={125}
              />
              <button onClick={() => setMobile(false)} aria-label="Cerrar menú">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-1 p-5">
              {nav.map((n) => (
                <a
                  key={n.label}
                  href={n.href ?? "/#servicios"}
                  className="block border-b border-border py-4 text-lg font-medium"
                >
                  {n.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-6">
                <a
                  href="/diagnostico?origen=header-mobile"
                  className="rounded-full border border-border py-3 text-center text-sm font-semibold"
                >
                  Aplicar a diagnóstico
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
