import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Check,
  Plus,
  Minus,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { useRef, useState } from "react";

import { Header } from "@/components/site/Header";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Footer } from "@/components/site/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { whatsappMessages, whatsappUrl } from "@/lib/contact";

import heroPool from "@/assets/hero-pool.jpg";
import serviceSpa from "@/assets/service-spa.jpg";
import serviceClimate from "@/assets/service-climate.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const HERO_VIDEO_SRC = "/9044153-hd_720_1280_30fps.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FYE Piscinas — Tu piscina lista para disfrutar" },
      {
        name: "description",
        content:
          "Diseñamos, instalamos y acompañamos tu proyecto de piscina. Casco directo de fábrica, colocación completa y servicios complementarios en Uruguay.",
      },
      { property: "og:title", content: "FYE Piscinas — Tu piscina lista para disfrutar" },
      {
        property: "og:description",
        content: "Un proyecto claro de principio a fin. Comprá con confianza y disfrutá tu casa.",
      },
      { property: "og:image", content: heroPool },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <Hero />
      <Pains />
      <OfferStack />
      <Services />
      <Process />
      <Works />
      <Contact />
      <Faq />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-deep">
      {/* Background video with parallax + slow zoom */}
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <HeroVideo src={HERO_VIDEO_SRC} />
        {/* Cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/12 to-black/78 md:from-black/34 md:via-black/10 md:to-black/50" />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center pt-28 text-center md:pt-36"
      >
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl -translate-y-2 md:-translate-y-4">
            <h1 className="mt-6 font-[var(--font-hero)] text-3xl font-medium leading-[1.05] tracking-[-0.035em] text-balance text-white drop-shadow-[0_18px_42px_rgba(0,0,0,0.32)] sm:text-4xl lg:text-5xl">
              <motion.span
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Tu piscina lista para disfrutar.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Tu casa, más viva todo el año.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mx-auto mt-5 max-w-4xl text-base font-normal leading-relaxed text-white/84 md:text-lg"
            >
              <span className="block md:whitespace-nowrap">
                Elegí la piscina adecuada para tu casa; nosotros ordenamos el proyecto completo.
              </span>
              <span className="block md:whitespace-nowrap">
                Casco directo de fábrica, instalación clara y acompañamiento para no comprar a ciegas.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <a
                href="#servicios"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-[var(--shadow-lift)] transition-all hover:-translate-y-0.5 hover:bg-aqua"
              >
                Ver piscinas y servicios
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
              </a>
              <a
                href={whatsappUrl(whatsappMessages.home)}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15"
              >
                <MessageCircle className="h-4 w-4" />
                Consultar por WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mx-auto mt-6 flex max-w-lg flex-wrap items-center justify-center gap-4 border-t border-white/12 pt-4 md:gap-6"
              aria-label="Prueba social de FYE Piscinas"
            >
              <HeroStat value="+120" label="Proyectos" />
              <span className="hidden h-6 w-px bg-white/15 sm:block" />
              <HeroStat value="12 años" label="Trayectoria" />
              <span className="hidden h-6 w-px bg-white/15 sm:block" />
              <HeroStat value="98%" label="Satisfacción" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-lg leading-none text-white md:text-xl">{value}</span>
      <span className="mt-1 text-[9px] uppercase tracking-[0.22em] text-white/55">{label}</span>
    </div>
  );
}

/* ---------------- PAINS ---------------- */
function Pains() {
  const items = [
    {
      n: "01",
      title: "No saber qué modelo elegir",
      body: "Tamaños, materiales, profundidad, terminaciones. Te ayudamos a comparar opciones reales para tu casa.",
    },
    {
      n: "02",
      title: "Miedo a costos y sorpresas",
      body: "Presupuestos cerrados, etapas claras y todo el alcance documentado antes de empezar.",
    },
    {
      n: "03",
      title: "Dudas sobre instalación y puesta en marcha",
      body: "Un cronograma realista, equipo propio y acompañamiento durante el primer uso.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-medium leading-[1.08] md:text-5xl">
            Comprar una piscina no debería ser una apuesta.
          </h2>
        </div>
      </Reveal>

      <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map((it) => (
          <StaggerItem
            key={it.n}
            className="group relative rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
          >
            <span className="font-display text-5xl text-aqua/30">{it.n}</span>
            <h3 className="mt-4 text-xl font-semibold text-foreground">{it.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

/* ---------------- OFFER STACK ---------------- */
function OfferStack() {
  const stack = [
    { type: "core", title: "Orientación inicial en menos de 24 horas" },
    { type: "core", title: "Recomendación de modelo y terminaciones" },
    { type: "core", title: "Plan de instalación con tiempos claros" },
    { type: "core", title: "Flete y coordinación de llegada" },
    { type: "core", title: "Bomba, filtro y caseta contemplados" },
    { type: "core", title: "Vereda perimetral y terminaciones acordadas" },
    { type: "core", title: "Puesta en marcha y acompañamiento inicial" },
    { type: "bonus", title: "Guía de primera temporada" },
    { type: "bonus", title: "Revisión post-instalación" },
    { type: "bonus", title: "Recomendación de accesorios según tu piscina" },
  ];
  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 text-foreground md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-soft)]">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="relative min-h-[440px] overflow-hidden lg:min-h-[620px] h-full">
            <img
              src={work2}
              alt="Familia disfrutando una piscina instalada en casa"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/86 via-primary/18 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
              <h2 className="max-w-sm font-display text-3xl font-medium leading-[1.02] md:max-w-xl md:text-5xl">
                Piscina lista para disfrutar.
                <span className="hidden text-aqua md:block">Sin comprar a ciegas.</span>
              </h2>
              <p className="mt-5 hidden max-w-xl text-base leading-relaxed text-white/84 md:block">
                Una propuesta para elegir bien, coordinar flete, colocación, vereda perimetral,
                caseta, bomba, filtro y llegar al primer uso con acompañamiento real.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="h-full flex flex-col justify-center p-7 md:p-10 lg:p-12">
            <div className="grid gap-3 sm:grid-cols-3">
              {["Elección guiada", "Instalación completa", "Postventa inicial"].map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-white p-4">
                  <div className="h-1.5 w-8 rounded-full bg-aqua" />
                  <div className="mt-3 text-sm font-semibold leading-tight">{item}</div>
                </div>
              ))}
            </div>

            <h3 className="mt-8 font-display text-2xl font-medium leading-tight md:text-3xl">
              Qué te llevás con la propuesta.
            </h3>
            <ul className="mt-6 space-y-3">
              {stack.map((s) => (
                <li key={s.title} className="flex items-center gap-3 text-sm font-semibold">
                  {s.type === "bonus" ? (
                    <span className="grid h-7 w-7 flex-none place-items-center text-base">
                      🎁
                    </span>
                  ) : (
                    <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-aqua text-primary">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                  )}
                  <span>{s.title}</span>
                </li>
              ))}
            </ul>

            <a
              href="/piscina-lista-para-disfrutar"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-aqua px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Conocer la propuesta
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    {
      title: "Jacuzzi / Spa",
      body: "Un complemento de confort para transformar el exterior en un espacio de relax durante todo el año.",
      img: serviceSpa,
      href: "/jacuzzi-spa",
      external: false,
    },
    {
      title: "Climatización",
      body: "Un upgrade para extender la temporada y hacer que la piscina se use más meses, no solo en verano.",
      img: serviceClimate,
      href: "/climatizacion",
      external: false,
    },
  ];

  return (
    <section id="servicios" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-medium leading-[1.08] md:text-5xl">
              Servicios complementarios para potenciar tu piscina.
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-8 md:grid-cols-2">
          {services.map((s, index) => (
            <StaggerItem
              key={s.title}
              className="card group relative min-h-[390px] cursor-pointer overflow-hidden rounded-3xl bg-secondary transition-transform active:scale-[0.985]"
            >
              <a
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener" : undefined}
                aria-label={`Explorar ${s.title}`}
                className="absolute inset-0 z-10"
              />
              <img
                src={s.img}
                alt={s.title}
                loading={index < 2 ? "eager" : "lazy"}
                className="touch-image-zoom absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="touch-overlay-strong absolute inset-0 bg-gradient-to-t from-primary/92 via-primary/24 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-8">
                <h3 className="touch-title-lift font-display text-3xl font-medium leading-none tracking-[-0.02em] transition-transform duration-500 group-hover:-translate-y-2">
                  {s.title}
                </h3>
                <p className="reveal-on-hover touch-reveal max-h-0 max-w-md translate-y-3 overflow-hidden text-sm leading-relaxed text-white/86 opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-28 group-hover:translate-y-0 group-hover:opacity-100">
                  {s.body}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Explorar
                  <ArrowRight className="touch-arrow-nudge h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    {
      n: "01",
      title: "Consulta",
      body: "Conversamos sobre tu casa, tus tiempos y tus expectativas.",
    },
    {
      n: "02",
      title: "Recomendación",
      body: "Te presentamos modelo, materiales y presupuesto cerrado.",
    },
    {
      n: "03",
      title: "Instalación",
      body: "Coordinamos cronograma y ejecutamos con equipo propio.",
    },
    {
      n: "04",
      title: "Acompañamiento",
      body: "Te guiamos durante tu primera temporada y postventa.",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-medium leading-[1.08] md:text-5xl">
              Cuatro pasos. Cero improvisación.
            </h2>
          </div>
        </Reveal>

        <StaggerGroup stagger={0.12} className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <StaggerItem
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-3xl font-medium text-primary">{s.n}</span>
                {i < steps.length - 1 && <ArrowRight className="h-4 w-4 text-aqua opacity-60" />}
              </div>
              <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------------- WORKS ---------------- */
function Works() {
  const works = [
    {
      img: work1,
      title: "Residencia familiar",
      tag: "Casco + instalación completa",
    },
    {
      img: work2,
      title: "Casa de verano",
      tag: "Antes / colocación / resultado",
    },
    {
      img: work3,
      title: "Jardín con vista",
      tag: "Piscina + entorno exterior",
    },
  ];

  return (
    <section id="obras" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-medium leading-[1.08] md:text-5xl">
                Proyectos que ya están disfrutándose.
              </h2>
            </div>
            <a href="/obras" className="text-sm font-semibold text-primary hover:text-aqua">
              Ver todas las obras →
            </a>
          </div>
        </Reveal>

        <StaggerGroup className="mt-10 grid auto-rows-[260px] gap-6 md:grid-cols-3 md:auto-rows-[280px]">
          {works.map((w, i) => (
            <StaggerItem
              key={w.title}
              className={`card group relative cursor-pointer overflow-hidden rounded-3xl transition-transform active:scale-[0.985] ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={w.img}
                alt={w.title}
                loading="lazy"
                className="touch-image-zoom absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="touch-overlay-strong absolute inset-0 bg-gradient-to-t from-primary/84 via-primary/18 to-transparent opacity-65 transition-opacity duration-500 group-hover:opacity-86" />
              <div className="absolute bottom-0 left-0 p-6 text-white md:p-8">
                <span className="inline-flex rounded-full bg-white/18 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  {w.tag}
                </span>
                <h3 className="mt-3 font-display text-2xl font-medium leading-tight md:text-3xl">
                  {w.title}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const details = [
    { icon: MapPin, title: "Ubicación", body: "Montevideo, Uruguay. Consultá cobertura por zona." },
    { icon: Phone, title: "WhatsApp", body: "+598 99 000 000" },
    { icon: Mail, title: "Email", body: "hola@fyepiscinas.uy" },
    { icon: Clock, title: "Horario", body: "Lunes a viernes, 9:00 a 18:00" },
  ];

  return (
    <section id="contacto" className="bg-white py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <Reveal>
          <div>
            <h2 className="font-display text-4xl font-medium leading-[1.08] md:text-5xl">
              Hablemos de tu proyecto.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Contanos qué querés construir, mejorar o equipar. Te orientamos hacia el siguiente
              paso correcto: servicio, catálogo, diagnóstico o WhatsApp.
            </p>

            <div className="mt-8 grid gap-3">
              {details.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl border border-border p-4"
                >
                  <item.icon className="mt-0.5 h-5 w-5 flex-none text-aqua" strokeWidth={1.8} />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{item.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title="Ubicación FYE Piscinas"
              src="https://www.google.com/maps?q=FYE%20Piscinas%20Uruguay&output=embed"
              className="h-[360px] w-full border-0 md:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const faqs = [
    {
      q: "¿Trabajan en todo el país?",
      a: "Cubrimos Montevideo, Canelones, Maldonado y zonas vecinas. Consultanos por otras localidades.",
    },
    {
      q: "¿Cuánto demora la instalación?",
      a: "Según Roberto, una vez que el casco llega al lugar, la instalación puede resolverse en pocos días si el terreno y el acceso están en condiciones.",
    },
    {
      q: "¿Dan garantía?",
      a: "Sí. FYE comunica 10 años de garantía en el casco y acompañamiento posterior. Las condiciones exactas se confirman antes de avanzar.",
    },
    {
      q: "¿Puedo pagar en cuotas?",
      a: "Trabajamos con planes a medida según el alcance del proyecto.",
    },
  ];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-4xl px-5 py-14 md:px-8 md:py-20">
      <Reveal>
        <div className="text-center">
          <h2 className="font-display text-4xl font-medium leading-[1.08] md:text-5xl">
            Preguntas frecuentes.
          </h2>
        </div>
      </Reveal>

      <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-secondary/60"
            >
              <span className="font-semibold text-foreground">{f.q}</span>
              {open === i ? (
                <Minus className="h-4 w-4 flex-none text-aqua" />
              ) : (
                <Plus className="h-4 w-4 flex-none text-aqua" />
              )}
            </button>
            <motion.div
              initial={false}
              animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section
      id="diagnostico"
      className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua/30 blur-[140px]" />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-medium leading-[1.08] text-balance md:text-6xl">
            ¿Ya tenés una idea?
            <span className="block text-aqua">Pedí una recomendación.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/75">
            Te respondemos rápido con una propuesta concreta y sin compromiso.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico?origen=home-final"
              className="inline-flex items-center gap-2 rounded-full bg-aqua px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Aplicar a diagnóstico
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappUrl(whatsappMessages.home)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/15"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp directo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


