import heroPool from "@/assets/hero-pool.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export type WorkCategory =
  | "Todas"
  | "Piscinas instaladas"
  | "Reformas"
  | "Climatización";

export type ProcessStage = {
  title: string;
  description: string;
  mediaUrl?: string;
  mediaType?: "video" | "image";
};

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
  detailedProcess?: ProcessStage[];
  result: string;
  quote: string;
  testimonialImage?: string;
};

export const workFilters: WorkCategory[] = [
  "Todas",
  "Piscinas instaladas",
  "Reformas",
  "Climatización",
];

export const works: Work[] = [
  {
    id: "residencia-familiar",
    title: "Residencia familiar en Florida",
    category: "Piscinas instaladas",
    location: "Florida",
    duration: "15 días",
    image: "/Obra Familiar en residencia de florida.jpeg",
    alt: "Piscina rectangular instalada en residencia familiar en Florida",
    summary: "Instalación completa de piscina con vereda perimetral de baldosas atérmicas y bomba hidráulica automatizada en Florida.",
    initial:
      "La familia de María quería una piscina lista para disfrutar durante todo el verano. El patio tenía espacio de entrada apto pero requería evaluar los niveles del suelo antes de excavar.",
    recommendation:
      "Se recomendó un casco prefabricado clásico rectangular que optimiza el espacio de nado, junto con la instalación del sistema de bombeo y la vereda de losetas atérmicas de 50x50 cm.",
    process: [
      "Evaluación del terreno y confirmación de acceso de 3 metros para el camión.",
      "Excavación y preparación de la cama de arena compactada.",
      "Colocación del casco, conexionado hidráulico y llenado progresivo.",
      "Construcción de vereda perimetral y puesta en marcha del timer automático.",
    ],
    detailedProcess: [
      {
        title: "Paso 1: Traslado en Ruta del Casco",
        description: "Comenzamos el traslado sobredimensionado de la piscina de fibra de vidrio por ruta nacional hasta Florida, coordinando las medidas y el transporte especial.",
        mediaUrl: "/WhatsApp Image 2026-06-19 at 23.00.46 (1).jpeg",
        mediaType: "image",
      },
      {
        title: "Paso 2: Izado del Casco con Hidrogrúa",
        description: "Para superar la falta de acceso directo lateral, realizamos el izado y maniobra de la piscina sobre el techo de la casa de forma segura utilizando una hidrogrúa telescópica.",
        mediaUrl: "/WhatsApp Image 2026-06-19 at 23.00.44 (1).jpeg",
        mediaType: "image",
      },
      {
        title: "Paso 3: Excavación y Nivelación de Base",
        description: "Comenzamos la excavación del pozo, nivelando la base con una cama firme de arena y cemento semi-seco para asegurar un soporte completamente plano para la estructura.",
        mediaUrl: "/WhatsApp Image 2026-06-19 at 23.00.44.jpeg",
        mediaType: "image",
      },
      {
        title: "Paso 4: Asentamiento y Relleno de Contención",
        description: "Asentamos la piscina en su lugar definitivo y comenzamos el rellenado lateral de arena húmeda y cemento simultáneamente con el llenado de agua progresivo usando una excavadora.",
        mediaUrl: "/WhatsApp Image 2026-06-19 at 23.00.45 (3).jpeg",
        mediaType: "image",
      },
      {
        title: "Paso 5: Conexiones Hidráulicas y Filtros",
        description: "Realizamos el conexionado técnico de retornos, skimmer y luces LED hasta la caseta subterránea de filtros para la puesta en marcha hidráulica automática.",
        mediaUrl: "/conexion-hidraulica-y-filtros.png",
        mediaType: "image",
      },
    ],
    result:
      "Una piscina perfectamente asentada y nivelada, con veredas limpias y un sistema de filtrado programado listo para usar todos los días.",
    quote: "Nos dio mucha tranquilidad ver cómo controlaban el paso del camión y nos explicaron paso a paso cómo usar los filtros. Quedó genial.",
    testimonialImage: "/WhatsApp Image 2026-06-18 at 08.15.21.jpeg",
  },
  {
    id: "casa-de-verano",
    title: "Casa de descanso en Canelones",
    category: "Piscinas instaladas",
    location: "Canelones",
    duration: "8 días",
    image: work2,
    alt: "Piscina en casa de descanso con entorno terminado",
    summary: "Instalación express de piscina de fibra de vidrio con trámites de traslado y luces LED RGB.",
    initial:
      "El cliente necesitaba coordinar la llegada del camión de transporte sobredimensionado y tener la piscina instalada antes de las fiestas familiares.",
    recommendation:
      "Sugerimos un modelo compacto y funcional con playa húmeda integrada para descanso de adultos y niños, incluyendo focos LED RGB con control a distancia.",
    process: [
      "Trámite de permisos ante el MTOP para el transporte del casco.",
      "Excavación y nivelación rápida en suelo semi-arenoso.",
      "Descarga, colocación y relleno de contención lateral.",
      "Instalación de bomba, filtro de arena y tablero con timer protector.",
    ],
    detailedProcess: [
      {
        title: "Paso 1: Coordinación Hidráulica e Ingreso",
        description: "Se coordinó el traslado de carga pesada y se ingresó el casco al terreno, asegurando el área de maniobras y verificando las tomas de agua y electricidad en el jardín.",
        mediaUrl: "/WhatsApp Video 2026-06-18 at 08.07.16 (1).mp4",
        mediaType: "video",
      },
      {
        title: "Paso 2: Excavación del Pozo",
        description: "Avanzamos con la excavación en tierra y realizamos el perfilado de paredes. Compactamos el fondo para evitar asentamientos futuros en el suelo arenoso de Canelones.",
        mediaUrl: "/WhatsApp Video 2026-06-18 at 08.12.47.mp4",
        mediaType: "video",
      },
      {
        title: "Paso 3: Equipamiento y Luces LED",
        description: "Instalamos los retornos de agua, conectamos las luces LED RGB y rellenamos los laterales de la piscina con arena y cemento al tiempo que se cargaba de agua para evitar deformaciones en las paredes del casco.",
        mediaUrl: "/WhatsApp Video 2026-06-18 at 08.12.48.mp4",
        mediaType: "video",
      },
      {
        title: "Paso 4: Entrega y Explicación Técnica",
        description: "Pusimos a funcionar el sistema, programamos el timer de filtrado diario de 6 horas y explicamos cómo realizar el retrolavado y enjuague del filtro.",
        mediaUrl: "/WhatsApp Image 2026-06-18 at 08.25.37.jpeg",
        mediaType: "image",
      },
    ],
    result:
      "Piscina entregada dentro del plazo estimado, totalmente automatizada y lista para disfrutar con la familia.",
    quote: "Increíble la rapidez y el cuidado con el que trabajaron en el jardín. Las luces de noche quedan espectaculares.",
    testimonialImage: "/WhatsApp Image 2026-06-18 at 08.16.20.jpeg",
  },
  {
    id: "jardin-con-vista",
    title: "Obra y entorno en Durazno",
    category: "Reformas",
    location: "Durazno",
    duration: "12 días",
    image: work3,
    alt: "Piscina integrada a jardín con cascada decorativa y revoques de muros",
    summary: "Instalación de piscina de fibra integrada a un proyecto de jardinería, muro decorativo y cascada artificial.",
    initial:
      "El jardín presentaba un declive y muros perimetrales rústicos sin terminar. El cliente quería la piscina pero además deseaba embellecer todo el entorno visual.",
    recommendation:
      "Recomendamos la nivelación del terreno, la instalación del casco con su equipo de filtrado estándar, y sumamos trabajos de revoques en las paredes linderas y una cascada de agua decorativa.",
    process: [
      "Excavación técnica y contención del declive del patio.",
      "Colocación del casco prefabricado de fibra de vidrio.",
      "Construcción de muro decorativo con revoque fino y canal de cascada.",
      "Instalación de veredas y colocación de césped.",
    ],
    detailedProcess: [
      {
        title: "Paso 1: Nivelación y Excavación",
        description: "Trabajamos en la contención del suelo y la excavación principal. Preparamos los desagües y la red de tuberías reforzadas bajo tierra.",
        mediaUrl: "/WhatsApp Video 2026-06-18 at 08.12.49.mp4",
        mediaType: "video",
      },
      {
        title: "Paso 2: Construcción de Muros y Entorno",
        description: "Una vez asentada la piscina, levantamos y revocamos los muros de fondo y canalizamos la tubería que alimenta la cascada decorativa conectada a la bomba hidráulica.",
        mediaUrl: "/WhatsApp Image 2026-06-18 at 08.24.45.jpeg",
        mediaType: "image",
      },
      {
        title: "Paso 3: Vereda de Losetas y Césped",
        description: "Colocamos las losetas térmicas atérmicas de 50x50 cm, rellenamos las áreas verdes con césped a medida y realizamos la puesta en marcha de la cascada y recirculado de agua.",
        mediaUrl: "/WhatsApp Image 2026-06-18 at 08.25.36.jpeg",
        mediaType: "image",
      },
    ],
    result:
      "Un espacio de agua totalmente renovado y un entorno estético impecable que valoriza toda la propiedad.",
    quote: "Nos hicieron el pozo de la piscina y además nos levantaron el muro del fondo con una cascada espectacular. Muy completos.",
  },
  {
    id: "temporada-extendida",
    title: "Climatización en San José",
    category: "Climatización",
    location: "San José",
    duration: "4 días",
    image: work2,
    alt: "Instalación de sistema de climatización en piscina existente",
    summary: "Instalación de bomba de calor eficiente para piscina de fibra existente, garantizando el uso en otoño y primavera.",
    initial:
      "El cliente tenía una piscina de fibra que solo se usaba en los meses de calor intenso y deseaba climatizarla de forma eficiente.",
    recommendation:
      "Se propuso una bomba de calor de alta eficiencia, dimensionada para el volumen de litros de su piscina, con cobertura de 2 años de garantía oficial.",
    process: [
      "Evaluación del volumen de agua y la instalación eléctrica previa.",
      "Adecuación del bypass hidráulico en la caseta de la bomba.",
      "Instalación y anclaje físico de la bomba de calor al exterior.",
      "Conexión eléctrica, pruebas de consumo y ajuste de termostato.",
    ],
    detailedProcess: [
      {
        title: "Paso 1: Instalación de Bypass Hidráulico",
        description: "Realizamos los cortes y desvíos de cañerías en la caseta existente para crear la línea de bypass que enviará el agua filtrada hacia el calentador.",
        mediaUrl: "/WhatsApp Video 2026-06-18 at 08.12.50.mp4",
        mediaType: "video",
      },
      {
        title: "Paso 2: Conexión Eléctrica y Puesta en Marcha",
        description: "Anclamos el equipo en una base firme y realizamos la alimentación eléctrica segura, probando el flujo de agua y configurando la temperatura deseada en el panel digital.",
        mediaUrl: "/WhatsApp Video 2026-06-18 at 08.12.52.mp4",
        mediaType: "video",
      },
    ],
    result:
      "Piscina climatizada con temperatura constante, lista para ser usada más meses al año con un consumo controlado.",
    quote: "La bomba de calor funciona de maravilla y los consumos están muy bien. Ahora usamos la piscina mucho más tiempo.",
  },
  {
    id: "puesta-a-punto",
    title: "Reforma y mantenimiento en Florida",
    category: "Reformas",
    location: "Florida",
    duration: "5 días",
    image: work1,
    alt: "Reforma perimetral y puesta a punto de piscina",
    summary: "Reconstrucción de veredas perimetrales deterioradas y cambio técnico de arena de filtro en Florida.",
    initial:
      "La piscina ya tenía unos años de uso pero las veredas de tierra se desmoronaban y la arena del filtro ya no retenía la suciedad de forma óptima.",
    recommendation:
      "Propusimos retirar el perímetro viejo, construir un anillo de hormigón estructural alrededor del casco y colocar baldosas atérmicas de 50x50 cm, además de renovar la carga del filtro.",
    process: [
      "Retiro de bordes deteriorados y excavación perimetral de nivelación.",
      "Llenado del anillo de hormigón de contención estructural.",
      "Pegado de losetas térmicas de 50x50 cm.",
      "Limpieza y recambio técnico de la arena silícea del filtro.",
    ],
    detailedProcess: [
      {
        title: "Paso 1: Retiro de Bordes y Excavación",
        description: "Quitamos la vereda dañada y realizamos el zanjeo perimetral para verter el hormigón que fijará de forma definitiva las paredes del casco en Florida.",
        mediaUrl: "/WhatsApp Video 2026-06-18 at 08.12.54.mp4",
        mediaType: "video",
      },
      {
        title: "Paso 2: Colocación de Veredas Nuevas",
        description: "Nivelamos el borde y pegamos las losetas atérmicas nuevas de 50x50 cm, sellando las juntas y dejando un contorno limpio y seguro.",
        mediaUrl: "/WhatsApp Image 2026-06-18 at 08.25.37.jpeg",
        mediaType: "image",
      },
    ],
    result: "Entorno perimetral renovado, seguro y antideslizante con filtrado técnico al 100% de su capacidad.",
    quote: "La vereda atérmica quedó impecable y el agua se mantiene súper transparente ahora con el cambio de arena.",
    testimonialImage: "/WhatsApp Image 2026-06-18 at 08.21.47.jpeg",
  },
];

export function getWorkById(id: string) {
  return works.find((work) => work.id === id);
}
