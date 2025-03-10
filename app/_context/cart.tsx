"use client";

import { CartItem } from "@/types/cart/cart.types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type Cart = {
  products: CartItem[];
  setProducts: Dispatch<SetStateAction<CartItem[]>>;
  total: number;
  setTotal: Dispatch<SetStateAction<number>>;
};

const CartContext = createContext<Cart>({
  products: [],
  setProducts: () => {},
  total: 0,
  setTotal: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const storageProducts = JSON.parse(
    localStorage.getItem("n_products") as any
  ) as CartItem[];

  const [products, setProducts] = useState<CartItem[]>(storageProducts || []);
  const [total, setTotal] = useState<number>(0);

  return (
    <CartContext.Provider value={{ products, setProducts, total, setTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContext");
  }
  return context;
};
