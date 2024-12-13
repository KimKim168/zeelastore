"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import MyCategoryComponent from "./my-accordion-category";
import { SearchBrand } from "./my-search-brand";
import MyDualRangPrice from "./my-dual-range-price";
import MylastestProduct from "./my-lastest-product";

export default function Filter() {
  return (
    <>
      <section className="lg:hidden block">
        <Sheet>
          <SheetTrigger asChild>
            <Image
              src="/assets/images/filter.png"
              width="20"
              height="20"
              alt="menu"
              aria-label="Open menu" // Optional for accessibility
            />
          </SheetTrigger>
          <SheetContent className="px-0">
            <SheetHeader>
              <SheetTitle className="text-center">Filter</SheetTitle>
            </SheetHeader>
            {/* Scrollable content */}
            <div className="overflow-y-auto max-h-[calc(100vh-100px)] px-2">
              <MyCategoryComponent />
              <SearchBrand />
              <MyDualRangPrice />
              <MylastestProduct />
            </div>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
}
