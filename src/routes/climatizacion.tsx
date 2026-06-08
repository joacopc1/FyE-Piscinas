import { createFileRoute } from "@tanstack/react-router";
import { Clock, Compass, FileText, ShieldCheck } from "lucide-react";

import { ServicePage, type ServicePageData } from "@/components/site/ServicePage";

import heroClimate from "@/assets/service-climate.jpg";

export const Route = createFileRoute("/climatizacion")({
  head: () => ({
    meta: [
      { title: "Climatización de piscinas — FYE Piscinas" },
      {
        name: "description",
        content:
          "Extendé tu temporada de piscina con sistemas eficientes de climatización. Asesoramiento, instalación y acompañamiento por FYE.",
      },
      { property: "og:title", content: "Climatización de piscinas — FYE Piscinas" },
      {
        property: "og:description",
        content: "Más meses de uso, sin pelearte con los consumos ni la obra.",
      },
      { property: "og:image", content: heroClimate },
    ],
  }),
  component: Page,
});

const data: ServicePageData = {
  slug: "climatizacion",
  label: "climatización",
  title: (
    <>
      Más meses de piscina,
      <span className="block text-aqua/95">con un sistema bien elegido.</span>
    </>
  ),
  subheadline:
    "Te recomendamos el sistema adecuado según tu piscina, lo instalamos y te acompañamos para extender la temporada sin sorpresas de consumo.",
  heroImage: heroClimate,
  forWho: [
    {
      title: "Piscinas existentes",
      body: "Querés sumar climatización para usar la piscina más meses al año.",
    },
    {
      title: "Casas de uso permanente",
      body: "La piscina forma parte del día a día, no solo del verano.",
    },
    {
      title: "Proyectos nuevos",
      body: "Estás planificando la piscina y querés dejarla pensada desde el inicio.",
    },
    {
      title: "Quien busca eficiencia",
      body: "Querés un sistema que tenga sentido por consumo, resultado y uso real.",
    },
  ],
  includes: [
    "Diagnóstico del volumen y uso de tu piscina",
    "Recomendación de sistema según caso",
    "Coordinación eléctrica e hidráulica",
    "Instalación con alcance claro",
    "Puesta en marcha y configuración inicial",
    "Acompañamiento durante el arranque del sistema",
  ],
  process: [
    {
      title: "Consulta",
      body: "Vemos cómo y cuándo usás la piscina para entender qué sistema te conviene.",
    },
    {
      title: "Recomendación",
      body: "Te mostramos opciones reales con consumo estimado y temporada esperada.",
    },
    {
      title: "Instalación",
      body: "Coordinamos la obra con tiempos y alcance claros desde el inicio.",
    },
    {
      title: "Acompañamiento",
      body: "Te guiamos en el uso y revisamos el funcionamiento durante el arranque.",
    },
  ],
  trustTitle: "Expectativas realistas.",
  trustBody:
    "Antes de instalar, te explicamos qué temperatura es realista, en qué meses y qué consumo esperar. Sin promesas infladas.",
  trustPoints: [
    { icon: FileText, title: "Alcance y consumo estimado por escrito" },
    { icon: Compass, title: "Recomendación según uso real" },
    { icon: ShieldCheck, title: "Equipos respaldados por fabricante" },
    { icon: Clock, title: "Soporte directo en el arranque" },
  ],
  guaranteeHeadline: "Temporada extendida, sin promesas infladas.",
  guaranteeBody:
    "Te decimos de antemano qué esperar según el equipo recomendado, el tamaño de la piscina y la forma en que la vas a usar.",
  faqs: [
    {
      q: "¿Sirve para cualquier piscina?",
      a: "Se evalúa volumen, ubicación, exposición y uso para recomendar el sistema correcto.",
    },
    {
      q: "¿Cuánto consume?",
      a: "Depende del sistema y del uso. La propuesta incluye una orientación para que puedas decidir con más claridad.",
    },
    {
      q: "¿Cuándo conviene instalarla?",
      a: "Idealmente antes del cambio de temporada, aunque puede evaluarse durante todo el año.",
    },
    {
      q: "¿Es compatible con sistema solar?",
      a: "Puede serlo, pero depende de orientación, techo, espacio y expectativas de temperatura.",
    },
    {
      q: "¿Necesito ampliar la instalación eléctrica?",
      a: "A veces sí. Se revisa antes para que no aparezca como sorpresa.",
    },
  ],
  finalCtaTitle: (
    <>
      ¿Querés saber qué sistema
      <span className="block text-aqua">tiene sentido para tu piscina?</span>
    </>
  ),
  finalCtaBody:
    "Contanos cómo usás la piscina hoy y te orientamos con opciones realistas antes de avanzar.",
};

function Page() {
  return <ServicePage data={data} />;
}
