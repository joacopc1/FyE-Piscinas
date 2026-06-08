import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Home, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

import { Header } from "@/components/site/Header";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { whatsappMessages, whatsappUrl } from "@/lib/contact";
import { Work, WorkCategory, workFilters, works } from "@/lib/works";

import heroPool from "@/assets/hero-pool.jpg";

export const Route = createFileRoute("/obras")({
  head: () => ({
    meta: [
      { title: "Obras realizadas — FYE Piscinas" },
      {
        name: "description",
        content:
          "Conocé obras realizadas por FYE Piscinas: procesos, decisiones, tiempos y resultados para comprar con más confianza.",
      },
      { property: "og:title", content: "Obras realizadas — FYE Piscinas" },
      {
        property: "og:description",
        content:
          "Proyectos reales, procesos claros y resultados para entender cómo puede verse tu piscina terminada.",
      },
      { property: "og:image", content: works[0].image },
    ],
  }),
  component: ObrasPage,
});

function ObrasPage() {
  const [activeFilter, setActiveFilter] = useState<WorkCategory>("Todas");

  const filteredWorks = useMemo(() => {
    if (activeFilter === "Todas") return works;
    return works.filter((work) => work.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header solid />
      <main>
        <Hero />
        <Gallery
          activeFilter={activeFilter}
          filteredWorks={filteredWorks}
          onFilter={setActiveFilter}
        />
        <TrustBlock />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-white pt-32 pb-8 md:pt-36 md:pb-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.035em] md:text-6xl">
              Obras que ya están disfrutándose.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Mirá proyectos reales, cómo se pensaron, qué decisiones se tomaron y qué resultado
              obtuvo cada familia antes de avanzar.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Gallery({
  activeFilter,
  filteredWorks,
  onFilter,
  onSelect,
}: {
  activeFilter: WorkCategory;
  filteredWorks: Work[];
  onFilter: (filter: WorkCategory) => void;
}) {
  return (
    <section id="galeria" className="bg-white py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {workFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => onFilter(filter)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-white text-foreground/75 hover:bg-secondary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-3">
          {filteredWorks.map((work, index) => (
            <StaggerItem
              key={work.id}
              className="group relative h-[320px] overflow-hidden rounded-3xl bg-secondary shadow-[0_22px_60px_rgba(2,30,54,0.16)] md:h-[360px]"
            >
              <a
                href={`/obras/${work.id}`}
                className="absolute inset-0 z-10 text-left"
                aria-label={`Ver proceso de ${work.title}`}
              />
              <img
                src={work.image}
                alt={work.alt}
                loading={index < 2 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/96 via-primary/38 to-transparent opacity-86 transition-opacity duration-500 group-hover:opacity-95" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.48)] md:p-8">
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-white/74">
                  <span>{work.category}</span>
                  <span>{work.location}</span>
                  <span>{work.duration}</span>
                </div>
                <h2 className="mt-3 font-display text-3xl font-medium leading-tight md:text-4xl">
                  {work.title}
                </h2>
                <p className="max-h-0 max-w-xl translate-y-3 overflow-hidden text-sm leading-relaxed text-white/86 opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-28 group-hover:translate-y-0 group-hover:opacity-100">
                  {work.summary}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Ver proceso
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function TrustBlock() {
  const points = [
    {
      icon: Home,
      title: "Antes de vender, entendemos el espacio",
      body: "Cada obra parte de la casa, el uso esperado, el terreno y los tiempos reales.",
    },
    {
      icon: Sparkles,
      title: "Mostramos decisiones, no solo fotos lindas",
      body: "El cliente necesita confiar en el proceso, no solamente imaginar el resultado final.",
    },
    {
      icon: Check,
      title: "Entrega con orientación inicial",
      body: "La puesta en marcha y los cuidados básicos son parte del valor de la propuesta.",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[0.85fr_1.15fr] md:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-medium leading-[1.08] md:text-5xl">
            La confianza se construye mostrando cómo se trabaja.
          </h2>
        </Reveal>

        <div className="grid gap-3">
          {points.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.08}>
              <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5 md:p-6">
                <point.icon className="mt-0.5 h-5 w-5 flex-none text-aqua" strokeWidth={1.8} />
                <div>
                  <h3 className="text-base font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-deep py-20 text-primary-foreground md:py-24">
      <img
        src={heroPool}
        alt="Piscina terminada en una casa moderna"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/70 to-primary/34" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/76 via-transparent to-primary/48" />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-medium leading-[1.08] md:text-6xl">
            Tu casa puede ser la próxima.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/76">
            Contanos qué tenés en mente y te orientamos con opciones claras para tu espacio, tus
            tiempos y tu presupuesto.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico?origen=obras"
              className="inline-flex items-center gap-2 rounded-full bg-aqua px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Consultar mi proyecto
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/piscina-lista-para-disfrutar"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/15"
            >
              Ver oferta principal
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <a href="/" className="flex items-center gap-2 text-foreground">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary font-display text-sm font-semibold text-primary-foreground">
            F
          </span>
          <span className="font-display text-lg font-semibold">FYE Piscinas</span>
        </a>
        <div className="flex flex-wrap gap-5">
          <a href="/#servicios" className="hover:text-foreground">
            Servicios
          </a>
          <a href="/obras" className="hover:text-foreground">
            Obras
          </a>
          <a href="/#contacto" className="hover:text-foreground">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
