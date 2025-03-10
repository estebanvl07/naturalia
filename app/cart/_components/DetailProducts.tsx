"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useCartContext } from "@/app/_context/cart";
import dataProducts from "@/resource/products.json";
import Resume from "./Resume";
import CartTable from "./Table";

export const getPriceByQuantity = (
  productId: number,
  newQuantity: number
): number => {
  const currentProduct = dataProducts.find((p) => p.id === productId);
  if (newQuantity === 1) return currentProduct?.price.unity as number;
  if (newQuantity === 2) return currentProduct?.price.two_unity as number;
  if (newQuantity === 3) return currentProduct?.price.three_unity as number;

  return (
    (currentProduct?.price.unity as number) * newQuantity -
    (currentProduct?.price.unity as number) -
    16000
  );
};

const DetailProducts = () => {
  const { products, setTotal } = useCartContext();

  const subtotal = products.reduce(
    (sum, item) =>
      item.quantity > 0
        ? sum + getPriceByQuantity(item.id, item.quantity)
        : sum,
    0
  );

  const total = subtotal;

  useEffect(() => {
    setTotal(total);
  }, [total]);

  return (
    <div className="grid gap-8 md:grid-cols-3">
      <div className="md:col-span-2 overflow-x-auto">
        <CartTable />
      </div>
      <Resume />
    </div>
  );
};

export default DetailProducts;
