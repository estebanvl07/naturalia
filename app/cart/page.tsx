"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCartContext } from "../_context/cart";
import DetailProducts from "./_components/DetailProducts";

export default function CartPage() {
  const { products } = useCartContext();

  return (
    <div className="container mx-auto px-4 md:px-6 py-6">
      <h1 className="text-3xl font-bold mb-6">Carrito de Compras</h1>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">Tu carrito está vacío</h2>
          <p className="text-muted-foreground mb-4">
            Parece que aún no has añadido ningún producto a tu carrito.
          </p>
          <Link href="/products">
            <Button>Continuar Comprando</Button>
          </Link>
        </div>
      ) : (
        <DetailProducts />
      )}
    </div>
  );
}
