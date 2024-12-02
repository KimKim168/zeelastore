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
import { AlignCenter, PhoneCallIcon } from "lucide-react";
import { Button } from "./ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@radix-ui/react-select";
import Image from "next/image";

export default function MyResponsive() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button className="p-3" aria-label="Align Center">
            <AlignCenter
              className="text-white "
              style={{ width: 22, height: 22 }}
            ></AlignCenter>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <p className="text-xl">Menu</p>
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
                    className="block w-full p-3 ps-10 text-sm text-primary border border-gray-300 bg-gray-50 outline-none focus:ring-[#FFD700]/100 focus:border-[#FFD700]/100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="Search Product..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-sky absolute end-2 top-1/2 transform -translate-y-1/2 bg-gold hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/100 font-medium text-sm px-4 py-2"
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
                className="w-full text-start text-black"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>All Categories</AccordionTrigger>
                  <AccordionContent>Content for categories...</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="py-4">
                  <Link href="/" className="hover:underline text-sm">
                    Home
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
