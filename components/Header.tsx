"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useCartContext } from "@/app/_context/cart";

const Header = () => {
  const { products } = useCartContext();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container px-4 md:px-0 mx-auto flex h-16 items-center justify-between">
        <aside className="flex items-center gap-x-12">
          <Link href={"/"}>
            <Image
              src="/naturalia.png"
              alt="Logo de naturalia"
              width={110}
              height={60}
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Inicio
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Productos
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Suscribete
            </Link>
          </nav>
        </aside>
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button size="sm" className="bg-green-700 hover:bg-green-800">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Carrito ({products.reduce((sum, item) => sum + item.quantity, 0)})
            </Button>
          </Link>
        </div>
      </div>
      <div className="bg-white md:hidden container mx-auto">
        <nav className="flex gap-x-4 px-4 mb-2">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Inicio
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Productos
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Suscribete
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
