import localFont from "next/font/local";
import "./globals.css";
import { Koulen, Siemreap, Poppins } from "next/font/google";

import Image from "next/image";

import MyHeader from "@/components/my-header";
import MyNavigation from "@/components/my-navigation";

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
        {/* Navigation */}
        <MyNavigation></MyNavigation>
        {/*End Navigation */}
        {/* Slider */}

        {/*End Slider */}
        {children}

        {/* Footer */}

        <footer className="background-gradient ">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="flex  gap-4">
              <div className=" flex-1 text-white md:mb-0">
                <a href="/" className="flex flex-col items-start gap-2">
                  <Image
                    src="/assets/images/logo.png"
                    width={60}
                    height={60}
                    alt="logo"
                    className="w-20 md:w-24"
                  ></Image>
                  <p className=" w-auto md:w-96 md:mt-5 text-[10px] sm:text-sm md:text-base">
                    Ours product is full with responsibility for product
                    problems and caring
                  </p>
                </a>
              </div>
              <div className="flex-1">
                <h2 className="mb-2 text-[10px] sm:text-sm md:text-base text-center md:text-start  text-white  dark:text-white">
                  Our family brand product
                </h2>
                <div className="grid grid-cols-5 sm:grid-cols-6 xl:grid-cols-8 gap-1 ">
                  <div className="col-span-1">
                    <Image
                      src="/assets/images/brand1.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand2.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand3.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand4.png"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand5.png"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand6.png"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand8.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand10.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand11.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand12.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand13.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand14.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand15.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand16.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand17.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand18.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand19.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand20.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand21.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                  <div className="col-span-1 ">
                    <Image
                      src="/assets/images/brand22.jpg"
                      width={60}
                      height={60}
                      alt=" brand product"
                      className="w-full aspect-video object-cover "
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-2 border-gray-200 sm:mx-auto dark:border-gray-700 md:my-5" />
            <div className=" text-center">
              <span className="text-[9px] md:text-sm text-white sm:text-center dark:text-gray-400">
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
