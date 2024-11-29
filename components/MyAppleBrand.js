"use client";
import Image from "next/image";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function MyAppleBrand() {
  const products = [
    {
      id: 1,
      image: "/assets/images/imag7.webp",
      alt: "Blueo PVD Stainless Steel Camera Lens Protector",
      title:
        "Blueo PVD Stainless Steel Camera Lens Protector for iPhone 15 Pro Max White",
      price: "$15.59",
    },
    {
      id: 2,
      image: "/assets/images/image8.jpg",
      alt: "Blueo PVD Stainless Steel Camera Lens Protector",
      title:
        "Blueo PVD Stainless Steel Camera Lens Protector for iPhone 15 Pro Max White",
      price: "$15.59",
    },
    {
      id: 3,
      image: "/assets/images/image7.webp",
      alt: "Blueo PVD Stainless Steel Camera Lens Protector",
      title:
        "Blueo PVD Stainless Steel Camera Lens Protector for iPhone 15 Pro Max White",
      price: "$15.59",
    },
    {
      id: 4,
      image: "/assets/images/image8.jpg",
      alt: "Blueo PVD Stainless Steel Camera Lens Protector",
      title:
        "Blueo PVD Stainless Steel Camera Lens Protector for iPhone 15 Pro Max White",
      price: "$15.59",
    },
    {
      id: 5,
      image: "/assets/images/image7.webp",
      alt: "Blueo PVD Stainless Steel Camera Lens Protector",
      title:
        "Blueo PVD Stainless Steel Camera Lens Protector for iPhone 15 Pro Max White",
      price: "$15.59",
    },
    {
      id: 6,
      image: "/assets/images/image7.webp",
      alt: "Blueo PVD Stainless Steel Camera Lens Protector",
      title:
        "Blueo PVD Stainless Steel Camera Lens Protector for iPhone 15 Pro Max White",
      price: "$15.59",
    },
  ];
  return (
    <>
      <section className="max-w-screen-2xl  mx-auto px-20 py-5">
        <p className="text-lg mb-4">Apples</p>
        <div className="flex">
          <div className="h-96 w-96 mr-5 hidden xl:flex">
            <Image
              src="/assets/images/apple2.webp"
              width={5000}
              height={5000}
              className="h-96 w-96 shadow-md aspect-square object-cover "
              alt="image"
            />
          </div>
          <Carousel className="w-full">
            <div className="mb-4 ">
              <CarouselContent className="-ml-1">
                {products.map((product, id) => (
                  <CarouselItem
                    key={id}
                    className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
                  >
                    {/* Product Card */}
                    <div className="rounded-lg border border-b-[#FFD700] border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                      <div className="h-56 w-full">
                        <a href="#">
                          <img
                            className="mx-auto h-full"
                            src={product.image}
                            alt={product.alt || "Product image"}
                          />
                        </a>
                      </div>
                      <div className="pt-6">
                        <a
                          href="#"
                          className="text-sm line-clamp-2 leading-tight text-gray-900 hover:underline dark:text-white"
                        >
                          {product.title}
                        </a>
                        <p className="mt-4 bg-yellow-400 p-1 text-center text-lg shadow-md">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </>
  );
}
