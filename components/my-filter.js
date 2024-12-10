"use client";
import React from "react";

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
import { Button } from "./ui/button";
import { ArrowRight, Settings2 } from "lucide-react";
import MyPriceFilterMobile from "./MyPriceFilterMobile";
import MyBreadCrumb from "./my-bread-crumb-shop";
import MyCategoryComponent from "./my-accordion-category";
import MylastestProduct from "./my-lastest-product";
import MyDualRangPrice from "./my-dual-range-price";

export default function Filter() {
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
      <div className="max-w-screen-2xl mx-auto mt-5 ">
        {/* <p className="text-center font-bold text-2xl bg-gray-300 p-4 mb-4 ">
          Shop
        </p> */}
        {/* Header */}
        <section>
          <div className="flex justify-between items-center">
            <MyBreadCrumb />
            {/* Small screen */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    value="left"
                    className="p-2 h-7 sm:h-8"
                  >
                    <Settings2 style={{ width: 12, height: 12 }} />
                    <p className="text-[12px] sm:text-sm md:text-[16px]">
                      Filters
                    </p>
                  </Button>
                </SheetTrigger>
                <SheetContent className="p-4 ">
                  <SheetHeader>
                    <SheetDescription>
                      <div className="h-[calc(100vh-100px)] mt-7 pr-2 overflow-y-auto">
                        {/* Categories */}
                        <MyCategoryComponent />
                        {/* End Categories */}

                        {/* Filter by Brand */}
                        <MyDualRangPrice />
                        {/* End Filter by Brand */}

                        {/* Filter Price */}
                        <MylastestProduct />
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

        {/*End Content */}
      </div>
    </>
  );
}
