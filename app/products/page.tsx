import products from "@/resource/products.json";
import Product from "@/components/Product";

export default function ProductsPage() {
  return (
    <div>
      <section className="w-full py-12 bg-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                Nuestros Productos
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Descubre nuestra amplia selección de vitaminas y productos
                naturales para tu bienestar.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products &&
              products.map((product) => <Product {...product} isExtend />)}
          </div>
        </div>
      </section>
    </div>
  );
}
