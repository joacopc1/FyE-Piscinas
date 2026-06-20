import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Home,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { whatsappUrl } from "@/lib/contact";
import { getWorkById, works } from "@/lib/works";

export const Route = createFileRoute("/obras_/$obraId")({
  head: ({ params }) => {
    const work = getWorkById(params.obraId);

    return {
      meta: [
        { title: work ? `${work.title} — Obra FYE Piscinas` : "Obra — FYE Piscinas" },
        {
          name: "description",
          content: work
            ? `${work.summary} Conocé el proceso, decisiones y resultado de esta obra.`
            : "Detalle de obra realizada por FYE Piscinas.",
        },
        { property: "og:title", content: work ? `${work.title} — FYE Piscinas` : "Obra FYE" },
        { property: "og:image", content: work?.image ?? works[0].image },
      ],
    };
  },
  component: WorkDetailPage,
});

function WorkDetailPage() {
  const { obraId } = Route.useParams();
  const work = getWorkById(obraId);

  if (!work) {
    return (
      <div className="min-h-screen bg-white text-foreground">
        <Header solid />
        <main className="mx-auto max-w-3xl px-5 pt-36 pb-20 text-center md:px-8">
          <Link
            to="/obras"
            className="mx-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-aqua"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a obras
          </Link>
          <h1 className="mt-8 font-display text-4xl font-medium md:text-6xl">
            Esta obra no está disponible.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Puede que el enlace haya cambiado o que la obra todavía no esté publicada.
          </p>
        </main>
      </div>
    );
  }

  const relatedWorks = works.filter((item) => item.id !== work.id).slice(0, 3);


  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header solid />
      <main>
        <section className="bg-white pt-28 pb-10 md:pt-34 md:pb-14">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <Link
                to="/obras"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-aqua"
              >
                <ArrowLeft className="h-4 w-4" />
                Obras / {work.title}
              </Link>
            </Reveal>

            <div className="mt-9 max-w-5xl">
              <Reveal>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm font-medium text-muted-foreground">
                  <span className="rounded-full bg-secondary/80 px-3 py-1 text-xs font-semibold text-primary">{work.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                  <span>{work.location}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                  <span>{work.duration}</span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-4 font-display text-2xl font-medium leading-[1.15] tracking-[-0.02em] sm:text-3xl md:text-[38px] lg:text-[40px] text-foreground">
                  {work.title}
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  {work.summary}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white pb-6 md:pb-8">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <Reveal>
              <div className="relative h-[310px] sm:h-[410px] md:h-[540px] overflow-hidden rounded-3xl bg-secondary shadow-[0_28px_80px_rgba(2,30,54,0.18)] transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_35px_90px_rgba(2,30,54,0.25)] group">
                <img src={work.image} alt={work.alt} className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/68 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 max-w-2xl p-6 text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:p-10">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                    Resultado final
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/90 md:text-base">{work.result}</p>
                </div>
              </div>
            </Reveal>
 
            {/* ZONA, TIEMPO, TIPO: 3 COLUMNS */}
            <StaggerGroup className="grid gap-4 sm:grid-cols-3 mt-6 md:mt-8">
              <StaggerItem>
                <Meta icon={MapPin} label="Zona" value={work.location} />
              </StaggerItem>
              <StaggerItem>
                <Meta icon={Clock} label="Plazo de instalación" value={work.duration} />
              </StaggerItem>
              <StaggerItem>
                <Meta icon={Home} label="Tipo de piscina" value={work.category} />
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>


        {/* SITUACIÓN INICIAL → RECOMENDACIÓN */}
        <section className="bg-white py-10 md:py-14">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="relative grid gap-8 md:grid-cols-2 md:gap-0">
              {/* Vertical divider line on desktop */}
              <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-border" />
              {/* Small connector dot */}
              <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-full bg-white border border-border text-aqua z-10">
                <ArrowRight className="h-4 w-4" />
              </div>

              <Reveal className="md:pr-12 lg:pr-16">
                <h2 className="font-display text-3xl font-medium leading-tight md:text-4xl">
                  Situación inicial
                </h2>
                <p className="mt-4 text-base leading-relaxed text-foreground/78 md:text-lg">
                  {work.initial}
                </p>
              </Reveal>

              <Reveal delay={0.12} className="md:pl-12 lg:pl-16">
                <h2 className="font-display text-3xl font-medium leading-tight md:text-4xl">
                  Recomendación
                </h2>
                <p className="mt-4 text-base leading-relaxed text-foreground/78 md:text-lg">
                  {work.recommendation}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white pt-16 pb-10 md:pt-24 md:pb-14">
          <div className="mx-auto max-w-3xl px-5 md:px-8 space-y-12">

            {work.detailedProcess ? (
              <div className="pt-4">
                <h2 className="font-display text-3xl font-medium leading-tight md:text-4xl mb-16 md:mb-20 text-center">
                  El proceso de obra paso a paso
                </h2>
                <div className="space-y-12 relative before:absolute before:inset-y-0 before:left-[15px] before:w-0.5 before:bg-border/60">
                  {[
                    ...work.detailedProcess,
                    {
                      title: "Resultado Final",
                      description: work.result,
                      mediaUrl: work.image,
                      mediaType: "image" as const,
                    },
                    ...(work.testimonialImage
                      ? [
                          {
                            title: "Opinión del Cliente",
                            description: "Conversación final sobre el resultado del proyecto y la puesta en marcha por WhatsApp.",
                            mediaUrl: work.testimonialImage,
                            mediaType: "image" as const,
                          },
                        ]
                      : []),
                  ].map((step, idx) => (
                    <Reveal key={step.title} delay={idx * 0.05} className="w-full">
                      <div className="relative pl-10 flex flex-col md:grid md:grid-cols-[1fr_280px] md:gap-10 gap-5">
                        {/* Dot indicator */}
                        <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-aqua text-xs font-semibold text-primary z-10">
                          {idx + 1}
                        </div>
                        
                        <div>
                          <h3 className="font-display text-[21px] font-semibold text-foreground md:text-[22px]">
                            {step.title}
                          </h3>
                          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-[17px]">
                            {step.description}
                          </p>
                        </div>
                        
                        {step.mediaUrl && (
                          <div className="max-w-[280px] overflow-hidden rounded-2xl border border-border shadow-sm transition-all duration-500 hover:scale-[1.03] hover:shadow-lg hover:border-aqua/20">
                            {step.mediaType === "video" ? (
                              <video
                                src={encodeURI(step.mediaUrl)}
                                controls
                                preload="metadata"
                                playsInline
                                className="w-full h-auto block bg-black/5"
                              />
                            ) : (
                              <img
                                src={encodeURI(step.mediaUrl)}
                                alt={step.title}
                                className="w-full h-auto block"
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ) : (
              <div className="pt-4">
                <h2 className="font-display text-3xl font-medium leading-tight md:text-4xl">
                  Cómo se trabajó.
                </h2>
                <ul className="mt-6 grid gap-4">
                  {work.process.map((step) => (
                    <li key={step} className="flex gap-4 rounded-3xl border border-border p-5">
                      <Check className="mt-0.5 h-5 w-5 flex-none text-aqua" strokeWidth={2.2} />
                      <span className="text-base leading-relaxed text-foreground/84">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-6 md:p-8 pt-8 transition-all duration-500 hover:border-aqua/30 hover:shadow-[0_20px_50px_rgba(2,30,54,0.06)]">
                <Sparkles className="h-6 w-6 text-aqua" strokeWidth={1.8} />
                <h2 className="mt-4 font-display text-3xl font-medium leading-tight md:text-4xl">
                  ¿Querés algo parecido para tu casa?
                </h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  Podemos tomar esta obra como referencia y orientarte según tu espacio, zona,
                  tiempos y tipo de uso.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/diagnostico"
                    search={{ origen: "obra", obra: work.id, servicio: work.category }}
                    className="inline-flex items-center gap-2 rounded-full bg-aqua px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                  >
                    Aplicar a diagnóstico
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={whatsappUrl(
                      `Hola FYE, vi la obra ${work.title} y quiero consultar por un proyecto parecido para mi casa.`,
                    )}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp directo
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <div className="flex items-end justify-between gap-6">
                <h2 className="max-w-xl font-display text-4xl font-medium leading-[1.08] md:text-5xl">
                  Más proyectos para mirar.
                </h2>
                <Link
                  to="/obras"
                  className="hidden text-sm font-semibold text-primary hover:text-aqua md:inline-flex"
                >
                  Ver todas las obras →
                </Link>
              </div>
            </Reveal>

            <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedWorks.map((item) => (
                <StaggerItem
                  key={item.id}
                  className="group relative h-[300px] overflow-hidden rounded-3xl bg-secondary shadow-[0_22px_60px_rgba(2,30,54,0.14)]"
                >
                  <Link
                    to="/obras/$obraId"
                    params={{ obraId: item.id }}
                    className="absolute inset-0 z-10"
                    aria-label={`Ver obra ${item.title}`}
                  />
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/92 via-primary/28 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                    <div className="text-xs font-medium text-white/70">{item.category}</div>
                    <h3 className="mt-2 font-display text-3xl font-medium leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      </main>
    </div>
  );
}

function Meta({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-aqua/40 hover:shadow-md hover:bg-secondary/15">
      <Icon className="h-5 w-5 flex-none text-aqua" strokeWidth={1.8} />
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );
}

