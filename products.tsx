// Sample data for products page
const products = [
  {
    id: 1,
    name: "Vitamina C 1000mg",
    category: "Vitaminas",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300&text=Vitamina+C",
    rating: 5,
    reviews: 124,
    isNew: false,
    discount: 0,
  },
  {
    id: 2,
    name: "Omega 3 Premium",
    category: "Suplementos",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300&text=Omega+3",
    rating: 4,
    reviews: 89,
    isNew: false,
    discount: 10,
  },
  {
    id: 3,
    name: "Magnesio Natural",
    category: "Minerales",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300&text=Magnesio",
    rating: 4,
    reviews: 56,
    isNew: false,
    discount: 0,
  },
  {
    id: 4,
    name: "Multivitamínico Diario",
    category: "Vitaminas",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300&text=Multivitamínico",
    rating: 5,
    reviews: 112,
    isNew: true,
    discount: 0,
  },
  {
    id: 5,
    name: "Proteína Vegetal",
    category: "Suplementos",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300&text=Proteína",
    rating: 4,
    reviews: 78,
    isNew: false,
    discount: 15,
  },
  {
    id: 6,
    name: "Vitamina D3 + K2",
    category: "Vitaminas",
    price: 22.99,
    image: "/placeholder.svg?height=300&width=300&text=Vitamina+D3",
    rating: 5,
    reviews: 94,
    isNew: true,
    discount: 0,
  },
  {
    id: 7,
    name: "Colágeno Hidrolizado",
    category: "Suplementos",
    price: 27.99,
    image: "/placeholder.svg?height=300&width=300&text=Colágeno",
    rating: 4,
    reviews: 67,
    isNew: false,
    discount: 0,
  },
  {
    id: 8,
    name: "Zinc + Selenio",
    category: "Minerales",
    price: 18.99,
    image: "/placeholder.svg?height=300&width=300&text=Zinc",
    rating: 4,
    reviews: 45,
    isNew: false,
    discount: 5,
  },
  {
    id: 9,
    name: "Aceite de Krill",
    category: "Suplementos",
    price: 32.99,
    image: "/placeholder.svg?height=300&width=300&text=Aceite+Krill",
    rating: 5,
    reviews: 83,
    isNew: false,
    discount: 0,
  },
  {
    id: 10,
    name: "Probióticos Digestivos",
    category: "Suplementos",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300&text=Probióticos",
    rating: 4,
    reviews: 72,
    isNew: true,
    discount: 0,
  },
  {
    id: 11,
    name: "Hierro + Vitamina C",
    category: "Minerales",
    price: 21.99,
    image: "/placeholder.svg?height=300&width=300&text=Hierro",
    rating: 4,
    reviews: 58,
    isNew: false,
    discount: 0,
  },
  {
    id: 12,
    name: "Melatonina Natural",
    category: "Suplementos",
    price: 15.99,
    image: "/placeholder.svg?height=300&width=300&text=Melatonina",
    rating: 5,
    reviews: 104,
    isNew: false,
    discount: 10,
  },
]

import Link from "next/link"
import Image from "next/image"
import { Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (same as in page.tsx) */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-green-600"
            >
              <path d="M11 9L9 11 11 13 13 11z"></path>
              <path d="M16 15L14 17 16 19 18 17z"></path>
              <path d="M5 5L3 7 5 9 7 7z"></path>
              <path d="M16.5 2.5c.4 1.5.8 3 .8 4.5a4.5 4.5 0 0 1-9 0c0-1.5.4-3 .8-4.5"></path>
              <path d="M18.5 9.5c1.5.4 3 .8 4.5.8a4.5 4.5 0 0 1 0 9c-1.5 0-3-.4-4.5-.8"></path>
              <path d="M2.5 14.5c-.4 1.5-.8 3-.8 4.5a4.5 4.5 0 0 0 9 0c0-1.5-.4-3-.8-4.5"></path>
            </svg>
            <span className="text-xl font-bold text-green-800">Naturalia</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Inicio
            </Link>
            <Link href="/products" className="text-sm font-medium text-primary">
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
        {/* Page Header */}
        <section className="w-full py-12 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                  Nuestros Productos
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Descubre nuestra amplia selección de vitaminas y productos naturales para tu bienestar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            {/* Filters and Search */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filtrar por:</span>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las categorías</SelectItem>
                    <SelectItem value="vitamins">Vitaminas</SelectItem>
                    <SelectItem value="supplements">Suplementos</SelectItem>
                    <SelectItem value="minerals">Minerales</SelectItem>
                    <SelectItem value="organic">Productos Orgánicos</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Destacados</SelectItem>
                    <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                    <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                    <SelectItem value="newest">Más Recientes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar productos..." className="w-full md:w-[300px] pl-8" />
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products &&
                products.map((product) => (
                  <Link href={`/product/${product.id}`} key={product.id} className="group">
                    <Card className="overflow-hidden border hover:shadow-md transition-all">
                      <div className="relative h-60 w-full overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        {product.isNew && (
                          <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded">
                            Nuevo
                          </div>
                        )}
                        {product.discount > 0 && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                            -{product.discount}%
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">{product.category}</p>
                          <h3 className="font-semibold text-lg group-hover:text-green-700 line-clamp-2">
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            {product.discount > 0 ? (
                              <>
                                <span className="font-bold text-green-700">
                                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                                </span>
                                <span className="text-sm text-muted-foreground line-through">
                                  ${product.price.toFixed(2)}
                                </span>
                              </>
                            ) : (
                              <span className="font-bold text-green-700">${product.price.toFixed(2)}</span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 mt-2">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <svg
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill={i < product.rating ? "currentColor" : "none"}
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                                >
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                              ))}
                            <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                          </div>
                        </div>
                        <Button size="sm" className="w-full mt-4 bg-green-700 hover:bg-green-800">
                          Ver Detalles
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>

            {/* Pagination */}
            <Pagination className="mt-12">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
      </main>

      {/* Footer (same as in page.tsx) */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-green-600"
                >
                  <path d="M11 9L9 11 11 13 13 11z"></path>
                  <path d="M16 15L14 17 16 19 18 17z"></path>
                  <path d="M5 5L3 7 5 9 7 7z"></path>
                  <path d="M16.5 2.5c.4 1.5.8 3 .8 4.5a4.5 4.5 0 0 1-9 0c0-1.5.4-3 .8-4.5"></path>
                  <path d="M18.5 9.5c1.5.4 3 .8 4.5.8a4.5 4.5 0 0 1 0 9c-1.5 0-3-.4-4.5-.8"></path>
                  <path d="M2.5 14.5c-.4 1.5-.8 3-.8 4.5a4.5 4.5 0 0 0 9 0c0-1.5-.4-3-.8-4.5"></path>
                </svg>
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

