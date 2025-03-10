import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCartContext } from "@/app/_context/cart";
import { getPriceByQuantity } from "./DetailProducts";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartTable = () => {
  const { products, setProducts } = useCartContext();

  const updateQuantity = (id: number, newQuantity: number) => {
    const productsQuantity = products.map((item) =>
      item.id === id
        ? {
            ...item,
            total: getPriceByQuantity(item.id, newQuantity),
            quantity: Math.max(0, newQuantity),
          }
        : item
    );
    setProducts(productsQuantity);
    localStorage.setItem("n_products", JSON.stringify(productsQuantity));
  };

  const removeItem = (id: number) => {
    const productsFiltered = products.filter((item) => item.id !== id);
    setProducts(productsFiltered);
    localStorage.setItem("n_products", JSON.stringify(productsFiltered));
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Producto</TableHead>
          <TableHead>Cantidad</TableHead>
          <TableHead>Precio</TableHead>
          <TableHead>Total</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="flex items-center space-x-3">
                <div className="relative h-16 w-16 rounded overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{item.name}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number.parseInt(e.target.value, 10))
                  }
                  className="w-14 text-center"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
            <TableCell>${item.price.toLocaleString()}</TableCell>
            <TableCell>
              $
              {item.quantity > 0
                ? getPriceByQuantity(item.id, item.quantity).toLocaleString()
                : 0}
            </TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CartTable;
