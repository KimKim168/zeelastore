"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

export default function MyCategories() {
  const imagesWithTitles = [
    { image: "/assets/images/apple.png", title: "Apple" },
    { image: "/assets/images/android.png", title: "Android" },
    { image: "/assets/images/windows.png", title: "Windows" },
    { image: "/assets/images/apple.png", title: "Apple" },
    { image: "/assets/images/android.png", title: "Android" },
    { image: "/assets/images/windows.png", title: "Windows" },
    { image: "/assets/images/apple.png", title: "Apple" },
    { image: "/assets/images/android.png", title: "Android" },
    { image: "/assets/images/windows.png", title: "Windows" },
    { image: "/assets/images/apple.png", title: "Apple" },
    { image: "/assets/images/android.png", title: "Android" },
    { image: "/assets/images/windows.png", title: "Windows" },
    { image: "/assets/images/apple.png", title: "Apple" },
    { image: "/assets/images/android.png", title: "Android" },
    { image: "/assets/images/windows.png", title: "Windows" },
    { image: "/assets/images/apple.png", title: "Apple" },
    { image: "/assets/images/android.png", title: "Android" },
  ];

  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-2 xl:px-20 py-5">
        <div>
          <div className="text-lg mb-4">Categories</div>
          <div className="flex overflow-x-auto py-4  scroll-smooth scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500">
            {imagesWithTitles.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[150px]"
              >
                <img
                  src={item.image}
                  className="w-[66px] h-[66px] mb-2 rounded-full object-cover"
                  alt={item.title}
                />
                <p className="text-center">{item.title}</p>
              </div>
            ))}
            {/* <CarouselPrevious />
              <CarouselNext /> */}
          </div>
        </div>
      </section>
    </>
  );
}
