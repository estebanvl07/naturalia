import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
interface ITestimonial {
  name: string;
  location: string;
  comment: string;
}
const Testimonial = (props: ITestimonial) => {
  const { comment, location, name } = props;

  return (
    <Card className="border-green-100">
      <CardContent className="pt-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <Image
                src={`/placeholder.svg?height=50&width=50&text=${name.charAt(
                  0
                )}`}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
          </div>
          <p className="text-muted-foreground italic">"{comment}"</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
