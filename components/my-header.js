import React from "react";

import Image from "next/image";
import {
  Heart,
  PhoneCallIcon,
  ShoppingCart,
  ShoppingCartIcon,
  User,
} from "lucide-react";
import Link from "next/link";
import MyMenu from "./my-menu";
import MyLanguage from "./my-language";
import { SearchProduct } from "./my-search-product";

const MyHeader = () => {
  return (
    <>
      <header className=" background-gradient py-3">
        <div className=" max-w-screen-2xl mx-auto px-2 xl:px-20 p-3">
          <div className="grid grid-cols-12 gap-3 justify-between items-center">
            <div className="col-span-8 md:col-span-2 xl:col-span-1">
              <Link href="/">
                <Image
                  src="/assets/images/logo.png"
                  width={200}
                  height={200}
                  alt="logo"
                  className="w-24 md:w-24"
                />
              </Link>
            </div>
            <div className="col-span-4 flex items-center md:hidden  justify-end space-x-2">
              <div className="md:hidden bg-white p-[5px] rounded-sm">
                <ShoppingCartIcon  />
              </div>
              <SearchProduct />
              {/* Menu */}
              <MyMenu />
              {/*End Menu */}
            </div>
            <div className="hidden md:grid col-span-5 xl:col-span-8 ">
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
                    className="block w-full p-3 text-nowrapw-full ps-10 text-sm text-primary border border-gray-300  bg-gray-50 outline-none  focus:ring-[#FFD700]/100 focus:border-[#FFD700]/100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                    placeholder="Search Product..."
                    required
                  />
                  {/* Error here <button> tag */}
                  <button
                    type="submit"
                    className="text-white absolute end-1.5 bottom-[4px] bg-gold hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/100 font-medium  text-sm px-4 py-2"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden md:col-span-5 xl:col-span-3 md:flex space-x-4 text-nowrap justify-end ">
              <div className="text-white text-sm md:text-[16px] flex items-center ">
                <PhoneCallIcon className="mr-1 md:mr-2 w-4 md:w-5"></PhoneCallIcon>
                <p>015 222 772</p>
              </div>
              <div className="text-white space-x-4 flex items-center overflow-hidden">
                <User className=" min-w-5"></User>
                <ShoppingCart className=""></ShoppingCart>
                <MyLanguage />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MyHeader;
