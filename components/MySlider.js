"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useState } from "react";
import Image from "next/image";

export default function MySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 5;

  const imageUrls = [
    "/assets/images/image3.png",
    "/assets/images/imag1.jpg",
    "/assets/images/image2.jpg",
    "/assets/images/image3.png",
  ];
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-20 ">
        <Carousel className="w-full" selectedIndex={currentIndex}>
          <CarouselContent>
            {imageUrls.map((src, index) => (
              <CarouselItem key={index}>
                <Image
                  src={src}
                  width={3000}
                  height={3000}
                  className="w-full h-[400px] aspect-video object-cover"
                  alt={`Image ${index + 1}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
        </Carousel>
      </div>
    </>
  );
}
