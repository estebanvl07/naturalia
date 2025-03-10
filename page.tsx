// Sample data
const featuredProducts = [
  {
    id: 1,
    name: "Vitamina C 1000mg",
    category: "Vitaminas",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300&text=Vitamina+C",
  },
  {
    id: 2,
    name: "Omega 3 Premium",
    category: "Suplementos",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300&text=Omega+3",
  },
  {
    id: 3,
    name: "Magnesio Natural",
    category: "Minerales",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300&text=Magnesio",
  },
  {
    id: 4,
    name: "Multivitamínico Diario",
    category: "Vitaminas",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300&text=Multivitamínico",
  },
]

const testimonials = [
  {
    name: "María García",
    location: "Madrid",
    comment:
      "Desde que empecé a tomar los suplementos de Naturalia, mi energía ha mejorado notablemente. ¡Los recomiendo totalmente!",
  },
  {
    name: "Carlos Rodríguez",
    location: "Barcelona",
    comment:
      "La calidad de los productos es excepcional. He probado varias marcas y Naturalia es sin duda la mejor opción.",
  },
  {
    name: "Laura Martínez",
    location: "Valencia",
    comment: "El servicio al cliente es excelente y los productos llegan rápidamente. Muy satisfecha con mi compra.",
  },
]

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, ShieldCheck, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-green-800">Naturalia</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-primary">
              Inicio
            </Link>
            <Link href="/products" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Productos
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Nosotros
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Iniciar Sesión
            </Button>
            <Button size="sm">Comprar Ahora</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-800">
                    Bienestar Natural para Tu Vida Diaria
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Descubre nuestra selección de vitaminas y productos naturales para mejorar tu salud y bienestar.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/products">
                    <Button size="lg" className="bg-green-700 hover:bg-green-800">
                      Ver Productos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Conocer Más
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Productos naturales"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                  ¿Por qué elegir Naturalia?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nos comprometemos a ofrecerte productos de la más alta calidad para tu bienestar.
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
                    Todos nuestros productos son elaborados con ingredientes naturales de la más alta calidad.
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
                    Productos certificados que cumplen con los más altos estándares de calidad y seguridad.
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
                    Entrega a domicilio en todo el país. Recibe tus productos en la puerta de tu casa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="w-full py-12 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6">
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
                  <Link href={`/product/${product.id}`} key={product.id} className="group">
                    <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
                      <div className="relative h-60 w-full overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg group-hover:text-green-700">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="font-bold text-green-700">${product.price.toFixed(2)}</span>
                          <Button size="sm" variant="outline" className="text-xs">
                            Ver Detalles
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/products">
                <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                  Ver Todos los Productos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                  Lo que dicen nuestros clientes
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Testimonios de personas que han mejorado su bienestar con nuestros productos.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-green-100">
                  <CardContent className="pt-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=50&width=50&text=${testimonial.name.charAt(0)}`}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                  Únete a nuestra comunidad
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Recibe consejos de bienestar, ofertas exclusivas y novedades sobre nuestros productos.
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
                <p className="text-xs text-muted-foreground">Al suscribirte, aceptas nuestra política de privacidad.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-green-600" />
                <span className="text-xl font-bold text-green-800">Naturalia</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Productos naturales para mejorar tu bienestar y calidad de vida.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-muted-foreground hover:text-primary">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categorías</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Vitaminas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Suplementos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Productos Orgánicos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Cuidado Personal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">Calle Principal 123, Ciudad</li>
                <li className="text-muted-foreground">info@naturalia.com</li>
                <li className="text-muted-foreground">+123 456 7890</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6">
            <p className="text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Naturalia. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

