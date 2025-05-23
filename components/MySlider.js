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
      <Carousel plugins={[plugin.current]} setApi={setApi}>
        <CarouselContent>
          {imagesTop.map((item, index) => (
            <CarouselItem key={index} className="p-0">
              <Link className="relative group block" href={item.link || "#"}>
                <Image
                  src={IMAGE_SLIDES_URL + item.image}
                  alt={`Slide ${index + 1}`}
                  width={2100}
                  height={1200}
                  className="w-full object-cover aspect-[21/9] transition-all duration-300 hover:brightness-90"
                />
                <p className="absolute bottom-5 right-5 bg-black/70 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg transition-all duration-300 group-hover:bg-blue-600">
                  Learn More
                </p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />

        {/* Dot Indicators */}
        <div className="absolute flex items-center justify-center space-x-2 sm:space-x-3 transform -translate-x-1/2 bottom-4 left-1/2">
          {imagesTop.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                currentIndex === index
                  ? "h-1.5 w-6 sm:w-8 bg-blue-600 scale-125 shadow-lg"
                  : "h-1.5 w-3 bg-gray-400 opacity-70"
              } rounded-full`}
            />
          ))}
        </div>
      </Carousel>

      {/* Bottom Carousel */}
      <div className="mx-auto mt-2">
        <Carousel opts={{ align: "start" }}>
          <CarouselContent className="-ml-2">
            {imagesBottom.map((item, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/2 lg:basis-1/4">
                <Card className="rounded-none shadow-none border">
                  <CardContent className="flex items-center justify-center p-0">
                    <Link className="relative group" href={item.link || "#"}>
                      <Image
                        src={IMAGE_SLIDES_URL + item.image}
                        alt={`src ${index + 1}`}
                        width={1600}
                        height={900}
                        className="aspect-[21/9] object-cover hover:cursor-pointer"
                      />
                      <p className="absolute whitespace-nowrap bottom-4 right-4 bg-black/70 text-white text-sm px-4 py-2 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-blue-600">
                        Learn More
                      </p>
                    </Link>
                  </CardContent>
                </Card>
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
