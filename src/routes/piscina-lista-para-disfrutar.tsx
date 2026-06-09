import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Compass,
  FileText,
  Gift,
  HandHeart,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Header } from "@/components/site/Header";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const OFFER_HERO_IMAGE = "/pexels-mia-dalisay-594958-27853288.jpg";

export const Route = createFileRoute("/piscina-lista-para-disfrutar")({
  head: () => ({
    meta: [
      { title: "Piscina Lista para Disfrutar — FYE Piscinas" },
      {
        name: "description",
        content:
          "Una propuesta integral de FYE Piscinas: casco directo de fábrica, instalación completa, puesta en marcha, garantía y acompañamiento para comprar tu piscina con claridad.",
      },
      { property: "og:title", content: "Piscina Lista para Disfrutar — FYE Piscinas" },
      {
        property: "og:description",
        content:
          "Elegí, instalá y estrená tu piscina con un proceso claro, 10 años en el casco y acompañamiento de principio a fin.",
      },
      { property: "og:image", content: OFFER_HERO_IMAGE },
    ],
  }),
  component: OfferPage,
});

function OfferPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <OfferHero />
      <Promise />
      <OfferValue />
      <Method />
      <Guarantees />
      <Scarcity />
      <Works />
      <Faq />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function OfferHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-deep">
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <img
          src={OFFER_HERO_IMAGE}
          alt="Piscina lista para disfrutar en una casa con jardín"
          className="h-full w-full object-cover object-center md:object-[center_64%]"
          width={1536}
          height={2048}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/44 via-black/12 to-black/82 md:from-black/36 md:via-black/10 md:to-black/58" />
      </motion.div>

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
                Instalá la piscina correcta.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Sin comprar a ciegas.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mx-auto mt-5 max-w-3xl text-base font-normal leading-relaxed text-white/84 md:text-lg"
            >
              Te ayudamos a elegir modelo, alcance y próximos pasos antes de invertir: opciones
              claras, instalación acompañada, puesta en marcha y respaldo real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <a
                href="/diagnostico?origen=oferta-principal&servicio=piscina-instalada"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-[var(--shadow-lift)] transition-all hover:-translate-y-0.5 hover:bg-aqua"
              >
                Ordenar mi proyecto
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
              </a>
              <a
                href="#incluye"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15"
              >
                Ver qué incluye
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mx-auto mt-6 flex max-w-lg flex-wrap items-center justify-center gap-4 border-t border-white/12 pt-4 text-white md:gap-6"
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

function Method() {
  const steps = [
    {
      n: "01",
      title: "Consulta",
      body: "Conversamos sobre tu casa, tus expectativas, localidad, tamaño y acceso al lugar.",
    },
    {
      n: "02",
      title: "Recomendación",
      body: "Te mostramos opciones concretas según espacio, presupuesto, uso y cuidados iniciales.",
    },
    {
      n: "03",
      title: "Instalación",
      body: "Coordinamos fecha, traslado, trabajo en el lugar y ejecución con tiempos claros.",
    },
    {
      n: "04",
      title: "Acompañamiento",
      body: "Ponemos la piscina en marcha y te guiamos en el primer uso y cuidados iniciales.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
              Un proceso pensado para que entiendas todo antes de avanzar.
            </h2>
          </div>
        </Reveal>

        <StaggerGroup stagger={0.12} className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

function Promise() {
  const pillars = [
    {
      icon: Target,
      title: "Tu piscina lista para disfrutar en casa",
      body: "No se trata solo de comprar una piscina: se trata de crear un espacio para disfrutar más tu casa.",
    },
    {
      icon: TrendingUp,
      title: "Más confianza para lograrlo",
      body: "Opciones claras, obras reales, 10 años en el casco y acompañamiento antes de avanzar.",
    },
    {
      icon: Timer,
      title: "Menos espera percibida",
      body: "Desde la primera consulta sabés qué datos hacen falta, qué camino conviene y cuál es el próximo paso.",
    },
    {
      icon: HandHeart,
      title: "Menos esfuerzo para el cliente",
      body: "Vos tomás decisiones con claridad; FYE ordena la instalación, la puesta en marcha y el soporte inicial.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
      <Reveal>
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
            Una propuesta pensada para que digas que sí con confianza.
          </h2>
        </div>
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <StaggerItem
            key={p.title}
            className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-aqua/15 text-primary">
              <p.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-medium leading-snug">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

function OfferValue() {
  const includes = [
    "Consulta inicial y evaluación de tu proyecto",
    "Recomendación del modelo según uso, espacio y presupuesto",
    "Casco de piscina directo de fábrica",
    "Flete y coordinación de llegada al lugar",
    "Colocación e instalación completa",
    "Bomba, filtro, caseta y mano de obra",
    "Vereda perimetral y terminaciones acordadas",
    "Puesta en marcha y primera orientación de uso",
    "Acompañamiento postventa inicial",
    "Garantía de 10 años en el casco",
  ];

  const bonuses = [
    "Guía de primera temporada",
    "Checklist de preparación previa",
    "Revisión post-instalación",
    "Soporte directo por WhatsApp",
  ];

  return (
    <section id="incluye" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
      <Reveal>
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
            Piscina Lista para Disfrutar.
          </h2>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <Reveal className="h-full">
          <div className="h-full overflow-hidden rounded-3xl">
            <img
              src={work2}
              alt="Familia disfrutando una piscina instalada"
              loading="lazy"
              className="h-full min-h-[420px] w-full object-cover md:min-h-[520px] lg:min-h-0"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-card p-7 shadow-[var(--shadow-lift)] md:p-9">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-aqua/15 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-3xl font-medium leading-tight md:text-4xl">
                Qué incluye la propuesta
              </h3>

              <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
                {includes.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-aqua text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/90">{s}</span>
                  </li>
                ))}
                {bonuses.map((bonus) => (
                  <li key={bonus} className="flex items-start gap-3 text-sm">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 flex-none place-items-center text-base leading-none"
                    >
                      🎁
                    </span>
                    <span className="text-foreground/90">{bonus}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <Pill icon={Gift} label="Regalos gratis" />
                <Pill icon={ShieldCheck} label="10 años en el casco" />
                <Pill icon={CalendarDays} label="4 proyectos por mes" />
              </div>

              <a
                href="/diagnostico?origen=oferta-principal&servicio=piscina-instalada"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-aqua px-6 py-4 text-sm font-semibold text-primary shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                Quiero ordenar mi proyecto
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Consulta sin compromiso · Te respondemos por WhatsApp
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pill({ icon: Icon, label }: { icon: typeof Gift; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2.5">
      <Icon className="h-4 w-4 text-aqua" />
      <span className="text-xs font-medium text-foreground/85">{label}</span>
    </div>
  );
}

function Guarantees() {
  const items = [
    { icon: FileText, title: "Alcance explicado antes de avanzar" },
    { icon: Compass, title: "Recomendación según tu casa, no genérica" },
    { icon: ShieldCheck, title: "10 años de garantía en el casco" },
    { icon: Clock, title: "Soporte directo en la primera etapa" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl bg-deep p-9 text-primary-foreground md:p-11">
            <img
              src={work1}
              alt="Piscina terminada con agua cristalina"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-78"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/86 via-black/42 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/16 to-transparent" />
            <div className="relative">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua text-primary">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <div className="mt-7 font-display text-[7rem] font-medium leading-none text-aqua">
                10
              </div>
              <div className="mt-1 font-display text-2xl">años en el casco</div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
                La oferta tiene que reducir riesgo. Por eso el respaldo, la claridad del alcance y
                la comunicación posterior son parte central del proyecto.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
            Si vos no estás tranquilo,
            <span className="block">nosotros tampoco.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Antes de avanzar, la idea es que entiendas qué estás comprando, qué incluye la
            instalación, qué respaldo tenés y cómo se acompaña la primera etapa de uso.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map((it) => (
              <li
                key={it.title}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
              >
                <span className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-aqua/15 text-primary">
                  <it.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium leading-snug text-foreground/90">
                  {it.title}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Scarcity() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
              Solo tomamos
              <span className="block text-aqua">4 proyectos por mes.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              La agenda se organiza con pocos proyectos activos para cuidar la calidad de cada
              instalación, coordinar bien los tiempos y acompañar a cada familia como corresponde.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/diagnostico?origen=cupos-oferta&servicio=piscina-instalada"
                className="inline-flex items-center gap-2 rounded-full bg-aqua px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                Consultar disponibilidad
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] md:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                Cupos del mes
              </div>

              <div className="mt-6 grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((n, i) => {
                  const taken = i < 3;
                  return (
                    <div
                      key={n}
                      className={`flex aspect-square flex-col items-center justify-center rounded-2xl border text-xs font-semibold ${
                        taken
                          ? "border-border bg-secondary/60 text-muted-foreground line-through"
                          : "border-aqua/50 bg-aqua/15 text-primary"
                      }`}
                    >
                      <span className="font-display text-2xl">0{n}</span>
                      <span className="mt-1 text-[9px] uppercase tracking-wider">
                        {taken ? "Tomado" : "Libre"}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm">
                <CalendarDays className="h-4 w-4 text-aqua" />
                <span className="text-foreground/85">
                  Queda <span className="font-semibold">1 cupo</span> disponible este mes.
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                La disponibilidad final se confirma por WhatsApp según zona, acceso y fecha.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

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
      tag: "Instalación + puesta en marcha",
    },
    {
      img: work3,
      title: "Jardín con vista",
      tag: "Terminaciones + acompañamiento",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
      <Reveal>
        <div className="max-w-full">
          <h2 className="font-display text-4xl font-medium leading-tight md:whitespace-nowrap md:text-5xl">
            Familias que ya tienen su piscina lista.
          </h2>
        </div>
      </Reveal>

      <StaggerGroup className="mt-12 grid auto-rows-[260px] gap-6 md:grid-cols-3 md:auto-rows-[280px]">
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
              <h3 className="font-display text-2xl font-medium leading-tight md:text-3xl">
                {w.title}
              </h3>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

function Faq() {
  const faqs = [
    {
      q: "¿Cómo sé qué piscina me conviene?",
      a: "Te ayudamos a definirlo en la consulta inicial. Analizamos tu espacio, el uso que le vas a dar, la localidad, el acceso y tu presupuesto antes de recomendar una opción.",
    },
    {
      q: "¿La instalación está incluida?",
      a: "Sí. La propuesta busca contemplar instalación, coordinación, flete, mano de obra, bomba, filtro, caseta y terminaciones acordadas. El alcance final se confirma antes de avanzar.",
    },
    {
      q: "¿Cuánto demora el proceso?",
      a: "Depende de la agenda, zona y proyecto. Una vez que la piscina llega al lugar, la instalación puede resolverse en pocos días según las condiciones del terreno.",
    },
    {
      q: "¿Qué significa puesta en marcha?",
      a: "Es la primera orientación para dejar la piscina operativa, explicar cuidados iniciales y ordenar dudas después de instalada.",
    },
    {
      q: "¿Tienen garantía?",
      a: "Sí, FYE comunica 10 años de garantía en el casco. Las condiciones específicas se explican antes de confirmar el proyecto.",
    },
    {
      q: "¿Puedo consultar aunque todavía no tenga definido el presupuesto?",
      a: "Sí. La consulta está pensada justamente para ordenar opciones y entender qué tiene sentido para tu caso antes de decidir.",
    },
  ];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
      <Reveal>
        <div className="text-center">
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
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

function FinalCTA() {
  return (
    <section
      id="diagnostico"
      className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-24"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua/30 blur-[140px]" />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-medium leading-tight text-balance md:text-6xl">
            ¿Querés evaluar qué piscina
            <span className="block text-aqua">tiene sentido para tu casa?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/75">
            Contanos qué tenés en mente y te orientamos con opciones claras antes de tomar una
            decisión.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico?origen=oferta-final&servicio=piscina-instalada"
              className="inline-flex items-center gap-2 rounded-full bg-aqua px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Ordenar mi proyecto
            </a>
            <Link
              to="/"
              hash="servicios"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/15"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              Volver a servicios
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary font-display text-lg font-semibold text-primary-foreground">
              F
            </span>
            <span className="font-display text-xl font-semibold">FYE Piscinas</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Diseñamos, instalamos y acompañamos proyectos de piscinas residenciales en Uruguay.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
            Empresa
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/" hash="servicios" className="hover:text-foreground">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/" hash="obras" className="hover:text-foreground">
                Obras
              </Link>
            </li>
            <li>
              <Link to="/" hash="contacto" className="hover:text-foreground">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
            Contacto
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Montevideo, Uruguay</li>
            <li>hola@fyepiscinas.uy</li>
            <li>+598 99 000 000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-muted-foreground md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} FYE Piscinas. Todos los derechos reservados.</span>
          <span>Hecho con cuidado en Uruguay.</span>
        </div>
      </div>
    </footer>
  );
}
