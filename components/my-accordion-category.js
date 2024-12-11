"use client";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function MyCategoryComponent() {
  return (
    <>
      <div className="shadow-md">
        <p className="text-2xl text-center  p-4 background-gradient text-white">
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
                <p>Toner</p>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default MyCategoryComponent;
