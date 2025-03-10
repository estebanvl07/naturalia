"use client";

import { useCartContext } from "@/app/_context/cart";
import BuyConfirmation from "@/components/BuyConfirmation";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Resume = () => {
  const [showModal, setShowModal] = useState(false);
  const { total } = useCartContext();

  return (
    <div>
      <BuyConfirmation isOpen={showModal} onClose={() => setShowModal(false)} />

      <div className="bg-muted p-6 rounded-lg">
        <h2 className="text-lg font-semibold">Resumen del Pedido</h2>
        <div className="space-y-2">
          <div className="flex flex-col justify-between font-semibold">
            <span>Total</span>
            <span className="text-xl">${total.toLocaleString()}</span>
          </div>
        </div>
        <Button
          onClick={() => setShowModal(true)}
          className="w-full mt-6 bg-green-700 hover:bg-green-800"
        >
          Hacer Orden
        </Button>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Tenemos métodos de pago seguros</h3>
        <p className="text-sm text-muted-foreground">
          Aceptamos todas las tarjetas de crédito principales y PayPal. Tus
          datos están siempre protegidos.
        </p>
      </div>
    </div>
  );
};

export default Resume;
