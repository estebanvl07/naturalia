import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-32">
          <div className="space-y-4">
            <Link href={"/"}>
              <Image
                src="/naturalia.png"
                alt="Logo de naturalia"
                width={180}
                height={80}
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Productos naturales para mejorar tu bienestar y calidad de vida.
            </p>
          </div>
          <div className="flex-grow flex flex-col md:flex-row items-start justify-start gap-8 md:gap-20">
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Productos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Suscribete
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Vitaminas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Suplementos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Productos Orgánicos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Cuidado Personal
                </Link>
              </li>
            </ul>
          </div> */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm">
                {/* <li className="text-muted-foreground">info@naturalia.com</li> */}
                <li className="text-muted-foreground">(+57) 300 192 4603</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Naturalia. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
