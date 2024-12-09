"use client";
import React, { useState } from "react";
// import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Link from "next/link";
import Image from "next/image";
import MyCounter from "./MyCounter";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import MyNewsProduct from "./MyNewsProduct";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import MyVideoCard from "./MyVideoCard";
import MyGallery from "./MyGallery";

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
              <MyGallery></MyGallery>
            </div>

            <div className=" sm:col-span-12  md:col-span-7 text-blue xl:ml-5">
              <div className="text-lg md:text-xl font-semibold">
                Acer Swift Go (SFG14-71-59SE) Pure Silver
              </div>
              <div className="max-w-96 mt-4">
                <ul className="space-y-2 text-sm md:text-lg">
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
                  {/* <li>
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
                  </li> */}
                  <li>
                    <ul className="grid grid-cols-12 font-semibold text-color justify-between text-lg md:text-xl">
                      <li className=" col-span-6">Price:</li>
                      <li className="text-color col-span-6">$150</li>
                    </ul>
                  </li>
                  <li>
                    <div>
                      <Button
                        variant="outline"
                        className="flex items-center justify-center"
                      >
                        <Heart></Heart>
                        <p>Add to wishlist</p>
                      </Button>
                    </div>
                  </li>
                </ul>
              </div>

              <hr className="border-black mt-5 w-auto"></hr>

              <div className="flex items-center justify-center gap-2 md:gap-5 mt-5 ">
                {/* <Button className="w-full ">
                  <ShoppingCart></ShoppingCart>
                  <p>Buy Now</p>
                </Button> */}
                {/* Socail  */}
                <div className="grid grid-cols-2  sm:grid-cols-4 items-center gap-2 md:gap-3 ">
                  <Link
                    href="https://telegram.org/"
                    target="_blank"
                    className="border p-1 sm:p-2 flex justify-center items-center gap-1 md:gap-2 rounded-md"
                  >
                    <Image
                      src="/assets/images/telegram.png"
                      width={3000}
                      height={3000}
                      className="w-7 xl:w-10"
                      alt="image"
                    />
                    <p className="text-[10px] sm:text-[10px] xl:text-[13px]">
                      Order With Telegram
                    </p>
                  </Link>
                  <Link
                    href="https://www.messenger.com/"
                    target="_blank"
                    className="border p-1 sm:p-2 flex justify-center items-center gap-1 md:gap-2 rounded-md"
                  >
                    <Image
                      src="/assets/images/messager.jpg"
                      width={3000}
                      height={3000}
                      className="w-7 xl:w-10"
                      alt="image"
                    />
                    <p className="text-[10px] sm:text-[10px] xl:text-[13px]">
                      Order With Messenger
                    </p>
                  </Link>
                  <Link
                    href="https://web.whatsapp.com/"
                    target="_blank"
                    className="border p-1 sm:p-2 flex justify-center items-center gap-1 md:gap-2 rounded-md"
                  >
                    <Image
                      src="/assets/images/whatsApp.png"
                      width={3000}
                      height={3000}
                      className="w-7 xl:w-10"
                      alt="image"
                    />
                    <p className="text-[10px] sm:text-[10px] xl:text-[13px]">
                      Order With whatsapp
                    </p>
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    className="border p-[4px] sm:p-2 flex justify-center items-center gap-1 md:gap-2 rounded-md"
                  >
                    <Image
                      src="/assets/images/call.png"
                      width={3000}
                      height={3000}
                      className="w-7 xl:w-10"
                      alt="image"
                    />
                    <p className="text-[10px] sm:text-[10px] xl:text-[13px]">
                      Order By Calling
                    </p>
                  </Link>
                </div>
                {/*End Socail */}
              </div>

              {/* Add to wishlist */}
              <dvi className="mt-5 flex space-x-2">
                <div>
                  <MyVideoCard />
                </div>
                <div></div>
              </dvi>
              {/*End Add to wishlist */}
            </div>
          </div>
          {/* Content utttom */}
          <Tabs defaultValue="account" className="md:w-[500px] mt-10  ">
            <TabsList className="grid w-full grid-cols-2 ">
              <TabsTrigger value="Specification">Specification</TabsTrigger>
              <TabsTrigger value="Overview">Overview</TabsTrigger>
            </TabsList>
            <TabsContent value="Specification">
              <Card className="shadow-none border-r-0 border-t-0 border-l-2 border-b-2 border-blue">
                <CardContent className="space-y-2 ">
                  <ul className="list-disc list-inside text-gray-900 space-y-2">
                    <li>Backlight Technology: LED</li>
                    <li>Panel Technology: VA</li>
                    <li>Display type: LED-backlit LCD monitor</li>
                    <li>
                      Display Size: 32-inches FHD (1920 x 1080) 144 Hz Display
                      Size: 32-inches FHD (1920 x 1080) 144 Hz Display Size:
                      32-inches FHD (1920 x 1080) 144 Hz{" "}
                    </li>
                    <li>Aspect Ratio: 16:9 Widescreen</li>
                    <li>Brightness: 250 cd/m²</li>
                    <li>Interface: DisplayPort, HDMI</li>
                    <li>Dimensions: 20.8 x 71.1 x 52.6 Centimeters</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="Overview">
              <Card className="shadow-none border-r-0 border-t-0 border-l-2 border-b-2 border-blue">
                <CardContent className="space-y-2">New Arrivals</CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          {/*End Content utttom */}
        </section>
        <hr className="border-black md:w-96 mx-auto mt-5"></hr>
      </section>
      <div className="bg-skySlate">
        <MyNewsProduct></MyNewsProduct>
      </div>
    </>
  );
}
