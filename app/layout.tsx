import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "./_context/cart";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Naturalia",
  description: "Tienda de productos naturales",
  generator: "naturalia.dev",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${montserrat.variable} -tracking-wide`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            <CartProvider>
              <Header />
              <Toaster />
              {children}
              <Footer />
            </CartProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
