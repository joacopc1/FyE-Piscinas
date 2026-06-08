import { createFileRoute } from "@tanstack/react-router";
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
          <a
            href="/obras"
            className="mx-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-aqua"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a obras
          </a>
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
  const diagnosticHref = `/diagnostico?origen=obra&obra=${encodeURIComponent(work.id)}&servicio=${encodeURIComponent(work.category)}`;

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header solid />
      <main>
        <section className="bg-white pt-28 pb-10 md:pt-34 md:pb-14">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <a
                href="/obras"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-aqua"
              >
                <ArrowLeft className="h-4 w-4" />
                Obras / {work.title}
              </a>
            </Reveal>

            <div className="mt-9 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <Reveal>
                <div>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-muted-foreground">
                    <span>{work.category}</span>
                    <span>{work.location}</span>
                    <span>{work.duration}</span>
                  </div>
                  <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium leading-[1.02] tracking-[-0.035em] md:text-7xl">
                    {work.title}
                  </h1>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
                  {work.summary}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white pb-12 md:pb-16">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <div className="relative h-[420px] overflow-hidden rounded-3xl bg-secondary shadow-[0_28px_80px_rgba(2,30,54,0.18)] md:h-[580px]">
                <img src={work.image} alt={work.alt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/68 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 max-w-2xl p-6 text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:p-10">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                    Resultado final
                  </p>
                  <p className="mt-3 text-xl leading-relaxed md:text-2xl">{work.result}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-10 md:py-14">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="space-y-3 lg:sticky lg:top-28 lg:self-start">
              <Meta icon={MapPin} label="Zona" value={work.location} />
              <Meta icon={Clock} label="Tiempo mock" value={work.duration} />
              <Meta icon={Home} label="Tipo" value={work.category} />
            </aside>

            <div className="space-y-10">
              <DetailBlock title="Situación inicial" body={work.initial} />
              <DetailBlock title="Recomendación" body={work.recommendation} />

              <div>
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

              <blockquote className="rounded-3xl bg-secondary p-7 font-display text-2xl font-medium leading-snug text-primary md:p-9 md:text-3xl">
                “{work.quote}”
              </blockquote>

              <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
                <Sparkles className="h-6 w-6 text-aqua" strokeWidth={1.8} />
                <h2 className="mt-4 font-display text-3xl font-medium leading-tight md:text-4xl">
                  ¿Querés algo parecido para tu casa?
                </h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  Podemos tomar esta obra como referencia y orientarte según tu espacio, zona,
                  tiempos y tipo de uso.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={diagnosticHref}
                    className="inline-flex items-center gap-2 rounded-full bg-aqua px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                  >
                    Aplicar a diagnóstico
                    <ArrowRight className="h-4 w-4" />
                  </a>
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
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <div className="flex items-end justify-between gap-6">
                <h2 className="max-w-xl font-display text-4xl font-medium leading-[1.08] md:text-5xl">
                  Más proyectos para mirar.
                </h2>
                <a
                  href="/obras"
                  className="hidden text-sm font-semibold text-primary hover:text-aqua md:inline-flex"
                >
                  Ver todas las obras →
                </a>
              </div>
            </Reveal>

            <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedWorks.map((item) => (
                <StaggerItem
                  key={item.id}
                  className="group relative h-[300px] overflow-hidden rounded-3xl bg-secondary shadow-[0_22px_60px_rgba(2,30,54,0.14)]"
                >
                  <a
                    href={`/obras/${item.id}`}
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
    <div className="flex items-center gap-3 rounded-2xl border border-border p-4">
      <Icon className="h-5 w-5 flex-none text-aqua" strokeWidth={1.8} />
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-display text-3xl font-medium leading-tight md:text-4xl">{title}</h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/78 md:text-lg">
        {body}
      </p>
    </div>
  );
}
