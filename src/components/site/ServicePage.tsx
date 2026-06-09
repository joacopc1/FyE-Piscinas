import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { Header } from "@/components/site/Header";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { whatsappMessages, whatsappUrl } from "@/lib/contact";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export type ServicePageData = {
  slug: string;
  label: string;
  title: ReactNode;
  subheadline: string;
  heroImage: string;
  forWho: { title: string; body: string }[];
  includes: string[];
  bonuses?: { title: string; desc: string }[];
  process: { title: string; body: string }[];
  trustTitle: string;
  trustBody: string;
  trustPoints: { icon: LucideIcon; title: string }[];
  guaranteeHeadline?: string;
  guaranteeBody?: string;
  works?: { img: string; type: string; stage: string; desc: string }[];
  faqs: { q: string; a: string }[];
  finalCtaTitle: ReactNode;
  finalCtaBody: string;
};

export function ServicePage({ data }: { data: ServicePageData }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const diagnostico = `/diagnostico?origen=servicio-page&servicio=${encodeURIComponent(data.slug)}`;
  const works = data.works ?? [
    {
      img: work1,
      type: "Proyecto residencial",
      stage: "Servicio coordinado",
      desc: "Selección, instalación y seguimiento bajo un mismo equipo.",
    },
    {
      img: work2,
      type: "Casa familiar",
      stage: "Acompañamiento real",
      desc: "Opciones claras y seguimiento para que el cliente no compre a ciegas.",
    },
    {
      img: work3,
      type: "Terminaciones cuidadas",
      stage: "Entrega completa",
      desc: "Proceso ordenado, puesta en marcha y soporte posterior.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />

      <section className="relative h-[88svh] min-h-[620px] w-full overflow-hidden bg-deep">
        <div className="absolute inset-0">
          <img src={data.heroImage} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,transparent_0%,rgba(0,0,0,0.55)_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex h-full flex-col items-center justify-center pt-24 text-center"
        >
          <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-4xl">
              <h1 className="font-[var(--font-hero)] text-3xl font-medium leading-[1.04] tracking-[-0.035em] text-balance text-white drop-shadow-[0_18px_42px_rgba(0,0,0,0.32)] sm:text-4xl lg:text-6xl">
                {data.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/82 md:text-lg">
                {data.subheadline}
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={diagnostico}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-[var(--shadow-lift)] transition-all hover:-translate-y-0.5 hover:bg-aqua"
                >
                  Ordenar mi proyecto
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
                </a>
                <a
                  href="#proceso"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15"
                >
                  Ver cómo funciona
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                Para quién tiene sentido.
              </h2>
            </div>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.forWho.map((item, index) => (
              <StaggerItem
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="font-display text-3xl text-aqua/45">0{index + 1}</span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section id="incluye" className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                Qué incluye.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                La idea es que entiendas el alcance antes de avanzar, sin promesas vagas ni letra
                chica.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-7">
              <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] md:p-9">
                <ul className="grid gap-3.5 sm:grid-cols-2">
                  {data.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-aqua text-primary">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] md:p-9">
                <ShieldCheck className="h-6 w-6 text-aqua" strokeWidth={1.8} />
                <h3 className="mt-5 font-display text-2xl font-medium leading-tight">
                  {data.guaranteeHeadline ?? "Acompañamiento claro."}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {data.guaranteeBody ??
                    "Te explicamos qué incluye, qué queda por validar y cómo se acompaña el servicio después de avanzar."}
                </p>
                {data.bonuses && (
                  <div className="mt-7 space-y-5">
                    {data.bonuses.map((bonus) => (
                      <div key={bonus.title} className="flex gap-3">
                        <span aria-hidden className="text-xl leading-none">
                          🎁
                        </span>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">{bonus.title}</h4>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {bonus.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="proceso" className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                Cómo trabajamos.
              </h2>
            </div>
          </Reveal>

          <StaggerGroup stagger={0.12} className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.process.map((step, index) => (
              <StaggerItem
                key={step.title}
                className="relative rounded-2xl border border-border bg-card p-7"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl font-medium text-primary">
                    0{index + 1}
                  </span>
                  {index < data.process.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-aqua opacity-60" />
                  )}
                </div>
                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                {data.trustTitle}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">{data.trustBody}</p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2">
                {data.trustPoints.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
                  >
                    <item.icon className="mt-0.5 h-5 w-5 flex-none text-aqua" strokeWidth={1.8} />
                    <span className="text-sm font-medium leading-snug text-foreground/90">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                Obras relacionadas.
              </h2>
            </div>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {works.map((work) => (
              <StaggerItem key={work.type} className="card group transition-transform active:scale-[0.985]">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={work.img}
                    alt={work.type}
                    loading="lazy"
                    className="touch-image-zoom h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5">
                  <div className="text-xs uppercase tracking-wider text-aqua">{work.stage}</div>
                  <h3 className="mt-1 font-display text-xl font-medium">{work.type}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{work.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <Faq faqs={data.faqs} />

      <section className="relative overflow-hidden py-24 text-white md:py-32">
        <div className="absolute inset-0">
          <img src={data.heroImage} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-4xl font-medium leading-tight text-balance md:text-6xl">
              {data.finalCtaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/80">{data.finalCtaBody}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={diagnostico}
                className="inline-flex items-center gap-2 rounded-full bg-aqua px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                Ordenar mi proyecto
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsappUrl(whatsappMessages.service(data.label))}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp directo
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Faq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
              Preguntas frecuentes.
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((faq, index) => (
            <div key={faq.q}>
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-secondary/60"
              >
                <span className="font-semibold text-foreground">{faq.q}</span>
                {open === index ? (
                  <Minus className="h-4 w-4 flex-none text-aqua" />
                ) : (
                  <Plus className="h-4 w-4 flex-none text-aqua" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === index ? "auto" : 0, opacity: open === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </motion.div>
            </div>
          ))}
        </div>
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
            <img
              src="/logo FYE Piscinas.png"
              alt="FYE Piscinas"
              className="h-10 w-auto"
              width={186}
              height={125}
            />
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Diseñamos, instalamos y acompañamos proyectos de piscinas residenciales en Uruguay.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
            Servicios
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/piscinas-de-fibra" className="hover:text-foreground">
                Piscinas instaladas
              </Link>
            </li>
            <li>
              <Link to="/jacuzzi-spa" className="hover:text-foreground">
                Jacuzzi / Spa
              </Link>
            </li>
            <li>
              <Link to="/climatizacion" className="hover:text-foreground">
                Climatización
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
            Navegación
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/obras" className="hover:text-foreground">
                Obras
              </Link>
            </li>
            <li>
              <Link
                to="/diagnostico"
                search={{ origen: "footer" }}
                className="hover:text-foreground"
              >
                Diagnóstico
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
