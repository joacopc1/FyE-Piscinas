import heroPool from "@/assets/hero-pool.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export type WorkCategory =
  | "Todas"
  | "Piscinas instaladas"
  | "Jacuzzi / Spa"
  | "Reformas"
  | "Climatización";

export type Work = {
  id: string;
  title: string;
  category: Exclude<WorkCategory, "Todas">;
  location: string;
  duration: string;
  image: string;
  alt: string;
  summary: string;
  initial: string;
  recommendation: string;
  process: string[];
  result: string;
  quote: string;
};

export const workFilters: WorkCategory[] = [
  "Todas",
  "Piscinas instaladas",
  "Jacuzzi / Spa",
  "Reformas",
  "Climatización",
];

export const works: Work[] = [
  {
    id: "residencia-familiar",
    title: "Residencia familiar",
    category: "Piscinas instaladas",
    location: "Canelones",
    duration: "12 días",
    image: work1,
    alt: "Piscina rectangular vista desde arriba en una residencia familiar",
    summary: "Un patio que necesitaba orden, claridad de medidas y una instalación sin vueltas.",
    initial:
      "La familia quería una piscina para uso diario, pero no tenía claro qué tamaño convenía ni cómo resolver el acceso de obra.",
    recommendation:
      "Se recomendó un casco adecuado para el espacio, con instalación completa y terminaciones pensadas para el uso familiar.",
    process: [
      "Evaluación del espacio, medidas y orientación del sol.",
      "Definición de modelo, ubicación y terminaciones alrededor de la piscina.",
      "Coordinación de instalación, puesta en marcha y explicación inicial de uso.",
    ],
    result:
      "Un exterior más usable para la familia, con una piscina lista para estrenarse antes del cierre de la temporada.",
    quote: "Nos ayudaron a entender todo antes de decidir. Eso nos dio mucha tranquilidad.",
  },
  {
    id: "casa-de-verano",
    title: "Casa de verano",
    category: "Piscinas instaladas",
    location: "Maldonado",
    duration: "10 días",
    image: work2,
    alt: "Familia disfrutando una piscina instalada en una casa de verano",
    summary: "Proyecto pensado para llegar a temporada con la piscina instalada y funcionando.",
    initial:
      "El objetivo era llegar con la casa lista para recibir familia y amigos, evitando demoras de último momento.",
    recommendation:
      "Se priorizó una solución de rápida instalación, con modelo cómodo para niños y adultos, y puesta en marcha guiada.",
    process: [
      "Revisión del terreno y fecha objetivo de estreno.",
      "Selección de modelo según uso familiar y circulación del jardín.",
      "Instalación coordinada para llegar con margen a la fecha de uso.",
    ],
    result:
      "La piscina quedó operativa antes de la fecha prevista, con el cliente entendiendo cuidados básicos desde el primer día.",
    quote: "Lo mejor fue que sabíamos qué iba a pasar en cada etapa.",
  },
  {
    id: "jardin-con-vista",
    title: "Jardín con vista",
    category: "Reformas",
    location: "Punta Ballena",
    duration: "18 días",
    image: work3,
    alt: "Piscina integrada a un jardín con vista y arquitectura moderna",
    summary: "Un proyecto donde la piscina tenía que integrarse al paisaje, no competir con él.",
    initial:
      "La casa ya tenía un exterior fuerte visualmente, pero el área de agua no estaba bien integrada al uso del jardín.",
    recommendation:
      "Se trabajó la ubicación, terminaciones y entorno para que la piscina funcionara como extensión natural de la casa.",
    process: [
      "Lectura del entorno, vistas principales y zonas de sombra.",
      "Ajuste de terminaciones para acompañar la arquitectura existente.",
      "Entrega con recomendaciones de cuidado para preservar el resultado.",
    ],
    result:
      "Una piscina más integrada al paisaje y una zona exterior con más presencia para reuniones y descanso.",
    quote: "No quedó como un agregado. Quedó como parte de la casa.",
  },
  {
    id: "spa-exterior",
    title: "Spa exterior",
    category: "Jacuzzi / Spa",
    location: "Montevideo",
    duration: "7 días",
    image: heroPool,
    alt: "Área exterior con piscina y casa moderna al atardecer",
    summary: "Bienestar en casa, con una solución pensada para uso frecuente y bajo mantenimiento.",
    initial:
      "El cliente quería sumar una experiencia de relax sin transformar todo el jardín ni encarar una obra pesada.",
    recommendation:
      "Se planteó una solución tipo spa, con ubicación cercana a la casa y una puesta en uso simple.",
    process: [
      "Definición del uso esperado: relax, reuniones chicas y temporada extendida.",
      "Revisión de ubicación, conexión y circulación.",
      "Instalación y explicación de cuidados iniciales.",
    ],
    result: "Un espacio nuevo de bienestar, usable varias veces por semana y fácil de sostener.",
    quote: "Fue una forma simple de usar mucho más el fondo de casa.",
  },
  {
    id: "temporada-extendida",
    title: "Temporada extendida",
    category: "Climatización",
    location: "Ciudad de la Costa",
    duration: "5 días",
    image: work2,
    alt: "Piscina familiar en uso durante una tarde soleada",
    summary: "Climatización para aprovechar mejor la inversión y usar la piscina más meses.",
    initial:
      "La piscina ya estaba instalada, pero se usaba menos de lo esperado por temperatura y cambios de clima.",
    recommendation:
      "Se propuso climatización para extender la temporada, con foco en eficiencia y comodidad de uso.",
    process: [
      "Revisión del equipo existente y hábitos de uso.",
      "Definición de sistema adecuado al tamaño de piscina.",
      "Instalación, prueba y explicación de uso responsable.",
    ],
    result: "La familia ganó más semanas reales de uso sin cambiar la piscina que ya tenía.",
    quote: "La piscina dejó de ser solo para los días perfectos.",
  },
  {
    id: "puesta-a-punto",
    title: "Puesta a punto",
    category: "Reformas",
    location: "Piriápolis",
    duration: "9 días",
    image: work1,
    alt: "Piscina rectangular terminada y limpia vista desde arriba",
    summary: "Recuperar una piscina existente para que vuelva a verse y sentirse disfrutable.",
    initial:
      "La piscina estaba operativa, pero el entorno y algunos detalles de uso hacían que se aprovechara poco.",
    recommendation:
      "Se ordenaron prioridades: limpieza técnica, revisión, mejoras de terminación y guía de mantenimiento.",
    process: [
      "Diagnóstico del estado real de la piscina.",
      "Plan de intervención priorizado según impacto y costo.",
      "Entrega con cuidados recomendados para sostener el resultado.",
    ],
    result: "Una piscina recuperada, más clara visualmente y más simple de mantener en temporada.",
    quote: "Nos ayudaron a decidir qué valía la pena hacer y qué no.",
  },
];

export function getWorkById(id: string) {
  return works.find((work) => work.id === id);
}
