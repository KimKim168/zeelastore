"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { IMAGE_SLIDES_URL } from "@/env";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

export default function MySlider({ imagesTop, imagesBottom }) {
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  );

  const [api, setApi] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="px-2 mx-auto mt-2 max-w-screen-2xl xl:px-20">
      {/* Top Carousel */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full relative"
        setApi={setApi}
      >
        <CarouselContent>
          {imagesTop.map((item, index) => (
            <CarouselItem key={index} className="min-w-full">
              <Link className="relative group" href={item.link || "#"}>
                <Image
                  src={IMAGE_SLIDES_URL + item.image}
                  alt={`Slide ${index + 1}`}
                  width={2100}
                  height={1200}
                  className="w-full object-cover aspect-[21/9] hover:cursor-pointer"
                />
                <p className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-4 py-2 rounded-lg transition-all duration-300 opacity-100 hover:bg-blue-600">
                  Learn More
                </p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />

        {/* Dot Indicators */}
        <div className="absolute flex items-center justify-center space-x-3 transform -translate-x-1/2 bottom-3 left-1/2">
          {imagesTop.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                currentIndex === index
                  ? "h-1 w-4 sm:w-9 sm:h-2 bg-blue-600 scale-125 shadow-md"
                  : "h-1 w-2 sm:w-3 sm:h-3 bg-gray-400 opacity-70"
              } rounded-full`}
            />
          ))}
        </div>
      </Carousel>

      {/* Bottom Carousel */}
      <div className="mx-auto mt-2">
        <Carousel
          opts={{ align: "start" }}
          className="w-full gap-2 overflow-hidden"
        >
          <CarouselContent>
            {imagesBottom.map((item, index) => (
              <CarouselItem key={index} className="pl-0 basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card className="rounded-none border-none">
                    <CardContent className="flex items-center justify-center p-0">
                      <Link className="relative group" href={item.link || "#"}>
                        <Image
                          src={IMAGE_SLIDES_URL + item.image}
                          alt={`src ${index + 1}`}
                          width={1600}
                          height={900}
                          className="aspect-[21/9] object-cover hover:cursor-pointer"
                        />
                        <p className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-4 py-2 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-blue-600">
                          Learn More
                        </p>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
