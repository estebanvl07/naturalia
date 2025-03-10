import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { CardContent } from "./ui/card";
import { ProductType } from "@/types";

interface IProduct extends ProductType {
  isExtend?: boolean;
}

const Product = (props: IProduct) => {
  const {
    category,
    id,
    images,
    name,
    price,
    isNew,
    discount,
    isExtend,
    rate = 0,
    reviews = 0,
  } = props;

  return (
    <Link href={`/products/${id}`} className="group">
      <div className="overflow-hidden max-h-[32rem] flex flex-col justify-between h-full rounded-lg border bg-white transition-all">
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={images[0] || "/placeholder.svg"}
            alt={name}
            loading="lazy"
            className="object-contain w-full transition-transform group-hover:scale-105"
            width={250}
            height={250}
          />
          {isNew && (
            <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-xl">
              Nuevo
            </div>
          )}
          {discount !== 0 && discount > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-xl">
              -{discount}%
            </div>
          )}
        </div>

        {isExtend ? (
          <CardContent className="p-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{category}</p>
              <h3 className="font-semibold text-lg leading-5 group-hover:text-green-700 line-clamp-2">
                {name}
              </h3>
              <div className="flex items-center gap-2">
                {discount && discount > 0 ? (
                  <>
                    <span className="font-bold text-green-700">
                      ${(price.unity * (1 - discount / 100)).toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${price.unity.toLocaleString()}
                    </span>
                  </>
                ) : (
                  <span className="font-semibold text-xl text-green-700">
                    ${price.unity.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 mt-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={i < rate ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={i < rate ? "text-yellow-400" : "text-gray-300"}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                <span className="text-xs text-muted-foreground ml-1">
                  ({reviews})
                </span>
              </div>
            </div>
            <Button
              size="sm"
              className="w-full mt-4 bg-green-700 hover:bg-green-800"
            >
              Ver Detalles
            </Button>
          </CardContent>
        ) : (
          <div className="p-4">
            <h3 className="font-semibold text-lg group-hover:text-green-700">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">{category}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-bold text-green-700">
                ${price.unity.toLocaleString()}
              </span>
              <Button size="sm" variant="outline" className="text-xs">
                Ver Detalles
              </Button>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Product;
