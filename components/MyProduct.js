"use client";
import React from "react";
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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";
import Image from "next/image";
import MyCounter from "./MyCounter";
import { Button } from "./ui/button";
import {
  Heart,
  LucideMessageSquareText,
  PhoneCallIcon,
  ShoppingCart,
} from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import MySamsungBrand from "./MySamsungBrand";
import MyNewsProduct from "./MyNewsProduct";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function MyProduct() {
  const imageUrls = [
    "/assets/images/product1.png",
    "/assets/images/product2.png",
  ];
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
                <BreadcrumbPage>Phone Holder</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>
        <section className="mt-3">
          <div className="flex flex-col sm:grid grid-cols-12 gap-12">
            <div className=" sm:col-span-12 md:col-span-5 ">
              <Carousel className="w-full overflow-hidden">
                <CarouselContent>
                  {imageUrls.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1 ">
                        <Card>
                          <CardContent>
                            <AspectRatio ratio={1 / 1}>
                              <Image
                                src={src}
                                width={2000}
                                height={2000}
                                alt="image"
                                className=" object-cover"
                              />
                            </AspectRatio>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
              </Carousel>
              <div className="flex space-x-3">
                {imageUrls.map((src, index) => (
                  <div
                    key={index}
                    className="w-16 md:w-20 p-2 mt-5 border border-gold"
                  >
                    <Image
                      src={src}
                      width={3000}
                      height={3000}
                      alt="image"
                      className="w-full h-full  aspect-square object-cover"
                    ></Image>
                  </div>
                ))}
              </div>
            </div>
            <div className=" sm:col-span-12 md:col-span-7 xl:ml-5">
              <div className="text-xl">Phone Holder Car Strong Gravity</div>
              <div>
                <div className="flex gap-3 items-center my-5">
                  <p className="text-sm text-gray-500 line-through">20.00$</p>
                  <p className="text-xl">15.00$</p>
                </div>
                <div>
                  Regular fit, round neckline, short sleeves. Made of extra long
                  staple pima cotton.
                </div>
              </div>
              <hr className="border-black mt-5 w-auto"></hr>
              <div className="flex items-center gap-5 mt-10 ">
                <MyCounter></MyCounter>
                <Button className="w-full ">
                  <ShoppingCart></ShoppingCart>
                  <p>Buy Now</p>
                </Button>
              </div>
              <div className="flex items-center gap-5 mt-10">
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
                  <p className="text-sm md:text-xl">098 234 5678</p>
                </Link>
              </div>
              {/* Add to wishlist */}
              <div className="mt-10">
                <Button variant="outline" className="flex items-center">
                  <Heart></Heart>
                  <p>Add to wishlist</p>
                </Button>
              </div>
              {/*End Add to wishlist */}
            </div>
          </div>
        </section>
        <hr className="border-black md:w-96 mx-auto mt-5"></hr>
      </section>

      <MyNewsProduct></MyNewsProduct>
    </>
  );
}
