export const WHATSAPP_NUMBER = "59898670636";

export const whatsappMessages = {
  home: "Hola FYE, quiero consultar por una piscina para mi casa. Me gustaría que me orienten con opciones y próximos pasos.",
  diagnostic:
    "Hola FYE, quiero pedir una recomendación para mi proyecto de piscina. Les paso algunos datos para que me orienten.",
  offer:
    "Hola FYE, quiero conocer la propuesta de Piscina Lista para Disfrutar y ver si aplica para mi casa.",
  availability:
    "Hola FYE, quiero consultar disponibilidad para avanzar con un proyecto de piscina.",
  service: (service: string) =>
    `Hola FYE, quiero consultar por ${service}. Me gustaría que me orienten con opciones y próximos pasos.`,
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
