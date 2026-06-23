import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Home, Sparkles } from "lucide-react";
import { useMemo, useState, useEffect, useRef } from "react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
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
            <h1 className="font-display text-3xl font-medium leading-[1.02] tracking-[-0.035em] md:text-6xl">
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
}: {
  activeFilter: WorkCategory;
  filteredWorks: Work[];
  onFilter: (filter: WorkCategory) => void;
}) {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const justActivatedRef = useRef<string | null>(null);

  useEffect(() => {
    const handleOutside = (event: PointerEvent | TouchEvent) => {
      const target = event.target as Node;
      if (gridRef.current && !gridRef.current.contains(target)) {
        setActiveCard(null);
        justActivatedRef.current = null;
      }
    };

    document.addEventListener("pointerdown", handleOutside, { passive: true });
    document.addEventListener("touchstart", handleOutside, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);

  const isTouch = () =>
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches);

  const activateForTouch = (id: string) => {
    if (!isTouch()) return;

    if (activeCard !== id) {
      justActivatedRef.current = id;
      setActiveCard(id);
    }
  };

  const handleTouchNavigation = (
    event: { preventDefault: () => void; stopPropagation: () => void },
    id: string,
  ) => {
    if (!isTouch()) return;

    if (activeCard !== id || justActivatedRef.current === id) {
      event.preventDefault();
      event.stopPropagation();
      justActivatedRef.current = id;
      setActiveCard(id);
      window.setTimeout(() => {
        if (justActivatedRef.current === id) {
          justActivatedRef.current = null;
        }
      }, 120);
    }
  };

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

        <div ref={gridRef}>
          <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-3">
            {filteredWorks.map((work, index) => (
              <StaggerItem
                key={work.id}
                onPointerDownCapture={() => activateForTouch(work.id)}
                onTouchStartCapture={() => activateForTouch(work.id)}
                className={`card group relative h-[320px] overflow-hidden rounded-3xl bg-secondary border border-white/10 shadow-[0_22px_60px_rgba(2,30,54,0.16)] transition-transform md:h-[360px] ${
                  activeCard === work.id ? "is-active" : ""
                }`}
              >
                <Link
                  to="/obras/$obraId"
                  params={{ obraId: work.id }}
                  className="absolute inset-0 z-10 text-left"
                  aria-label={`Ver proceso de ${work.title}`}
                  aria-expanded={activeCard === work.id}
                  onClickCapture={(event) => handleTouchNavigation(event, work.id)}
                />
                <img
                  src={work.image}
                  alt={work.alt}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="touch-image-zoom absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-[.is-active]:scale-105"
                />
                <div className="touch-overlay-strong absolute inset-0 bg-gradient-to-t from-primary/96 via-primary/38 to-transparent opacity-86 transition-opacity duration-500 group-hover:opacity-95 group-[.is-active]:opacity-95" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.48)] md:p-8">
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-white/74">
                    <span>{work.category}</span>
                    <span>{work.location}</span>
                    <span>{work.duration}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-medium leading-tight md:text-4xl">
                    {work.title}
                  </h2>
                  <p className="reveal-on-hover touch-reveal max-h-0 max-w-xl translate-y-3 overflow-hidden text-sm leading-relaxed text-white/86 opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-28 group-hover:translate-y-0 group-hover:opacity-100 group-[.is-active]:mt-3 group-[.is-active]:max-h-28 group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100">
                    {work.summary}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Ver proceso
                    <ArrowRight className="touch-arrow-nudge h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-[.is-active]:translate-x-1" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
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
          <h2 className="font-display text-2xl font-medium leading-[1.08] md:text-5xl">
            La confianza se construye mostrando cómo se trabaja.
          </h2>
        </Reveal>

        <div className="grid gap-3">
          {points.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.08}>
              <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-aqua/40 hover:shadow-md hover:bg-secondary/15">
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
          <h2 className="font-display text-2xl font-medium leading-[1.08] md:text-6xl">
            Tu casa puede ser la próxima.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/76">
            Contanos qué tenés en mente y te orientamos con opciones claras para tu espacio, tus
            tiempos y tu presupuesto.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/diagnostico"
              search={{ origen: "obras" }}
              className="inline-flex items-center gap-2 rounded-full bg-aqua px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Consultar mi proyecto
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/piscina-lista-para-disfrutar"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/15"
            >
              Ver oferta principal
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

