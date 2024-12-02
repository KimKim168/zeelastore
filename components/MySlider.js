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
    "/assets/images/image3.png",
    "/assets/images/image2.jpg",
    "/assets/images/image7.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="max-w-screen-2xl mt-2 mx-auto px-2 xl:px-20">
      <Carousel className="w-full" selectedIndex={currentIndex}>
        <CarouselContent>
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((src, index) => (
              <div key={index} className="min-w-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={1200}
                  height={1200}
                  className="object-cover w-full aspect-video h-[400px]"
                />
              </div>
            ))}
          </div>
        </CarouselContent>
        {/* Uncomment the buttons if you want manual controls */}
        {/* 
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
        */}
      </Carousel>
    </div>
  );
}
