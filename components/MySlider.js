"use client";
import React, { useState, useEffect } from "react";
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

export default function MySlider({ imagesTop, imagesBottom }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Define your image URLs here
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesTop.length);
    }, 4000); // Auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [imagesTop.length]);

  return (
    <div className="max-w-screen-2xl mt-2 mx-auto px-2 xl:px-20 ">
      <Carousel className="w-full" selectedindex={currentIndex}>
        <CarouselContent>
          <div
            className="flex transition-transform duration-500 relative"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {imagesTop.map((item, index) => (
              <div key={index} className="min-w-full">
                <Image
                  src={IMAGE_SLIDES_URL + item.image}
                  alt={`Slide ${index + 1}`}
                  width={2100}
                  height={1200}
                  className="w-full object-cover aspect-[21/9]"
                />
              </div>
            ))}
          </div>
        </CarouselContent>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-3 absolute bottom-3 left-1/2 transform -translate-x-1/2 items-center">
          {imagesTop.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                currentIndex === index
                  ? "h-1 w-4 sm:w-9 sm:h-2 bg-dynamic scale-125 shadow-md"
                  : "h-1 w-2 sm:w-3 sm:h-3 bg-gray-400 opacity-70"
              } rounded-full`}
            ></div>
          ))}
        </div>

        {/* Uncomment the buttons if you want manual controls */}
        {/* 
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
        */}
      </Carousel>
      <div className=" mt-2 md:mt-5 mx-auto">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full overflow-hidden "
        >
          <CarouselContent>
            {imagesBottom.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 pl-0 lg:basis-1/3 "
              >
                <div className="p-1">
                  <Card className="rounded-none ">
                    <CardContent className="p-0 flex  items-center justify-center">
                      <Image
                        src={IMAGE_SLIDES_URL + item.image}
                        alt={`src ${index + 1}`}
                        width={1600}
                        height={900}
                        className="aspect-[21/9] object-cover"
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
      </div>
    </div>
  );
}
