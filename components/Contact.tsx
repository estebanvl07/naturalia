import React from "react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-green-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
              Únete a nuestra comunidad
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Recibe consejos de bienestar, ofertas exclusivas y novedades sobre
              nuestros productos.
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form className="flex space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                placeholder="Tu correo electrónico"
                type="email"
              />
              <Button type="submit" className="bg-green-700 hover:bg-green-800">
                Suscribirse
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              Al suscribirte, aceptas nuestra política de privacidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
