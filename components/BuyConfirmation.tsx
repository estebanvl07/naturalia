import React, { FormEvent, useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { sendWhatsAppMessage } from "@/utils/sendWhatsappMessage";
import { useCartContext } from "@/app/_context/cart";

const BuyConfirmation = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: VoidFunction;
}) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const { products, total } = useCartContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      name,
      phone,
      city,
      department,
      address,
    };

    sendWhatsAppMessage({
      phone: Number(payload.phone),
      cartItems: products,
      data: payload,
      total,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-xl">Complete la información</h2>
        </DialogHeader>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            minLength={3}
            required
            placeholder="Nombre"
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            minLength={10}
            required
            placeholder="Teléfono"
          />
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Ciudad"
            required
          />
          <Input
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Departamento"
            required
          />
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            minLength={8}
            placeholder="Dirección"
            required
          />
          <Button>Confirmar Pedido</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BuyConfirmation;
