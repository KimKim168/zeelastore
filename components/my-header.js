import React from "react";

import Image from "next/image";
import { PhoneCallIcon, Search, User } from "lucide-react";
import Link from "next/link";
import MyMenu from "./my-menu";
// import MyLanguage from "./my-language";
import { SearchProduct } from "./my-search-product";
import SearchInput from "./ui/SearchInput";

const MyHeader = () => {
  return (
    <>
      <header className=" background-gradient py-3">
        {/* <p className="text-[10px] px-2  text-white  xl:hidden">
          Pend $120 more and get free shipping!
        </p> */}
        <div className=" max-w-screen-2xl mx-auto px-2 xl:px-20 md:p-3">
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
              {/* <div className="md:hidden bg-white p-[5px] rounded-sm">
                <ShoppingCartIcon />
              </div> */}
              <SearchProduct />
              {/* Menu */}
              <MyMenu />
              {/*End Menu */}
            </div>
            <div className="hidden md:grid col-span-7 xl:col-span-9 ">
              <div className="flex items-center bg-white justify-between border ">
                <SearchInput className="flex-1" />
                <p className="bg-blue-900 text-white py-1 px-2 mr-1">Search</p>
              </div>
            </div>
            <div className="hidden sm:col-span-3 xl:col-span-2 md:flex space-x-4 text-nowrap justify-end ">
              <div className="text-white text-sm md:text-[16px] flex items-center ">
                <PhoneCallIcon className="mr-1 md:mr-2 w-4 md:w-5"></PhoneCallIcon>
                <p>015 222 772</p>
              </div>
              <div className="text-white space-x-4 flex items-center overflow-hidden">
                <User className=" min-w-5"></User>

                {/* <MyLanguage /> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MyHeader;
