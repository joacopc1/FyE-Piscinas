import { createFileRoute } from "@tanstack/react-router";
import { Clock, Compass, FileText, ShieldCheck } from "lucide-react";

import { ServicePage, type ServicePageData } from "@/components/site/ServicePage";

import heroLandscaping from "@/assets/service-landscaping.jpg";

export const Route = createFileRoute("/jardin-y-entornos")({
  head: () => ({
    meta: [
      { title: "Jardinería, Césped y Entornos de piscinas — FYE Piscinas" },
      {
        name: "description",
        content:
          "Completamos la colocación de tu piscina con césped natural, revoques estéticos de muros y paisajismo integral. Calidad FYE Piscinas.",
      },
      { property: "og:title", content: "Jardinería, Césped y Entornos de piscinas — FYE Piscinas" },
      {
        property: "og:description",
        content: "El patio de tus sueños totalmente terminado, verde y prolijo.",
      },
      { property: "og:image", content: heroLandscaping },
    ],
  }),
  component: Page,
});

const data: ServicePageData = {
  slug: "jardin-y-entornos",
  label: "jardin-y-entornos",
  titlePart1: "Jardinería, Césped y Entornos,",
  titlePart2: "acabado premium de tu patio.",
  subheadline:
    "Completamos la obra de tu piscina de fibra con nivelación de tierra, colocación de césped natural, revoque y pintura de muros linderos para entregar un espacio verde listo.",
  heroImage: heroLandscaping,
  forWho: [
    {
      title: "Quienes buscan obra prolija",
      body: "Querés evitar que tu patio quede en tierra removida o desprolijo tras el paso de la excavadora e hidrogrúa.",
    },
    {
      title: "Buscás verde inmediato",
      body: "Querés colocar panes o rollos de césped natural de rápida adherencia para tener el jardín transitable desde el primer día.",
    },
    {
      title: "Muros colindantes feos",
      body: "Tenés una medianera o pared de bloques rústicos cerca de la piscina y querés revocarla y pintarla para modernizar la visual.",
    },
    {
      title: "Detalles personalizados",
      body: "Buscás incorporar cascadas de obra revestidas en piedra o muros de contención decorativos alrededor del vaso de agua.",
    },
  ],
  includes: [
    "Nivelación final de tierra y retiro de escombros de excavación",
    "Suministro y colocación de césped natural (en rollos o panes)",
    "Albañilería para revoque fino y pintura de paredes y muros linderos",
    "Construcción de muros soporte y empotrado de cascadas de obra",
    "Acondicionamiento estético de canteros y zonas adyacentes",
    "Limpieza profunda de veredas y patio transitable al finalizar",
  ],
  process: [
    {
      title: "Planificación",
      body: "Evaluamos el terreno y muros durante la fase de excavación para definir los niveles y áreas de intervención.",
    },
    {
      title: "Presupuesto",
      body: "Cotizamos los metros de césped natural a colocar y el tipo de revoque o cascada de obra con claridad de insumos.",
    },
    {
      title: "Ejecución",
      body: "Nuestros albañiles y jardineros preparan el suelo, revocan muros y colocan el césped en coordinación con el llenado.",
    },
    {
      title: "Limpieza",
      body: "Realizamos un barrido profundo y entrega prolija del patio para que no tengas tierra suelta ingresando al agua.",
    },
  ],
  trustTitle: "Estética y valorización.",
  trustBody:
    "Una piscina de fibra luce el doble cuando el entorno está terminado. Te garantizamos mano de obra prolija en albañilería y jardinería.",
  trustPoints: [
    { icon: FileText, title: "Detalle y presupuesto de materiales cerrado" },
    { icon: Compass, title: "Integración estética con el resto de la casa" },
    { icon: ShieldCheck, title: "Personal de albañilería y paisajismo calificado" },
    { icon: Clock, title: "Finalización de obra limpia y en plazos coordinados" },
  ],
  guaranteeHeadline: "Un único equipo responsable.",
  guaranteeBody:
    "Nos hacemos cargo del casco, el equipamiento y también de prolijar el patio. Te ahorrás lidiar con jardineros o pintores independientes.",
  faqs: [
    {
      q: "¿Es obligatorio contratar la jardinería con ustedes?",
      a: "No, es un servicio complementario y opcional. Puedes optar por acondicionar el patio por tu cuenta o encargarnos a nosotros el final de obra integral.",
    },
    {
      q: "¿Cuánto demora la colocación de césped y revoques?",
      a: "Generalmente se ejecuta en paralelo con el asentamiento de la piscina y se completa en 2 a 4 días hábiles una vez colocada la piscina.",
    },
    {
      q: "¿Qué tipo de césped colocan?",
      a: "Colocamos césped natural en rollos o panes, seleccionando variedades de alta densidad y resistencia, aptas para el tránsito descalzo cerca del agua.",
    },
    {
      q: "¿Qué costo tienen estos trabajos?",
      a: "El costo depende enteramente de las medidas del patio a acondicionar, los metros de pared a revocar y si se incluye cascada. Se define en la inspección técnica.",
    },
  ],
  finalCtaTitle: (
    <>
      ¿Querés un patio verde
      <span className="block text-aqua">y prolijo para tu piscina?</span>
    </>
  ),
  finalCtaBody:
    "Decinos qué te gustaría mejorar de tu patio y te preparamos una propuesta de jardinería y albañilería sin compromiso.",
};

function Page() {
  return <ServicePage data={data} />;
}
