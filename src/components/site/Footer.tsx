import { Link } from "@tanstack/react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img
                src="/logo FYE Piscinas.png"
                alt="FYE Piscinas"
                className="h-10 w-auto"
                width={186}
                height={125}
              />
            </Link>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Diseñamos, instalamos y acompañamos proyectos de piscinas residenciales en Uruguay. Tu piscina lista para disfrutar.
          </p>
        </div>

        {/* Services column */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
            Servicios
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/piscina-lista-para-disfrutar" className="hover:text-foreground">
                Propuesta Completa
              </Link>
            </li>
            <li>
              <Link to="/piscinas-de-fibra" className="hover:text-foreground">
                Piscinas de fibra
              </Link>
            </li>
            <li>
              <Link to="/jacuzzi-spa" className="hover:text-foreground">
                Jacuzzi / Spa
              </Link>
            </li>
            <li>
              <Link to="/climatizacion" className="hover:text-foreground">
                Climatización
              </Link>
            </li>
          </ul>
        </div>

        {/* Info & Contact column */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
            Contacto
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Montevideo, Uruguay</li>
            <li>
              <a href="mailto:hola@fyepiscinas.uy" className="hover:text-foreground">
                hola@fyepiscinas.uy
              </a>
            </li>
            <li>
              <a href="https://wa.me/59899000000" target="_blank" rel="noopener" className="hover:text-foreground">
                +598 99 000 000
              </a>
            </li>
            <li className="pt-2">
              <Link to="/diagnostico" search={{ origen: "footer" }} className="inline-flex text-xs font-semibold text-primary hover:text-aqua">
                Pedir Diagnóstico →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Sub-footer Copyright */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-muted-foreground md:flex-row md:px-8">
          <span>© {currentYear} FYE Piscinas. Todos los derechos reservados.</span>
          <span>Hecho con cuidado en Uruguay.</span>
        </div>
      </div>
    </footer>
  );
}
