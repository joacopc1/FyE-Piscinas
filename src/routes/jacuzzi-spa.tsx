import { createFileRoute } from "@tanstack/react-router";
import { Clock, Compass, FileText, ShieldCheck } from "lucide-react";

import { ServicePage, type ServicePageData } from "@/components/site/ServicePage";

import heroSpa from "@/assets/service-spa.jpg";

export const Route = createFileRoute("/jacuzzi-spa")({
  head: () => ({
    meta: [
      { title: "Jacuzzi y Spa en casa — FYE Piscinas" },
      {
        name: "description",
        content:
          "Asesoramiento, instalación y acompañamiento de jacuzzis y spas residenciales. Bienestar durante todo el año en tu casa.",
      },
      { property: "og:title", content: "Jacuzzi y Spa en casa — FYE Piscinas" },
      {
        property: "og:description",
        content: "Bienestar en cualquier época del año, instalado y acompañado por FYE.",
      },
      { property: "og:image", content: heroSpa },
    ],
  }),
  component: Page,
});

const data: ServicePageData = {
  slug: "jacuzzi-spa",
  label: "Jacuzzi / Spa",
  title: (
    <>
      Bienestar todo el año,
      <span className="block text-aqua/95">sin obras eternas.</span>
    </>
  ),
  subheadline:
    "Te ayudamos a elegir el jacuzzi adecuado para tu casa, lo instalamos con un proceso guiado y te acompañamos para que lo uses desde el primer día.",
  heroImage: heroSpa,
  forWho: [
    {
      title: "Familias que buscan relax",
      body: "Un espacio de descanso para usar en pareja o en familia después del día.",
    },
    {
      title: "Casas de fin de semana",
      body: "Para extender el disfrute de la casa durante todo el año, no solo en verano.",
    },
    {
      title: "Personas que entrenan",
      body: "Recuperación muscular y bienestar como parte de la rutina.",
    },
    {
      title: "Quien ya tiene piscina",
      body: "Sumar un spa como complemento sin mover toda la obra.",
    },
  ],
  includes: [
    "Asesoramiento inicial sobre ubicación y uso",
    "Recomendación del modelo según espacio y expectativas",
    "Coordinación de instalación eléctrica e hidráulica",
    "Puesta en marcha y primera orientación de uso",
    "Capacitación de cuidado y mantenimiento básico",
    "Acompañamiento postventa inicial",
  ],
  bonuses: [
    {
      title: "Guía de uso y cuidado",
      desc: "Pasos simples para sostener el agua y evitar errores comunes en las primeras semanas.",
    },
  ],
  process: [
    { title: "Consulta", body: "Hablamos de tu casa, expectativas y cómo querés usar el spa." },
    {
      title: "Recomendación",
      body: "Te mostramos opciones reales según espacio, capacidad y presupuesto.",
    },
    {
      title: "Instalación",
      body: "Coordinamos la obra eléctrica e hidráulica con tiempos claros.",
    },
    {
      title: "Acompañamiento",
      body: "Puesta en marcha guiada y soporte directo para las primeras semanas.",
    },
  ],
  trustTitle: "Confianza y respaldo.",
  trustBody:
    "Dejamos claro qué incluye el servicio, qué debe prepararse antes y qué respaldo tenés después de avanzar.",
  trustPoints: [
    { icon: FileText, title: "Alcance documentado antes de empezar" },
    { icon: Compass, title: "Recomendación honesta para tu caso" },
    { icon: ShieldCheck, title: "Garantía del equipo según fabricante" },
    { icon: Clock, title: "Soporte directo en las primeras semanas" },
  ],
  guaranteeHeadline: "Bienestar real, no improvisado.",
  guaranteeBody:
    "La garantía y condiciones finales dependen del equipo elegido. Lo importante es dejarlo claro antes de confirmar.",
  faqs: [
    {
      q: "¿Lo puedo poner adentro de casa?",
      a: "En muchos casos sí, pero hay que evaluar espacio, ventilación, desagüe y conexión eléctrica.",
    },
    {
      q: "¿Necesito obra previa?",
      a: "Generalmente se necesita una base nivelada y conexión adecuada. Se define antes de avanzar.",
    },
    {
      q: "¿Lo puedo usar en invierno?",
      a: "Sí, los spas están pensados para usarse todo el año manteniendo la temperatura del agua.",
    },
    {
      q: "¿Cuánto consume?",
      a: "Depende del modelo y del uso. La idea es estimarlo antes para que no haya sorpresas.",
    },
    {
      q: "¿Cuánto demora la instalación?",
      a: "Cuando la preparación está lista, suele resolverse en pocos días. Se confirma según cada caso.",
    },
  ],
  finalCtaTitle: (
    <>
      ¿Querés evaluar qué spa
      <span className="block text-aqua">tiene sentido para tu casa?</span>
    </>
  ),
  finalCtaBody:
    "Contanos qué tenés en mente y te orientamos con opciones claras antes de tomar una decisión.",
};

function Page() {
  return <ServicePage data={data} />;
}
