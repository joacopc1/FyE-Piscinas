import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ChevronDown, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";

import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { whatsappUrl } from "@/lib/contact";
import { getWorkById } from "@/lib/works";

type SearchParams = {
  origen?: string;
  servicio?: string;
  obra?: string;
};

type DiagnosticData = {
  service: string;
  zone: string;
  propertyType: string;
  projectStage: string;
  timing: string;
  mainUse: string;
  spaceReady: string;
  access: string;
  budgetRange: string;
  decisionRole: string;
  name: string;
  whatsapp: string;
  email: string;
  contactPreference: string;
  comments: string;
};

const initialData: DiagnosticData = {
  service: "",
  zone: "",
  propertyType: "",
  projectStage: "",
  timing: "",
  mainUse: "",
  spaceReady: "",
  access: "",
  budgetRange: "",
  decisionRole: "",
  name: "",
  whatsapp: "",
  email: "",
  contactPreference: "",
  comments: "",
};

export const Route = createFileRoute("/diagnostico")({
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    origen: typeof search.origen === "string" ? search.origen : undefined,
    servicio: typeof search.servicio === "string" ? search.servicio : undefined,
    obra: typeof search.obra === "string" ? search.obra : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Diagnóstico de proyecto — FYE Piscinas" },
      {
        name: "description",
        content:
          "Contanos tu idea y recibí orientación inicial para elegir tu proyecto de piscina, spa o climatización con más claridad.",
      },
      { property: "og:title", content: "Diagnóstico de proyecto — FYE Piscinas" },
      {
        property: "og:description",
        content:
          "Un formulario consultivo corto para entender tu casa, tus tiempos y el tipo de proyecto que querés encarar.",
      },
    ],
  }),
  component: DiagnosticoPage,
});

function DiagnosticoPage() {
  const search = Route.useSearch();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<DiagnosticData>({
    ...initialData,
    service: normalizeServiceParam(search.servicio),
  });

  const sourceWork = search.obra ? getWorkById(search.obra) : undefined;
  const progress = ((step + 1) / steps.length) * 100;
  const missingRequiredFields = getMissingRequiredFields(data, step);
  const canAdvance = missingRequiredFields.length === 0;

  const whatsappHref = useMemo(
    () => whatsappUrl(buildDiagnosticMessage(data, search, sourceWork?.title)),
    [data, search, sourceWork?.title],
  );

  function update<K extends keyof DiagnosticData>(key: K, value: DiagnosticData[K]) {
    setData((current) => ({ ...current, [key]: value }));
  }

  function nextStep() {
    if (!canAdvance) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function previousStep() {
    setStep((current) => Math.max(current - 1, 0));
  }

  function submit() {
    if (!canAdvance) return;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header solid />
      <main>
        <section className="bg-white pt-28 pb-6 md:pt-32 md:pb-8">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <a
                href={sourceWork ? `/obras/${sourceWork.id}` : "/"}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-aqua"
              >
                <ArrowLeft className="h-4 w-4" />
                {sourceWork ? `Volver a ${sourceWork.title}` : "Volver al inicio"}
              </a>
            </Reveal>

            <div className="mx-auto mt-7 max-w-3xl text-center">
              <Reveal>
                <h1 className="font-display text-[2.1rem] font-medium leading-[1.04] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem]">
                  <span className="block">Contanos tu idea y</span>
                  <span className="sr-only"> </span>
                  <span className="block">ordenamos el próximo paso.</span>
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Este diagnóstico no es un compromiso de compra. Sirve para entender tu casa, tu
                  momento y qué opción puede tener más sentido antes de hablar por WhatsApp.
                </p>
                {sourceWork && (
                  <p className="mt-4 text-sm font-medium text-primary">
                    Venís desde la obra: {sourceWork.title}.
                  </p>
                )}
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white pb-16 md:pb-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-card p-5 shadow-[0_24px_70px_rgba(2,30,54,0.11)] md:p-8">
                <div className="mb-8 text-center">
                  <p className="text-sm font-semibold text-primary">
                    Paso {step + 1} de {steps.length}
                  </p>
                  <h2 className="mx-auto mt-2 max-w-2xl font-display text-xl font-medium leading-tight md:text-3xl">
                    {submitted ? "Resumen listo para enviar." : steps[step].title}
                  </h2>
                  <div className="mx-auto mt-5 h-2 max-w-2xl overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-aqua transition-all duration-500"
                      style={{ width: `${submitted ? 100 : progress}%` }}
                    />
                  </div>
                </div>

                {submitted ? (
                  <Summary data={data} search={search} sourceWorkTitle={sourceWork?.title} />
                ) : (
                  <StepContent step={step} data={data} update={update} />
                )}

                {!submitted && !canAdvance && (
                  <p className="mt-5 rounded-2xl bg-secondary px-4 py-3 text-sm font-medium text-muted-foreground">
                    Completá los campos de este paso para continuar.
                  </p>
                )}

                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
                  <button
                    type="button"
                    onClick={previousStep}
                    disabled={step === 0 || submitted}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-40"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Atrás
                  </button>

                  {submitted ? (
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 rounded-full bg-aqua px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                    >
                      Enviar por WhatsApp
                      <Send className="h-4 w-4" />
                    </a>
                  ) : step === steps.length - 1 ? (
                    <button
                      type="button"
                      onClick={submit}
                      disabled={!canAdvance}
                      className="inline-flex items-center gap-2 rounded-full bg-aqua px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-45"
                    >
                      Ver resumen
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!canAdvance}
                      className="inline-flex items-center gap-2 rounded-full bg-aqua px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-45"
                    >
                      Continuar
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}

const steps = [
  { title: "Primero entendamos qué querés lograr." },
  { title: "Ahora veamos decisión, tiempos y alcance." },
  { title: "Por último, cómo te contactamos." },
];

const requiredFieldsByStep: Array<Array<keyof DiagnosticData>> = [
  ["service", "zone", "propertyType", "mainUse"],
  ["projectStage", "timing", "budgetRange", "decisionRole", "spaceReady", "access"],
  ["name", "whatsapp", "contactPreference"],
];

function getMissingRequiredFields(data: DiagnosticData, step: number) {
  return requiredFieldsByStep[step].filter((field) => !data[field]);
}

function normalizeServiceParam(service?: string) {
  const labels: Record<string, string> = {
    "piscina-fibra": "Piscina instalada",
    "piscina-instalada": "Piscina instalada",
    "piscinas-de-fibra": "Piscina instalada",
    jacuzzi: "Jacuzzi / Spa",
    "jacuzzi-spa": "Jacuzzi / Spa",
    climatizacion: "Climatización",
    mantenimiento: "Consulta postventa",
  };

  return service ? labels[service] || service : "";
}

function StepContent({
  step,
  data,
  update,
}: {
  step: number;
  data: DiagnosticData;
  update: <K extends keyof DiagnosticData>(key: K, value: DiagnosticData[K]) => void;
}) {
  if (step === 0) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Servicio de interés">
          <Select
            value={data.service}
            onChange={(value) => update("service", value)}
            options={[
              "Piscina instalada",
              "Jacuzzi / Spa",
              "Climatización",
              "Todavía no sé",
            ]}
            placeholder="Elegí una opción"
          />
        </Field>
        <Field label="Ciudad o zona">
          <Input
            value={data.zone}
            onChange={(value) => update("zone", value)}
            placeholder="Ej: Montevideo, Canelones, Maldonado"
          />
        </Field>
        <Field label="Tipo de propiedad">
          <Select
            value={data.propertyType}
            onChange={(value) => update("propertyType", value)}
            options={["Casa permanente", "Casa de verano", "Chacra/campo", "Otro"]}
            placeholder="Elegí una opción"
          />
        </Field>
        <Field label="Uso principal">
          <Select
            value={data.mainUse}
            onChange={(value) => update("mainUse", value)}
            options={["Familia", "Relax", "Alquiler/propiedad", "Reuniones", "Todavía no sé"]}
            placeholder="Elegí una opción"
          />
        </Field>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Estado del proyecto">
          <Select
            value={data.projectStage}
            onChange={(value) => update("projectStage", value)}
            options={[
              "Estoy comparando opciones",
              "Ya tengo una idea clara",
              "Quiero cotizar pronto",
              "Ya tengo piscina y quiero mejorarla",
            ]}
            placeholder="Elegí una opción"
          />
        </Field>
        <Field label="Cuándo te gustaría avanzar">
          <Select
            value={data.timing}
            onChange={(value) => update("timing", value)}
            options={["Lo antes posible", "1 a 3 meses", "Más adelante", "Solo estoy investigando"]}
            placeholder="Elegí una opción"
          />
        </Field>
        <Field label="Rango estimado de inversión">
          <Select
            value={data.budgetRange}
            onChange={(value) => update("budgetRange", value)}
            options={[
              "Necesito orientación",
              "Hasta USD 8.000 aprox.",
              "USD 8.000 a 15.000 aprox.",
              "Más de USD 15.000",
              "Prefiero hablarlo",
            ]}
            placeholder="Elegí una opción"
          />
        </Field>
        <Field label="Quién decide el proyecto">
          <Select
            value={data.decisionRole}
            onChange={(value) => update("decisionRole", value)}
            options={[
              "Decido yo",
              "Decidimos en pareja/familia",
              "Estoy averiguando para otra persona",
              "Todavía lo estamos evaluando",
            ]}
            placeholder="Elegí una opción"
          />
        </Field>
        <Field label="¿El espacio está definido?">
          <Select
            value={data.spaceReady}
            onChange={(value) => update("spaceReady", value)}
            options={["Sí, ya sé dónde iría", "Tengo una idea", "No, necesito orientación"]}
            placeholder="Elegí una opción"
          />
        </Field>
        <Field label="Acceso al lugar">
          <Select
            value={data.access}
            onChange={(value) => update("access", value)}
            options={[
              "Fácil acceso",
              "Acceso medio",
              "Difícil / hay que revisar",
              "No lo tengo claro",
            ]}
            placeholder="Elegí una opción"
          />
        </Field>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Field label="Nombre">
        <Input
          value={data.name}
          onChange={(value) => update("name", value)}
          placeholder="Tu nombre"
        />
      </Field>
      <Field label="WhatsApp">
        <Input
          value={data.whatsapp}
          onChange={(value) => update("whatsapp", value)}
          placeholder="+598..."
        />
      </Field>
      <Field label="Email opcional">
        <Input
          value={data.email}
          onChange={(value) => update("email", value)}
          placeholder="tu@email.com"
        />
      </Field>
      <Field label="Cómo preferís que te contacten">
        <Select
          value={data.contactPreference}
          onChange={(value) => update("contactPreference", value)}
          options={["WhatsApp", "Llamada", "Primero WhatsApp y después llamada", "Me da igual"]}
          placeholder="Elegí una opción"
        />
      </Field>
      <Field label="Comentario o detalle extra" className="md:col-span-2">
        <textarea
          value={data.comments}
          onChange={(event) => update("comments", event.target.value)}
          placeholder="Contanos medidas aproximadas, dudas, si ya tenés fotos, o cualquier detalle importante."
          className="min-h-[140px] w-full resize-y rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-aqua"
        />
      </Field>
    </div>
  );
}

function Summary({
  data,
  search,
  sourceWorkTitle,
}: {
  data: DiagnosticData;
  search: SearchParams;
  sourceWorkTitle?: string;
}) {
  const source = getSourceLabel(search, sourceWorkTitle);
  const rows = [
    ["Origen", source],
    ["Servicio", data.service || search.servicio || "A definir"],
    ["Zona", data.zone || "A definir"],
    ["Timing", data.timing || "A definir"],
    ["Inversión", data.budgetRange || "A definir"],
    ["Decisión", data.decisionRole || "A definir"],
    ["Contacto", data.name || data.whatsapp ? `${data.name} ${data.whatsapp}`.trim() : "A definir"],
  ];

  return (
    <div>
      <div className="rounded-3xl bg-secondary p-5 md:p-6">
        <div className="flex items-start gap-3">
          <Check className="mt-0.5 h-5 w-5 flex-none text-aqua" strokeWidth={2.2} />
          <div>
            <h3 className="text-base font-semibold text-foreground">Diagnóstico listo.</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Prepará este resumen para enviarlo por WhatsApp y que el equipo pueda responderte con
              más contexto.
            </p>
          </div>
        </div>
      </div>

      <dl className="mt-6 grid gap-3 md:grid-cols-2">
        {rows.map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-border p-4">
            <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {label}
            </dt>
            <dd className="mt-2 text-sm font-semibold text-foreground">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-foreground">{label}</span>
      {children}
    </label>
  );
}

function Input({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-aqua"
    />
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const selectedLabel = value || placeholder;

  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={`flex h-12 w-full items-center justify-between gap-3 rounded-2xl border bg-white px-4 text-left text-sm outline-none transition-all ${
          open
            ? "border-aqua shadow-[0_0_0_4px_rgba(71,190,214,0.12)]"
            : "border-border hover:border-aqua/55"
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? "font-medium text-foreground" : "text-muted-foreground/70"}>
          {selectedLabel}
        </span>
        <ChevronDown
          className={`h-4 w-4 flex-none text-primary/70 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 overflow-hidden rounded-2xl border border-border bg-white p-1.5 shadow-[0_22px_60px_rgba(2,30,54,0.16)]"
            role="listbox"
          >
            {options.map((option) => {
              const selected = option === value;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                    selected
                      ? "bg-aqua/15 font-semibold text-primary"
                      : "text-foreground/82 hover:bg-secondary"
                  }`}
                  role="option"
                  aria-selected={selected}
                >
                  <span>{option}</span>
                  {selected && <Check className="h-4 w-4 text-aqua" strokeWidth={2.4} />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function getSourceLabel(search: SearchParams, sourceWorkTitle?: string) {
  if (sourceWorkTitle) return `Obra: ${sourceWorkTitle}`;

  const labels: Record<string, string> = {
    header: "Header",
    "header-mobile": "Header mobile",
    "home-final": "CTA final home",
    "oferta-principal": "Oferta principal",
    "cupos-oferta": "Cupos de oferta",
    "oferta-final": "CTA final oferta",
    obras: "Página de obras",
    "servicio-card": "Card de servicio",
  };

  return search.origen ? labels[search.origen] || search.origen : "Web";
}

function buildDiagnosticMessage(
  data: DiagnosticData,
  search: SearchParams,
  sourceWorkTitle: string | undefined,
) {
  return [
    "Hola FYE, completé el diagnóstico web.",
    "",
    `Origen: ${sourceWorkTitle ? `Obra ${sourceWorkTitle}` : search.origen || "Web"}`,
    `Servicio: ${data.service || search.servicio || "A definir"}`,
    `Zona: ${data.zone || "A definir"}`,
    `Propiedad: ${data.propertyType || "A definir"}`,
    `Uso principal: ${data.mainUse || "A definir"}`,
    `Estado: ${data.projectStage || "A definir"}`,
    `Timing: ${data.timing || "A definir"}`,
    `Rango de inversión: ${data.budgetRange || "A definir"}`,
    `Quién decide: ${data.decisionRole || "A definir"}`,
    `Espacio definido: ${data.spaceReady || "A definir"}`,
    `Acceso: ${data.access || "A definir"}`,
    `Nombre: ${data.name || "A definir"}`,
    `WhatsApp del cliente: ${data.whatsapp || "A definir"}`,
    `Email: ${data.email || "A definir"}`,
    `Preferencia de contacto: ${data.contactPreference || "A definir"}`,
    data.comments ? `Comentario: ${data.comments}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}
