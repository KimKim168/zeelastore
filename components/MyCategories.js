"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import {
  FaAndroid,
  FaApple,
  FaRegWindowRestore,
  FaWindowRestore,
  FaWindows,
} from "react-icons/fa";

export default function MyCategories() {
  const iconsWithTitles = [
    { icon: <FaApple />, title: "Apple" },
    { icon: <FaAndroid />, title: "Android" },
    { icon: <FaWindows />, title: "Windows" },
    { icon: <FaApple />, title: "Apple" },
    { icon: <FaAndroid />, title: "Android" },
    { icon: <FaWindows />, title: "Windows" },
    { icon: <FaApple />, title: "Apple" },
    { icon: <FaAndroid />, title: "Android" },
    { icon: <FaWindows />, title: "Windows" },
  ];
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-2  xl:px-20 py-5">
        <div>
          <div className="text-lg mb-4">Popular Categories</div>
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full "
            >
              <CarouselContent className="px-0">
                {iconsWithTitles.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                  >
                    <div className="p-1 text-center">
                      <Card className="bg-gray-100">
                        <CardContent className="flex  flex-col items-center justify-center ">
                          <div className="flex flex-col justify-center items-center">
                            <div className="text-4xl  text-gray-500">
                              {item.icon}
                            </div>
                            <div className="mt-2 text-sm text-gray-700">
                              {item.title}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious />
              <CarouselNext /> */}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
