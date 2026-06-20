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
  guaranteeHeadline: "10 años de garantía.",
  guaranteeBody:
    "Nuestros cascos de fibra de vidrio y la instalación de las tuberías hidráulicas cuentan con un respaldo estructural de 10 años. Además, los equipos de bombeo tienen cobertura de cambio técnico directo durante el primer año en caso de fallas.",
  faqs: [
    {
      q: "¿En cuánto tiempo tengo la piscina?",
      a: "Una vez que el casco de fibra llega a tu domicilio, la excavación, colocación y conexionado hidráulico se completan en pocos días, sujeto a las condiciones climáticas y de accesibilidad del terreno.",
    },
    {
      q: "¿Qué medidas hay disponibles?",
      a: "Contamos con diversos modelos de cascos de fibra de vidrio que se adaptan a patios pequeños y grandes. Evaluamos las dimensiones ideales en base al espacio libre y al tipo de circulación de tu jardín.",
    },
    {
      q: "¿Qué incluye la instalación estándar?",
      a: "Nuestra propuesta incluye el flete del casco, excavación, colocación completa, bomba, filtro de arena, caseta protectora de fibra, llaves de paso, luces LED, tablero eléctrico con timer automático, trámites ante el MTOP para cargas pesadas y una vereda perimetral construida con baldosas atérmicas de 50x50 cm.",
    },
    {
      q: "¿Qué pasa si hay napa freática alta o lluvias?",
      a: "Si al excavar se detecta agua subterránea, instalamos sistemas de alivio y drenaje adecuados para estabilizar el terreno. En caso de lluvias intensas durante la obra, pausamos temporalmente el pozo y recondicionamos todo el suelo para garantizar una base firme antes de asentar el casco.",
    },
    {
      q: "¿Cómo se maneja el acceso y la logística del casco?",
      a: "Se requiere un pasillo de entrada libre de aproximadamente 3 metros de ancho (dependiendo del modelo de piscina elegido). Si el terreno no tiene acceso directo por los laterales, se requiere contratar una grúa telescópica para cruzar el casco sobre la casa, costo que corre por cuenta del cliente mientras que FYE coordina la logística.",
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
