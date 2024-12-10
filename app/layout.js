"use client";
import localFont from "next/font/local";
import "./globals.css";
import { Koulen, Siemreap, Poppins } from "next/font/google";

import Image from "next/image";
import { AlignJustifyIcon } from "lucide-react";

import MyHeader from "@/components/my-header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MyHeader />
        {/* Menu */}
        <div className="w-full  border-b shadow-sm">
          <div className="hidden md:flex justify-between text-[10px] sm:text-sm md:text-[16] items-center max-w-screen-2xl mx-auto xl:px-20 ">
            <ul className="flex   items-center  font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li className="bg-menu md:p-3 ">
                <a
                  href="#"
                  className="flex items-center block p-2 text-nowrap text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  <AlignJustifyIcon
                    className="mr-2 w-12 h-12 md:w-20 md:h-20"
                    style={{ width: "15", height: "15" }}
                  ></AlignJustifyIcon>
                  <span>All Categorys</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 text-nowrap text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 text-nowrap text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projectors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 text-nowrap text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Printers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block p-2 text-nowrap text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Computers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 text-nowrap text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 text-nowrap text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 text-nowrap text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Video
                </a>
              </li>
            </ul>
            <p>Pend $120 more and get free shipping!</p>
          </div>
        </div>
        {/*End Menu */}
        {/* Slider */}

        {/*End Slider */}
        {children}

        {/* Footer */}

        <footer className="bg-nav ">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:grid grid-cols-12 ">
              <div className="col-span-5 mb-6 text-white md:mb-0">
                <a href="/" className="flex flex-col   ">
                  <Image
                    src="/assets/images/logo.png"
                    width={200}
                    height={200}
                    alt="logo"
                    className="w-24"
                  ></Image>
                  <p className="w-auto xl:w-96 mt-5">
                    Ours product is full with responsibility for product
                    problems and caring
                  </p>
                </a>
              </div>
              <div className="col-span-7">
                <h2 className="mb-4 text-sm text-center md:text-start font-semibold text-white  dark:text-white">
                  Our family brand product
                </h2>
                <div className="grid grid-cols-4 sm:grid-cols-6 xl:grid-cols-8 gap-3 ">
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand1.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand2.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover"
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand3.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand4.png"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand5.png"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand6.png"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand8.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand10.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand11.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand12.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand13.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand14.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand15.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand16.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand17.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand18.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand19.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand20.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand21.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand22.jpg"
                      width={2000}
                      height={2000}
                      alt=" brand product"
                      className="aspect-video object-cover "
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className=" text-center">
              <span className="text-sm text-white  sm:text-center dark:text-gray-400">
                Copyright © 2024 Chhay Hok Computer. All rights reserved.
              </span>
            </div>
          </div>
        </footer>

        {/*End Footer */}
      </body>
    </html>
  );
}
