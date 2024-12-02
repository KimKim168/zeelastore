"use client";
import localFont from "next/font/local";
import "./globals.css";
import { Koulen, Siemreap, Poppins } from "next/font/google";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import {
  AlignCenter,
  AlignJustifyIcon,
  Facebook,
  Heart,
  InstagramIcon,
  PhoneCallIcon,
  Send,
  ShoppingCart,
  User,
} from "lucide-react";
import MyResponsive from "@/components/MyResponsive";

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
        <header className=" max-w-screen-2xl mx-auto px-2 xl:px-20 bg-nav p-2">
          <nav className="flex justify-between">
            <div className="text-white">
              <p className="text-[10px] sm:text-sm ">
                Get special 27% Discount on Your first Purchese
              </p>
            </div>
            {/* Top nav */}
            <div className="hidden md:flex">
              <Select defaultValue="English">
                <SelectTrigger className="w-[100px]  rounded-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">
                    <div className="flex">
                      <Image
                        src="/assets/images/flageUk.png"
                        width={20}
                        height={20}
                        alt="Flag"
                        className="w-5"
                      />
                      <p className="ml-2">EN</p>
                    </div>
                  </SelectItem>
                  <SelectItem value="Khmer">
                    <div className="flex">
                      <Image
                        src="/assets/images/flageKH.png"
                        width={20}
                        height={20}
                        alt="Flag"
                        className="w-5"
                      />
                      <p className="ml-2">KH</p>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* End */}
          </nav>
          <div className="grid grid-cols-12 gap-3 justify-between items-center">
            <div className="col-span-8 md:col-span-2">
              <Image
                src="/assets/images/logo-zela.png"
                width={200}
                height={200}
                alt="logo"
                className="w-20 md:w-24"
              ></Image>
            </div>
            <div className="col-span-4 flex items-center md:hidden  justify-end space-x-4">
              <div className="md:hidden">
                <Select defaultValue="English">
                  <SelectTrigger className="w-[100px]  rounded-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">
                      <div className="flex">
                        <Image
                          src="/assets/images/flageUk.png"
                          width={20}
                          height={20}
                          alt="Flag"
                          className="w-5"
                        />
                        <p className="ml-2">EN</p>
                      </div>
                    </SelectItem>
                    <SelectItem value="Khmer">
                      <div className="flex">
                        <Image
                          src="/assets/images/flageKH.png"
                          width={20}
                          height={20}
                          alt="Flag"
                          className="w-5"
                        />
                        <p className="ml-2">KH</p>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <MyResponsive />
            </div>
            <div className="hidden md:grid col-span-6 ">
              <form className="w-full  relative  ">
                <label
                  htmlFor="default-search"
                  className=" text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gold "
                      // ariaHidden="true"
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
                    className="block w-full p-2 text-nowrapw-full p-3 ps-10 text-sm text-primary border border-gray-300  bg-gray-50 outline-none  focus:ring-[#FFD700]/100 focus:border-[#FFD700]/100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                    placeholder="Search Product..."
                    required
                  />

                  {/* Error here <button> tag */}
                  <button
                    type="submit"
                    className="text-sky absolute end-1.5 bottom-[4px] bg-gold hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/100 font-medium  text-sm px-4 py-2"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden md:col-span-4 md:flex space-x-4 text-nowrap justify-end ">
              <div className="text-white text-sm md:text-[16px] flex items-center ">
                <PhoneCallIcon className="mr-1 md:mr-2 w-4 md:w-5"></PhoneCallIcon>
                <p>097 299 7517</p>
              </div>
              <div className="text-white space-x-4 flex items-center overflow-hidden">
                <User className=" min-w-5"></User>
                <Heart className=" min-w-5"></Heart>
                <ShoppingCart className=" min-w-5"></ShoppingCart>
              </div>
            </div>
          </div>
        </header>
        {/* Menu */}
        <div className="hidden md:flex justify-between text-[10px] sm:text-sm md:text-[16] items-center max-w-screen-2xl mx-auto xl:px-20  border-b shadow-md">
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
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 text-nowrap text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Support
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block p-2 text-nowrap text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
          <p>Pend $120 more and get free shipping!</p>
        </div>
        {/*End Menu */}
        {/* Slider */}

        {/*End Slider */}
        {children}

        {/* Footer */}

        <footer className="bg-nav mt-56">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 text-white md:mb-0">
                <a href="/" className="flex flex-col   ">
                  <Image
                    src="/assets/images/logo-zela.png"
                    width={200}
                    height={200}
                    alt="logo"
                    className="w-24"
                  ></Image>
                  <p className="w-auto xl:w-96">
                    Ours product is full with responsibility for product
                    problems and caring
                  </p>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div className="border-red-100 border-r pr-5">
                  <h2 className="mb-6 text-sm font-semibold text-gold uppercase dark:text-white">
                    Direct Contact
                  </h2>
                  <ul className="text-white text-sm">
                    <li className="mb-4 flex items-center">
                      <PhoneCallIcon className="w-4 mr-2"></PhoneCallIcon>
                      <p>+855 78784764764</p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <PhoneCallIcon className="w-4 mr-2"></PhoneCallIcon>
                      <p>+855 78784764764</p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <PhoneCallIcon className="w-4 mr-2"></PhoneCallIcon>
                      <p>+855 78784764764</p>
                    </li>
                  </ul>
                </div>
                <div className="border-red-100 border-r pr-5">
                  <h2 className="mb-6 text-sm font-semibold text-gold uppercase dark:text-white">
                    Social
                  </h2>
                  <ul className="text-white dark:text-gray-400 font-medium">
                    <li className="mb-2 flex items-center space-x-3">
                      <Send></Send>
                      <Facebook />
                      <InstagramIcon />
                    </li>
                    <li className="mb-2">
                      <a href="#" className="hover:underline">
                        About
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="hover:underline ">
                        Meet the Team
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Accounts Review
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gold uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul className="text-white font-medium">
                    <li className="mb-2">
                      <a href="#" className="hover:underline">
                        Accessibility
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="hover:underline">
                        Returns Policy
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="hover:underline">
                        Refund Policy
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="hover:underline">
                        Hiring Statistics
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-white sm:text-center dark:text-gray-400">
                © 2024. Buy With Confident. All rights reserved.
              </span>
            </div>
          </div>
        </footer>

        {/*End Footer */}
      </body>
    </html>
  );
}
