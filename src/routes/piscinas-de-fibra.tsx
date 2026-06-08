import { createFileRoute } from "@tanstack/react-router";
import { Clock, Compass, FileText, ShieldCheck } from "lucide-react";

import { ServicePage, type ServicePageData } from "@/components/site/ServicePage";

import heroFiber from "@/assets/service-fiber.jpg";

export const Route = createFileRoute("/piscinas-de-fibra")({
  head: () => ({
    meta: [
      { title: "Piscinas instaladas — FYE Piscinas" },
      {
        name: "description",
        content:
          "Piscinas residenciales instaladas: casco directo de fábrica, colocación completa, terminaciones cuidadas y acompañamiento.",
      },
      { property: "og:title", content: "Piscinas instaladas — FYE Piscinas" },
      {
        property: "og:description",
        content: "Casco directo de fábrica, colocación completa y acompañamiento real.",
      },
      { property: "og:image", content: heroFiber },
    ],
  }),
  component: Page,
});

const data: ServicePageData = {
  slug: "piscinas-de-fibra",
  label: "piscinas instaladas",
  title: (
    <>
      Piscinas instaladas,
      <span className="block text-aqua/95">sin comprar a ciegas.</span>
    </>
  ),
  subheadline:
    "Te ayudamos a elegir el proyecto correcto para tu casa, con casco directo de fábrica, colocación completa y acompañamiento hasta el primer uso.",
  heroImage: heroFiber,
  forWho: [
    {
      title: "Familias que quieren resolver",
      body: "Buscan una piscina clara, bien instalada y con menos vueltas en el proceso.",
    },
    {
      title: "Casas con espacio definido",
      body: "Tenés un jardín pensado y querés entender qué casco, medidas y alcance convienen.",
    },
    {
      title: "Compra de alto valor",
      body: "Querés claridad antes de señar: flete, colocación, acceso, bomba, filtro y terminaciones.",
    },
    {
      title: "Reformas o segunda piscina",
      body: "Proyecto nuevo o mejora de una casa ya habitada, con el alcance ordenado desde el inicio.",
    },
  ],
  includes: [
    "Evaluación inicial del terreno",
    "Recomendación del casco según espacio y uso",
    "Casco de piscina directo de fábrica",
    "Flete y coordinación de llegada al lugar",
    "Colocación e instalación completa",
    "Bomba, filtro, caseta y mano de obra",
    "Vereda perimetral y terminaciones acordadas",
    "Puesta en marcha inicial",
    "Acompañamiento durante la primera etapa",
  ],
  bonuses: [
    {
      title: "Guía FYE de cuidado inicial",
      desc: "Un material simple para evitar errores comunes al estrenar la piscina.",
    },
  ],
  process: [
    { title: "Consulta", body: "Hablamos de tu casa, localidad, tamaño, acceso y cómo querés usar la piscina." },
    {
      title: "Recomendación",
      body: "Te mostramos opciones reales con medidas, alcance, terminaciones y próximos pasos.",
    },
    {
      title: "Instalación",
      body: "Coordinamos llegada del casco, colocación, mano de obra y terminaciones acordadas.",
    },
    {
      title: "Acompañamiento",
      body: "Puesta en marcha guiada y soporte durante la primera etapa.",
    },
  ],
  trustTitle: "Claridad antes de avanzar.",
  trustBody:
    "Dejamos por escrito qué incluye el proyecto, qué decisiones se toman antes de instalar y cómo se acompaña después de la puesta en marcha.",
  trustPoints: [
    { icon: FileText, title: "Alcance claro antes de avanzar" },
    { icon: Compass, title: "Recomendación según tu caso" },
    { icon: ShieldCheck, title: "Respaldo informado en la propuesta" },
    { icon: Clock, title: "Soporte directo en la primera etapa" },
  ],
  guaranteeHeadline: "10 años en el casco.",
  guaranteeBody:
    "Roberto comunicó 10 años de garantía en el casco. Las condiciones y alcance exacto se explican antes de confirmar el proyecto.",
  faqs: [
    {
      q: "¿En cuánto tiempo tengo la piscina?",
      a: "Según Roberto, una vez que el casco llega al lugar, la instalación puede resolverse en pocos días si el terreno, acceso y agenda están en condiciones.",
    },
    {
      q: "¿Qué medidas hay disponibles?",
      a: "Se valida según catálogo real, espacio, uso esperado y tipo de instalación que conviene para tu casa.",
    },
    {
      q: "¿Qué incluye una venta normal?",
      a: "Roberto indicó que puede incluir flete, colocación, vereda perimetral, caseta, bomba, filtro y mano de obra. El alcance final se confirma antes de avanzar.",
    },
    {
      q: "¿Qué pasa si mi terreno tiene desnivel?",
      a: "Se evalúa antes. Lo importante es detectarlo temprano para evitar sorpresas.",
    },
    {
      q: "¿Incluye obra civil?",
      a: "El alcance exacto debe quedar escrito en la propuesta antes de avanzar, especialmente excavación, acceso, terminaciones y condiciones del terreno.",
    },
  ],
  finalCtaTitle: (
    <>
      ¿Querés saber qué piscina
      <span className="block text-aqua">entra en tu casa?</span>
    </>
  ),
  finalCtaBody:
    "Contanos qué tenés en mente y te orientamos con opciones reales antes de tomar una decisión.",
};

function Page() {
  return <ServicePage data={data} />;
}
