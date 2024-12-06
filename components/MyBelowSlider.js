"use client";
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function MyBelowSlider() {
  const image = [
    "/assets/images/product5.png",
    "/assets/images/product9.jpg",
    "/assets/images/product10.png",
  ];
  return (
    <>
      {" "}
      {/* below slide */}
      <section className="max-w-screen-2xl mt-2 mx-auto px-2 xl:px-20 ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full overflow-hidden "
        >
          <CarouselContent>
            {image.map((src, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 pl-0 lg:basis-1/3 "
              >
                <div className="p-1">
                  <Card className="rounded-none ">
                    <CardContent className="p-0 flex  items-center justify-center">
                      <Image
                        src={src}
                        alt={`src ${index + 1}`}
                        width={400}
                        height={400}
                        className="aspect-[16/10] object-scale-down"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious varient="outline" />
          <CarouselNext />
        </Carousel>
      </section>
      {/*End below slide */}
    </>
  );
}
