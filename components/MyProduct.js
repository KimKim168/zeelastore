"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import MyCounter from "./MyCounter";
import { Button } from "./ui/button";
import {
  Heart,
  ShoppingCart,
  StarIcon,
  VideoIcon,
  Youtube,
} from "lucide-react";
import MyNewsProduct from "./MyNewsProduct";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function MyProduct() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls = [
    "/assets/images/product5.png",
    "/assets/images/product7.png",
    "/assets/images/product8.png",
    "/assets/images/product4.png",
    "/assets/images/product7.png",
    "/assets/images/product8.png",
  ];

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index); // Update the displayed image
  };

  return (
    <>
      <section className="max-w-screen-2xl mb-10 mx-auto px-2 xl:px-20 mt-5 ">
        <section>
          <Breadcrumb>
            <BreadcrumbList className="text-[10px] sm:text-sm md:text-[16px]">
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link href="/shop">Shop</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-blue">
                  Laptop Acer
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>
        <section className="mt-3">
          <div className="flex flex-col sm:grid grid-cols-12 gap-12">
            <div className="sm:col-span-12 md:col-span-5">
              <div className="relative">
                {/* Main Carousel */}
                <Card>
                  <CardContent>
                    <AspectRatio ratio={1 / 1}>
                      <Image
                        src={imageUrls[currentIndex]} // Display the active image
                        width={2000}
                        height={2000}
                        alt="image"
                        className="transition-transform duration-500 scale-105"
                      />
                    </AspectRatio>
                  </CardContent>
                </Card>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-6 mt-4">
                {imageUrls.map((src, index) => (
                  <button
                    key={index}
                    onClick={() => handleIndicatorClick(index)}
                    className={`w-20  transition-transform duration-300 p-1 rounded-lg ${
                      currentIndex === index
                        ? "scale-110 border border-gray-500"
                        : "opacity-70"
                    }`}
                  >
                    <Image
                      src={src}
                      width={3000}
                      height={3000}
                      alt="thumbnail"
                      className="w-full h-full aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className=" sm:col-span-12  md:col-span-7 text-blue xl:ml-5">
              <div className="text-lg md:text-xl font-semibold">
                Acer Swift Go (SFG14-71-59SE) Pure Silver
              </div>
              <div className="max-w-96 mt-4">
                <ul className="space-y-4 text-sm md:text-lg">
                  <li>
                    <ul className="grid grid-cols-12 justify-between gap-5">
                      <li className=" col-span-6">Shipping:</li>
                      <li className="text-color col-span-6"> Free</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="grid grid-cols-12 justify-between gap-5">
                      <li className=" col-span-6">Brand:</li>
                      <li className="text-color col-span-6">Monitor</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="grid grid-cols-12 justify-between gap-5">
                      <li className=" col-span-6">Product View :</li>
                      <li className="text-color col-span-6">20</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="grid grid-cols-12 justify-between gap-5">
                      <li className=" col-span-6">Rate :</li>
                      <li className=" col-span-6">
                        <div className="flex overflow-hidden">
                          <StarIcon width="16" className=" text-yellow-400" />
                          <StarIcon
                            width="16"
                            className="ml-2 text-yellow-400"
                          />
                          <StarIcon
                            width="16"
                            className="ml-2 text-yellow-400"
                          />
                          <StarIcon
                            width="16"
                            className="ml-2 text-yellow-400"
                          />
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="grid grid-cols-12 font-semibold text-color justify-between text-lg md:text-xl">
                      <li className=" col-span-6">Price:</li>
                      <li className="text-color col-span-6">$150</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <hr className="border-black mt-5 w-auto"></hr>

              <div className="flex items-center gap-2 md:gap-5 mt-5 ">
                <MyCounter></MyCounter>
                <Button className="w-full ">
                  <ShoppingCart></ShoppingCart>
                  <p>Buy Now</p>
                </Button>
                {/* Socail  */}
                <div className="flex items-center gap-2 md:gap-3 ">
                  <Link href="#">
                    <Image
                      src="/assets/images/telegram.png"
                      width={3000}
                      height={3000}
                      className="w-10 md:w-14"
                      alt="image"
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/assets/images/facebook.png"
                      width={3000}
                      height={3000}
                      className="w-10 md:w-14"
                      alt="image"
                    />
                  </Link>
                  <Link href="#" className="flex items-center gap-1">
                    <Image
                      src="/assets/images/call.png"
                      width={3000}
                      height={3000}
                      className="w-10 md:w-14"
                      alt="image"
                    />
                    {/* <p className="text-sm md:text-xl">098 234 5678</p> */}
                  </Link>
                </div>
                {/*End Socail */}
              </div>

              {/* Add to wishlist */}
              <dvi className="mt-5 flex space-x-2">
                <div>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center"
                  >
                    <Heart></Heart>
                    <p>Add to wishlist</p>
                  </Button>
                </div>
                <div>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center"
                  >
                    <VideoIcon />
                    <p>Video</p>
                  </Button>
                </div>
                <div>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center"
                  >
                    <Youtube />
                    <p>Youtube</p>
                  </Button>
                </div>
              </dvi>
              {/*End Add to wishlist */}
              <div className="mt-5">
                <p className="text-xl mb-3">Specification</p>
                <div>
                  <ul className="list-disc list-inside text-gray-900 space-y-2">
                    <li>Backlight Technology : LED</li>
                    <li>Panel Technology : VA</li>
                    <li>Display type : LED-backlit LCD monitor</li>
                    <li>Display Size : 32-inches FHD (1920 x 1080) 144 Hz</li>
                    <li>Aspect Ratio : 16:9 Widescreen</li>
                    <li>Brightness : 250 cd/m²</li>
                    <li>Interface : DisplayPort, HDMI</li>
                    <li>Dimensions: 20.8 x 71.1 x 52.6 Centimeters</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-black md:w-96 mx-auto mt-5"></hr>
      </section>

      <MyNewsProduct></MyNewsProduct>
    </>
  );
}
