import { CartItem } from "@/types/cart/cart.types";

interface WhatsAppMessageProps {
  data: {
    name: string;
    phone: string;
    city: string;
    department: string;
    address: string;
  };
  phone: number;
  cartItems: CartItem[];
  total: number;
}

export const sendWhatsAppMessage = async ({
  cartItems,
  phone,
  data,
  total,
}: WhatsAppMessageProps) => {
  const phoneNumber = `573001924603`; // Número de destino con código de país

  // Construir el mensaje con la lista de productos
  let messageText = `Estoy interesado en realizar la compra de los siguientes productos: \n\n`;

  cartItems.forEach((item, index) => {
    messageText += `*${item.name}*\n`;
    messageText += `- Cantidad: ${item.quantity}\n`;
    messageText += `- Precio: $${item.price.toLocaleString()}\n`;
    messageText += `- total: ${item.total.toLocaleString()}\n`; // WhatsApp no soporta links en texto enriquecido
    messageText += `- producto: ${process.env.NEXT_PUBLIC_FRONTEND_URL}/products/${item.id}\n\n`; // WhatsApp no soporta links en texto enriquecido
  });

  messageText += "*DETALLE DEL PEDIDO:*\n";
  messageText += `- *Cliente:* ${data.name}\n`;
  messageText += `- *Teléfono:* ${data.phone}\n`;
  messageText += `- *Dirección:* ${data.address}, ${data.city}, ${data.department}\n\n`;

  messageText += `*TOTAL A PAGAR:  ${total.toLocaleString()}*\n\n`;

  messageText += "*CONFIRMA TU PEDIDO RESPONDIENDO A ESTE MENSAJE.*";

  console.log(messageText);
  const encodedMessage = encodeURIComponent(messageText);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`);
};
