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
    "/assets/images/image5.png",
    "/assets/images/image6.png",
    "/assets/images/image4.png",
  ];
  return (
    <>
      {" "}
      {/* below slide */}
      <section className="max-w-screen-2xl mx-auto px-2 xl:px-20 ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full overflow-hidden"
        >
          <CarouselContent>
            {image.map((src, index) => (
              <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="rounded-none">
                    <CardContent className="p-0  flex aspect-video items-center justify-center">
                      <Image
                        src={src}
                        alt={`src ${index + 1}`}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
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
