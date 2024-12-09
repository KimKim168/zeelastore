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
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function MySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define your image URLs here
  const images = [
    "/assets/images/slide1.png",
    "/assets/images/slide3.png",
    "/assets/images/slide4.png",
    "/assets/images/slide5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="max-w-screen-2xl mt-2 mx-auto px-2 xl:px-20 ">
      <Carousel className="w-full" selectedIndex={currentIndex}>
        <CarouselContent>
          <div
            className="flex transition-transform duration-500 relative"
            
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((src, index) => (
              <div key={index} className="min-w-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={4000}
                  height={4000}
                  className="w-full object-cover aspect-[21/9]"
                />
              </div>
            ))}
          </div>
        </CarouselContent>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-3 absolute bottom-3 left-1/2 transform -translate-x-1/2 items-center">
          {images.map((_, index) => (
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
    </div>
  );
}
