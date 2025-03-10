"use client";

import { CartItem } from "@/types/cart/cart.types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
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
  const [products, setProducts] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const storageProducts = JSON.parse(
      localStorage.getItem("n_products") || "[]"
    ) as CartItem[];
    setProducts(storageProducts);
  }, []);

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
