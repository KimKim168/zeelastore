"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignCenter, AlignJustifyIcon } from "lucide-react";
import { Button } from "./ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function MyResponsive() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild className="ml-0 ">
          <AlignCenter
            className="text-white "
            style={{ width: 30, height: 30 }}
          />
        </SheetTrigger>
        <SheetContent className="background-gradient">
          <SheetHeader>
            <p className="text-2xl text-center text-white">Menu</p>
            <SheetTitle className="mt-5 font-normal">
              <form className="w-full">
                <label
                  htmlFor="default-search"
                  className="text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gold"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 ps-10 text-sm text-primary border border-gray-300 bg-gray-50 outline-none  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="Search Product..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2 top-1/2 transform -translate-y-1/2 bg-gold hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/100 font-medium text-sm px-4 py-2"
                  >
                    Search
                  </button>
                </div>
              </form>
            </SheetTitle>
            <SheetDescription>
              <Accordion
                type="single"
                collapsible
                className="w-full text-start text-white"
              >
                <AccordionItem value="item-2" className="py-4">
                  <Link
                    href="/"
                    className="flex items-center text-nowrap text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    <AlignJustifyIcon
                      className="mr-2 w-12 h-12 md:w-20 md:h-20"
                      style={{ width: "15", height: "15" }}
                    ></AlignJustifyIcon>
                    <span>All Categorys</span>
                  </Link>
                </AccordionItem>
                <AccordionItem value="item-3" className="py-4">
                  <Link href="#" className="hover:underline text-sm">
                    About
                  </Link>
                </AccordionItem>
                <AccordionItem value="item-4" className="py-4">
                  <Link href="#" className="hover:underline text-sm">
                    Support
                  </Link>
                </AccordionItem>
                <AccordionItem value="item-5" className="py-4">
                  <Link href="#" className="hover:underline text-sm">
                    Contact
                  </Link>
                </AccordionItem>
              </Accordion>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
