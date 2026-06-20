import { createFileRoute } from "@tanstack/react-router";
import { Clock, Compass, FileText, ShieldCheck } from "lucide-react";

import { ServicePage, type ServicePageData } from "@/components/site/ServicePage";

import heroAccessories from "@/assets/service-accessories.jpg";

export const Route = createFileRoute("/equipamiento-accesorios")({
  head: () => ({
    meta: [
      { title: "Equipamiento y Accesorios de piscinas — FYE Piscinas" },
      {
        name: "description",
        content:
          "Cascadas, iluminación LED, tableros automáticos y mantas térmicas para tu piscina de fibra. Calidad de instalación por FYE Piscinas.",
      },
      { property: "og:title", content: "Equipamiento y Accesorios de piscinas — FYE Piscinas" },
      {
        property: "og:description",
        content: "Automatización y confort para disfrutar al máximo sin esfuerzo.",
      },
      { property: "og:image", content: heroAccessories },
    ],
  }),
  component: Page,
});

const data: ServicePageData = {
  slug: "equipamiento-accesorios",
  label: "equipamiento-accesorios",
  titlePart1: "Equipamiento y Accesorios,",
  titlePart2: "confort y automatización.",
  subheadline:
    "Equipamos tu piscina de fibra con cascadas, mantas térmicas, iluminación LED subacuática y tableros inteligentes para programar el filtrado diario sin esfuerzo.",
  heroImage: heroAccessories,
  forWho: [
    {
      title: "Quienes buscan comodidad",
      body: "Querés automatizar los ciclos de filtrado de 6 horas diarias mediante un timer para no prender la bomba manualmente.",
    },
    {
      title: "Estética y disfrute nocturno",
      body: "Buscás iluminar tu piscina con luces LED (blancas o RGB con control remoto) para crear un espacio decorativo de noche.",
    },
    {
      title: "Piscinas existentes",
      body: "Ya tenés tu piscina instalada y querés agregar upgrades como cascadas de acero inoxidable o mantas térmicas cobertoras.",
    },
    {
      title: "Proyectos integrales",
      body: "Buscás tener todos los adicionales técnicos resueltos por el mismo equipo de instalación desde el primer día.",
    },
  ],
  includes: [
    "Instalación de cascadas exteriores (acero inoxidable) o de obra",
    "Luminarias LED subacuáticas de bajo consumo (blancas o RGB de colores)",
    "Tablero eléctrico de protección con disyuntor y timer automático",
    "Mantas térmicas protectoras cortadas exactamente a medida del casco",
    "Instalación hidráulica técnica con llaves de paso y retornos de agua",
    "Configuración y explicación de uso de las programaciones automáticas",
  ],
  process: [
    {
      title: "Evaluación",
      body: "Analizamos tu piscina y el espacio del tablero para asegurar compatibilidad eléctrica e hidráulica.",
    },
    {
      title: "Propuesta",
      body: "Te recomendamos los componentes indicados (marcas de calidad y consumo eficiente) según tus objetivos.",
    },
    {
      title: "Conexión",
      body: "Instalamos los accesorios y realizamos las uniones hidráulicas y de cableado necesarias.",
    },
    {
      title: "Puesta en marcha",
      body: "Dejamos programado el timer de filtrado y te explicamos cómo regular las luces y la cascada.",
    },
  ],
  trustTitle: "Equipos de calidad y respaldo.",
  trustBody:
    "Seleccionamos marcas robustas. Además, si la bomba hidráulica presenta alguna falla mecánica dentro del primer año, la reemplazamos de inmediato sin costo.",
  trustPoints: [
    { icon: FileText, title: "Alcance y marcas recomendadas por escrito" },
    { icon: Compass, title: "Diseño hidráulico que optimiza la presión" },
    { icon: ShieldCheck, title: "Cambio directo de bomba hidráulica el primer año" },
    { icon: Clock, title: "Puesta en marcha rápida y guiada" },
  ],
  guaranteeHeadline: "Soporte posventa directo.",
  guaranteeBody:
    "Los accesorios mecánicos y de confort cuentan con el respaldo directo del fabricante. Si surge cualquier falla de bomba en el primer año, la cambiamos sin vueltas.",
  faqs: [
    {
      q: "¿Se pueden colocar accesorios si ya tengo la piscina instalada?",
      a: "Sí, podemos adaptar la hidráulica en tu caseta de filtrado para sumar cascadas, bombas de calor y programadores automáticos en piscinas existentes.",
    },
    {
      q: "¿Cómo funciona la automatización con timer?",
      a: "Instalamos un temporizador en el tablero eléctrico de la bomba que enciende y apaga el sistema de filtrado automáticamente durante 6 horas por día, asegurando la limpieza del agua sin que tengas que intervenir.",
    },
    {
      q: "¿De qué material son las cascadas?",
      a: "Ofrecemos cascadas decorativas en acero inoxidable con acabado pulido premium, así como bocas de cascada empotradas pensadas para revestir en piedra o revoque sobre un muro.",
    },
    {
      q: "¿Qué garantía tienen los accesorios?",
      a: "Tienen garantía de fábrica. Además, te damos respaldo directo con recambio inmediato de la bomba hidráulica ante cualquier defecto mecánico durante el primer año.",
    },
  ],
  finalCtaTitle: (
    <>
      ¿Querés equipar o automatizar
      <span className="block text-aqua">tu piscina?</span>
    </>
  ),
  finalCtaBody:
    "Comentanos qué accesorio te gustaría sumar y te preparamos una propuesta de equipamiento adaptada a tu piscina.",
};

function Page() {
  return <ServicePage data={data} />;
}
