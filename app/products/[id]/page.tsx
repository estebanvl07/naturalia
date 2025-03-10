"use client";
import products from "@/resource/products.json";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCartContext } from "../../_context/cart";
import Product from "@/components/Product";
import { CartItem } from "@/types/cart/cart.types";
import { getPriceByQuantity } from "@/app/cart/_components/DetailProducts";
import { toast } from "sonner";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const productId = Number.parseInt(params.id);
  const { products: productsCart, setProducts } = useCartContext();
  // Find the product by ID (in a real app, this would be a data fetch)
  const product = products.find((p) => p.id === productId);

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const addToCart = () => {
    if (!product) return;

    const isExist = productsCart.find((p) => product.id === p.id);

    const data: CartItem = {
      id: product?.id,
      name: product?.name,
      price: product?.price.unity,
      image: product.images[0],
      total: getPriceByQuantity(product.id, quantity),
      quantity,
    };

    if (isExist) {
      const prevProducts = productsCart.filter((p) => p.id !== product.id);
      setProducts(() => [...prevProducts, data]);
      toast.success("Producto agregado al carrito");
      return;
    }

    setProducts((prev) => [...prev, data]);
    localStorage.setItem("n_products", JSON.stringify([...productsCart, data]));
  };

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6 py-4">
        <nav className="flex text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary">
            Productos
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <section className="container mx-auto px-4 md:px-6 py-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
              <Image
                src={
                  product.images
                    ? product.images[activeImage]
                    : product.images[0]
                }
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.discount > 0 && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                  -{product.discount}%
                </div>
              )}
              {product.isNew && (
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded">
                  Nuevo
                </div>
              )}
            </div>
            <div className="flex gap-2 overflow-auto pb-2">
              {product.images ? (
                product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border ${
                      activeImage === index ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))
              ) : (
                <button className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border ring-2 ring-primary">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </button>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < product.rate
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({product.reviews} reseñas)
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  Categoría: {product.category}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                {product.discount > 0 ? (
                  <>
                    <span className="text-3xl font-bold text-green-700">
                      $
                      {(
                        product.price.unity *
                        (1 - product.discount / 100)
                      ).toFixed(2)}
                    </span>
                    <span className="text-xl text-muted-foreground line-through">
                      ${product.price.unity.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-green-700">
                    ${product.price.unity.toLocaleString()}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground">
                {product.description ||
                  "Suplemento natural de alta calidad para mejorar tu bienestar diario. Elaborado con ingredientes premium seleccionados para garantizar la máxima eficacia."}
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">Cantidad:</span>
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-none"
                    onClick={decrementQuantity}
                  >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span className="w-10 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-none"
                    onClick={incrementQuantity}
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex-1 bg-green-700 hover:bg-green-800"
                  onClick={addToCart}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Añadir al Carrito
                </Button>
                <Button variant="outline" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Añadir a Favoritos
                </Button>
              </div>
            </div>

            <Separator />

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="details">
                <AccordionTrigger>Detalles del Producto</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Ingredientes:</div>
                    <div>{product.detail.ingredients || "60 cápsulas"}</div>
                    <div className="text-muted-foreground">Contenido:</div>
                    <div>{product.detail.content || "1-2 cápsulas al día"}</div>
                    <div className="text-muted-foreground">Presentación:</div>
                    <div>
                      {product.detail.presentation || "Fabricado en España"}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Envío y Devoluciones</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    Envío gratuito en pedidos superiores a $50. Entrega en 2-5
                    días laborables. Devoluciones gratuitas dentro de los 30
                    días posteriores a la recepción.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <Tabs defaultValue="use">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger
              value="use"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none py-3"
            >
              Modo de uso
            </TabsTrigger>
            <TabsTrigger
              value="cautions"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none py-3"
            >
              Precauciones
            </TabsTrigger>
            {product.questions.length > 0 && (
              <TabsTrigger
                value="questions"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none py-3"
              >
                Preguntas Frecuentes
              </TabsTrigger>
            )}
          </TabsList>
          <TabsContent value="use" className="pt-4">
            <ul className="list-decimal px-6">
              {product.use_mode.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="cautions" className="pt-4">
            <ul className="list-disc px-6">
              {product.cautions.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="questions" className="pt-4">
            <ul className="px-6 gap-x-20 gap-y-4 grid grid-cols-1 md:grid-cols-2">
              {product.questions.map(({ quest, response }, i) => (
                <li className="mb-2" key={i}>
                  <h5 className="font-medium uppercase">{quest}</h5>
                  <p>{response}</p>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </section>

      {/* Related Products */}
      <section className="px-4 md:px-6 py-12 bg-green-50">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                Productos Relacionados
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Otros productos que podrían interesarte
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {products &&
              products
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Product key={relatedProduct.id} {...relatedProduct} />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}
