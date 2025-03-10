// Sample data
import products from "@/resource/products.json";

const testimonials = [
  {
    name: "María García",
    location: "Cartagena",
    comment:
      "Desde que empecé a tomar los suplementos de Naturalia, mi energía ha mejorado notablemente. ¡Los recomiendo totalmente!",
  },
  {
    name: "Carlos Rodríguez",
    location: "Barranquilla",
    comment:
      "La calidad de los productos es excepcional. He probado varias marcas y Naturalia es sin duda la mejor opción.",
  },
  {
    name: "Laura Martínez",
    location: "Bogotá",
    comment:
      "El servicio al cliente es excelente y los productos llegan rápidamente. Muy satisfecha con mi compra.",
  },
];

const featuredProducts = products.sort((a, b) => b.rate - a.rate).slice(0, 4);

import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Product from "@/components/Product";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full relative bg-[url('/banner-bg.webp')] bg-bottom from-green-50 to-white">
        <div className="bg-black/30 w-full h-full py-28">
          <div className="container mx-auto px-4 md:px-6 z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-semibold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Bienestar Natural para Tu Vida Diaria
                  </h1>
                  <p className="max-w-[450px] text-white/90">
                    Descubre nuestra selección de vitaminas y productos
                    naturales para mejorar tu salud y bienestar.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/products">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent w-full md:w-fit rounded-xl text-white"
                    >
                      Ver Productos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="rounded-xl">
                    Conocer Más
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container items-center mx-auto px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 ">
              <h2 className="text-3xl font-semibold -tracking-wider sm:text-4xl md:text-5xl text-green-800">
                ¿Por qué elegir Naturalia?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nos comprometemos a ofrecerte productos de la más alta calidad
                para tu bienestar.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-green-100">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-green-100">
                  <Leaf className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold">100% Natural</h3>
                <p className="text-muted-foreground">
                  Todos nuestros productos son elaborados con ingredientes
                  naturales de la más alta calidad.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-green-100">
                  <ShieldCheck className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold">Certificados</h3>
                <p className="text-muted-foreground">
                  Productos certificados que cumplen con los más altos
                  estándares de calidad y seguridad.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-green-100">
                  <Truck className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold">Envío Rápido</h3>
                <p className="text-muted-foreground">
                  Entrega a domicilio en todo el país. Recibe tus productos en
                  la puerta de tu casa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Featured Products Section */}
      <section className="w-full py-12 md:py-24 bg-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                Productos Destacados
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre nuestra selección de productos más populares.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {featuredProducts &&
              featuredProducts.map((product) => (
                <Product {...product} key={product.id} />
              ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-green-700 text-green-700 hover:bg-green-50"
              >
                Ver Todos los Productos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                Lo que dicen nuestros clientes
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Testimonios de personas que han mejorado su bienestar con
                nuestros productos.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <Testimonial {...testimonial} key={index} />
            ))}
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
    </>
  );
}
