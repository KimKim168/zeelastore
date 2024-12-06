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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
import { Eye, StarIcon } from "lucide-react";
import MyPriceFilter from "./MyPriceFilter";
import { Button } from "./ui/button";
import { ArrowRight, Settings2 } from "lucide-react";
import MyPriceFilterMobile from "./MyPriceFilterMobile";

export default function MyShop() {
  const imageUrls = [
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product4.png",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product5.png",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product4.png",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product5.png",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
  ];
  return (
    <>
      <section className="max-w-screen-2xl mb-10 mx-auto px-2 xl:px-20 mt-5 ">
        {/* <p className="text-center font-bold text-2xl bg-gray-300 p-4 mb-4 ">
          Shop
        </p> */}
        {/* Header */}
        <section>
          <div className="flex justify-between items-center">
            <div>
              <Breadcrumb>
                <BreadcrumbList className="text-sm sm:text-sm md:text-[16px]">
                  <BreadcrumbItem>
                    <BreadcrumbLink>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-blue">Shop</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            {/* Small screen */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger>
                  <Button variant="outline" value="left">
                    <Settings2 />
                    <p>Filters</p>
                  </Button>
                </SheetTrigger>
                <SheetContent className="p-4 ">
                  <SheetHeader>
                    <SheetDescription>
                      <div className="h-[calc(100vh-100px)] mt-7 pr-2 overflow-y-auto">
                        {/* Categories */}
                        <div>
                          <p className="text-xl font-bold bg-nav p-4 text-center text-white">
                            Categories
                          </p>
                          <Accordion
                            type="single"
                            collapsible
                            className="text-start"
                          >
                            <AccordionItem value="item-1">
                              <AccordionTrigger className="text-sm xl:text-base text-blue">
                                Laptop Computer
                              </AccordionTrigger>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p>Laptop Acer</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p>Laptop Asus</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> Laptop Dell</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p>Laptop MSI</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p>Laptop Apple</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p>Acer</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p>Laptop Lenovo</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p>Laptop HP</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p>Brand MSI</p>
                                </Link>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                              <AccordionTrigger className="text-sm xl:text-base text-blue">
                                Desktop Computer
                              </AccordionTrigger>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> Brand Dell </p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p>Brand Acer </p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> Desktop Clone </p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p>Brand IBM </p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p>Brand HP </p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p>Brand HP</p>
                                </Link>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                              <AccordionTrigger className="text-sm xl:text-base text-blue">
                                Workstation Computer
                              </AccordionTrigger>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> Dell Precision </p>
                                </Link>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                              <AccordionTrigger className="text-sm xl:text-base text-blue">
                                Server Computer
                              </AccordionTrigger>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> Dell PowerEdge</p>
                                </Link>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                              <AccordionTrigger className="text-sm xl:text-base text-blue">
                                Accessories
                              </AccordionTrigger>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> Flash</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> External HDD</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> RAM</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> Hard disk</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> Speaker</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> Keyboard & Mouse</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> Modem</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> Fax</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> Inks</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> Power Bank</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> Other Products</p>
                                </Link>
                              </AccordionContent>
                              <AccordionContent>
                                <Link
                                  href="#"
                                  className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                                >
                                  <ArrowRight
                                    width={15}
                                    className=" hover:text-color"
                                  />
                                  <p> Toner</p>
                                </Link>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                        {/* End Categories */}

                        {/* Filter by Brand */}
                        <div className="mt-10">
                            <p className="text-2xl text-center  p-4 bg-nav text-white">
                              Lastest Products
                            </p>
                            <div>
                              <div className="grid grid-cols-12 p-3 border-b">
                                <div className="col-span-5">
                                  <Image
                                    src="/assets/images/product3.jpg"
                                    width={3000}
                                    height={3000}
                                    alt="image"
                                    className="h-20 object-contain aspect-square "
                                  />
                                </div>
                                <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                                  <p>Acer Aspire 3( A315-58-P3S9)</p>
                                  <p className="font-semibold">
                                    Price:{" "}
                                    <span className="text-color ml-3 xl:ml-5">
                                      $766
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-12 p-3 border-b">
                                <div className="col-span-5">
                                  <Image
                                    src="/assets/images/product7.png"
                                    width={3000}
                                    height={3000}
                                    alt="image"
                                    className="h-20 object-contain aspect-square "
                                  />
                                </div>
                                <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                                  <p>Acer Aspire 3( A315-58-P3S9)</p>
                                  <p className="font-semibold">
                                    Price:{" "}
                                    <span className="text-color ml-3 xl:ml-5">
                                      $766
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-12 p-3 border-b">
                                <div className="col-span-5">
                                  <Image
                                    src="/assets/images/product6.jpg"
                                    width={3000}
                                    height={3000}
                                    alt="image"
                                    className="h-20 object-contain aspect-square "
                                  />
                                </div>
                                <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                                  <p>Acer Aspire 3( A315-58-P3S9)</p>
                                  <p className="font-semibold">
                                    Price:{" "}
                                    <span className="text-color ml-3 xl:ml-5">
                                      $766
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-12 p-3 border-b">
                                <div className="col-span-5">
                                  <Image
                                    src="/assets/images/product1.png"
                                    width={3000}
                                    height={3000}
                                    alt="image"
                                    className="h-20 object-contain aspect-square "
                                  />
                                </div>
                                <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                                  <p>Acer Aspire 3( A315-58-P3S9)</p>
                                  <p className="font-semibold">
                                    Price:{" "}
                                    <span className="text-color ml-3 xl:ml-5">
                                      $766
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-12 p-3 border-b">
                                <div className="col-span-5">
                                  <Image
                                    src="/assets/images/product5.png"
                                    width={3000}
                                    height={3000}
                                    alt="image"
                                    className="h-20 object-contain aspect-square "
                                  />
                                </div>
                                <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                                  <p>Acer Aspire 3( A315-58-P3S9)</p>
                                  <p className="font-semibold">
                                    Price:{" "}
                                    <span className="text-color ml-3 xl:ml-5">
                                      $766
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-12 p-3 border-b">
                                <div className="col-span-5">
                                  <Image
                                    src="/assets/images/product3.jpg"
                                    width={3000}
                                    height={3000}
                                    alt="image"
                                    className="h-20 object-contain aspect-square "
                                  />
                                </div>
                                <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                                  <p>Acer Aspire 3( A315-58-P3S9)</p>
                                  <p className="font-semibold">
                                    Price:{" "}
                                    <span className="text-color ml-3 xl:ml-5">
                                      $766
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-12 p-3 border-b">
                                <div className="col-span-5">
                                  <Image
                                    src="/assets/images/product4.png"
                                    width={3000}
                                    height={3000}
                                    alt="image"
                                    className="h-20 object-contain aspect-square "
                                  />
                                </div>
                                <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                                  <p>Acer Aspire 3( A315-58-P3S9)</p>
                                  <p className="font-semibold">
                                    Price:{" "}
                                    <span className="text-color ml-3 xl:ml-5">
                                      $766
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-12 p-3 border-b">
                                <div className="col-span-5">
                                  <Image
                                    src="/assets/images/product3.jpg"
                                    width={3000}
                                    height={3000}
                                    alt="image"
                                    className="h-20 object-contain aspect-square "
                                  />
                                </div>
                                <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                                  <p>Acer Aspire 3( A315-58-P3S9)</p>
                                  <p className="font-semibold">
                                    Price:{" "}
                                    <span className="text-color ml-3 xl:ml-5">
                                      $766
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-12 p-3 border-b">
                                <div className="col-span-5">
                                  <Image
                                    src="/assets/images/product3.jpg"
                                    width={3000}
                                    height={3000}
                                    alt="image"
                                    className="h-20 object-contain aspect-square "
                                  />
                                </div>
                                <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                                  <p>Acer Aspire 3( A315-58-P3S9)</p>
                                  <p className="font-semibold">
                                    Price:{" "}
                                    <span className="text-color ml-3 xl:ml-5">
                                      $766
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-12 p-3 border-b">
                                <div className="col-span-5">
                                  <Image
                                    src="/assets/images/product3.jpg"
                                    width={3000}
                                    height={3000}
                                    alt="image"
                                    className="h-20 object-contain aspect-square "
                                  />
                                </div>
                                <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                                  <p>Acer Aspire 3( A315-58-P3S9)</p>
                                  <p className="font-semibold">
                                    Price:{" "}
                                    <span className="text-color ml-3 xl:ml-5">
                                      $766
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                        </div>
                        {/* End Filter by Brand */}

                        {/* Filter Price */}
                        <div>
                          <MyPriceFilterMobile />
                        </div>
                        {/* End Filter Price */}
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            {/*End Small screen */}
          </div>
        </section>
        {/*End Header */}

        {/* Content */}
        <section className="mt-10">
          <div className="grid grid-cols-12 gap-3">
            {/* Left Content */}
            <div className="hidden md:grid col-span-3 ">
              {/* Category */}
              <div className=" border shadow-md">
                <p className="text-2xl text-center  p-4 bg-nav text-white">
                  Categories
                </p>
                <Accordion type="single" className="px-4" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-sm xl:text-base text-blue">
                      Laptop Computer
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p>Laptop Acer</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p>Laptop Asus</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> Laptop Dell</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p>Laptop MSI</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p>Laptop Apple</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p>Acer</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p>Laptop Lenovo</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p>Laptop HP</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p>Brand MSI</p>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-sm xl:text-base text-blue">
                      Desktop Computer
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> Brand Dell </p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p>Brand Acer </p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> Desktop Clone </p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p>Brand IBM </p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p>Brand HP </p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p>Brand HP</p>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-sm xl:text-base text-blue">
                      Workstation Computer
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> Dell Precision </p>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-sm xl:text-base text-blue">
                      Server Computer
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> Dell PowerEdge</p>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-sm xl:text-base text-blue">
                      Accessories
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> Flash</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> External HDD</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> RAM</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> Hard disk</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> Speaker</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> Keyboard & Mouse</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> Modem</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> Fax</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> Inks</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> Power Bank</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> Other Products</p>
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link
                        href="#"
                        className="hover:underline text-sm xl:text-base text-gray-400 hover:text-red-600 decoration-red-500 underline-offset-2 flex items-center"
                      >
                        <ArrowRight width={15} className=" hover:text-color" />
                        <p> Toner</p>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {/*End Category */}

              {/* Lastest Products */}
              <div className=" border shadow-md mt-10">
                <p className="text-2xl text-center  p-4 bg-nav text-white">
                  Lastest Products
                </p>
                <div>
                  <div className="grid grid-cols-12 p-3 border-b">
                    <div className="col-span-5">
                      <Image
                        src="/assets/images/product3.jpg"
                        width={3000}
                        height={3000}
                        alt="image"
                        className="h-20 object-contain aspect-square "
                      />
                    </div>
                    <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                      <p>Acer Aspire 3( A315-58-P3S9)</p>
                      <p className="font-semibold">
                        Price:{" "}
                        <span className="text-color ml-3 xl:ml-5">$766</span>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-3 border-b">
                    <div className="col-span-5">
                      <Image
                        src="/assets/images/product7.png"
                        width={3000}
                        height={3000}
                        alt="image"
                        className="h-20 object-contain aspect-square "
                      />
                    </div>
                    <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                      <p>Acer Aspire 3( A315-58-P3S9)</p>
                      <p className="font-semibold">
                        Price:{" "}
                        <span className="text-color ml-3 xl:ml-5">$766</span>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-3 border-b">
                    <div className="col-span-5">
                      <Image
                        src="/assets/images/product6.jpg"
                        width={3000}
                        height={3000}
                        alt="image"
                        className="h-20 object-contain aspect-square "
                      />
                    </div>
                    <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                      <p>Acer Aspire 3( A315-58-P3S9)</p>
                      <p className="font-semibold">
                        Price:{" "}
                        <span className="text-color ml-3 xl:ml-5">$766</span>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-3 border-b">
                    <div className="col-span-5">
                      <Image
                        src="/assets/images/product1.png"
                        width={3000}
                        height={3000}
                        alt="image"
                        className="h-20 object-contain aspect-square "
                      />
                    </div>
                    <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                      <p>Acer Aspire 3( A315-58-P3S9)</p>
                      <p className="font-semibold">
                        Price:{" "}
                        <span className="text-color ml-3 xl:ml-5">$766</span>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-3 border-b">
                    <div className="col-span-5">
                      <Image
                        src="/assets/images/product5.png"
                        width={3000}
                        height={3000}
                        alt="image"
                        className="h-20 object-contain aspect-square "
                      />
                    </div>
                    <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                      <p>Acer Aspire 3( A315-58-P3S9)</p>
                      <p className="font-semibold">
                        Price:{" "}
                        <span className="text-color ml-3 xl:ml-5">$766</span>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-3 border-b">
                    <div className="col-span-5">
                      <Image
                        src="/assets/images/product3.jpg"
                        width={3000}
                        height={3000}
                        alt="image"
                        className="h-20 object-contain aspect-square "
                      />
                    </div>
                    <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                      <p>Acer Aspire 3( A315-58-P3S9)</p>
                      <p className="font-semibold">
                        Price:{" "}
                        <span className="text-color ml-3 xl:ml-5">$766</span>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-3 border-b">
                    <div className="col-span-5">
                      <Image
                        src="/assets/images/product4.png"
                        width={3000}
                        height={3000}
                        alt="image"
                        className="h-20 object-contain aspect-square "
                      />
                    </div>
                    <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                      <p>Acer Aspire 3( A315-58-P3S9)</p>
                      <p className="font-semibold">
                        Price:{" "}
                        <span className="text-color ml-3 xl:ml-5">$766</span>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-3 border-b">
                    <div className="col-span-5">
                      <Image
                        src="/assets/images/product3.jpg"
                        width={3000}
                        height={3000}
                        alt="image"
                        className="h-20 object-contain aspect-square "
                      />
                    </div>
                    <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                      <p>Acer Aspire 3( A315-58-P3S9)</p>
                      <p className="font-semibold">
                        Price:{" "}
                        <span className="text-color ml-3 xl:ml-5">$766</span>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-3 border-b">
                    <div className="col-span-5">
                      <Image
                        src="/assets/images/product3.jpg"
                        width={3000}
                        height={3000}
                        alt="image"
                        className="h-20 object-contain aspect-square "
                      />
                    </div>
                    <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                      <p>Acer Aspire 3( A315-58-P3S9)</p>
                      <p className="font-semibold">
                        Price:{" "}
                        <span className="text-color ml-3 xl:ml-5">$766</span>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-3 border-b">
                    <div className="col-span-5">
                      <Image
                        src="/assets/images/product3.jpg"
                        width={3000}
                        height={3000}
                        alt="image"
                        className="h-20 object-contain aspect-square "
                      />
                    </div>
                    <div className="col-span-7 line-clamp-2 text-sm xl:text-base">
                      <p>Acer Aspire 3( A315-58-P3S9)</p>
                      <p className="font-semibold">
                        Price:{" "}
                        <span className="text-color ml-3 xl:ml-5">$766</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Lastest Products */}

              {/* Filter price */}
              <div>
                <MyPriceFilter></MyPriceFilter>
              </div>
              {/*End Filter price */}
            </div>
            {/*End Left Content */}

            {/* Right Content */}
            <div className="col-span-12 md:col-span-9">
              <div className="mb-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                {imageUrls.map((item, index) => (
                  <div
                    key={index}
                    className="border aspect-square border-blue bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className="aspect-square w-full">
                      <a href="/products">
                        <img
                          className="mx-auto h-full dark:hidden transition-transform duration-300 hover:scale-110"
                          src={item.image}
                          alt="product"
                        />
                      </a>
                    </div>
                    <div className="pt-6">
                      <a
                        href="/products"
                        className="text-sm line-clamp-2 leading-tight text-gray-500 hover:underline dark:text-white"
                      >
                        {item.title}
                      </a>
                      <div className="flex text-sm mt-4 justify-between items-center">
                        <div className="text-color text-sm md:text-lg">
                          {item.price}
                        </div>
                        <div className="flex items-center">
                          <Eye width="16" />
                          <p>{item.view}</p>
                        </div>
                      </div>
                      <div className="flex mt-3">
                        <p className="text-blue mr-1">Rate:</p>
                        <div className="flex overflow-hidden">
                          <StarIcon
                            width="16"
                            className="md:ml-2 text-yellow-400"
                          />
                          <StarIcon
                            width="16"
                            className="md:ml-2 text-yellow-400"
                          />
                          <StarIcon
                            width="16"
                            className="md:ml-2 text-yellow-400"
                          />
                          <StarIcon
                            width="16"
                            className="md:ml-2 text-yellow-400"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/*End Right Content */}
          </div>
        </section>
        {/*End Content */}
      </section>
    </>
  );
}
