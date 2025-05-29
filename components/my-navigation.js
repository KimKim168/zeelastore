"use client";
import React, { Suspense } from "react";
import { usePathname } from "next/navigation";
import { RainbowButton } from "./rainbow-button";
import Link from "next/link";
// import MyAllCategory from "./my-all-categories";

function MyNavigation({ resultCate }) {
  // console.log(resultCate);
  const pathname = usePathname();
  return (
    <>
      <div className="w-full border-b shadow-sm">
        <div className="hidden md:flex justify-between text-[10px] sm:text-sm md:text-[16] items-center max-w-screen-2xl mx-auto xl:px-20 ">
          <ul className="flex items-center space-x-3 font-medium lg:flex-row lg:space-x-5 lg:mt-0">
            <li className=" md:py-3">
              {/* <a
                href="#"
                className="flex items-center p-2 text-black rounded text-nowrap bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
              >
                <Suspense>
                  <MyAllCategory resultCate={resultCate} />
                </Suspense>
              </a> */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-dark to-primary rounded-xl blur-lg opacity-30 group-hover:opacity-90 transition duration-700 group-hover:duration-300"></div>
                <Link
                  href="/products"
                  className="block font-bold text-primary group-hover:text-primary-dark transition duration-200"
                >
                  <RainbowButton className="font-bold">
                    Special Offer
                  </RainbowButton>
                </Link>
              </div>
            </li>
            <li>
              <Link
                href="/"
                className={`px-2 py-2 rounded ${
                  pathname === "/"
                    ? "underline  underline-offset-4  text-primary font-semibold"
                    : "text-black hover:text-primary"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={`px-2 py-2 rounded ${
                  pathname === "/products"
                    ? "underline  underline-offset-4  text-primary font-semibold"
                    : "text-black hover:text-primary"
                }`}
              >
                Products
              </Link>
            </li>

            {/* <li>
              <a
                href="/video-gallery"
                className={`px-2 py-2 rounded ${
                  pathname === "/video-gallery"
                    ? "underline  underline-offset-4  text-primary font-semibold"
                    : "text-black hover:text-primary"
                }`}
              >
                videos
              </a>
            </li> */}
            <li>
              <Link
                href="/support"
                className={`px-2 py-2 rounded ${
                  pathname === "/support"
                    ? "underline  underline-offset-4  text-primary font-semibold"
                    : "text-black hover:text-primary"
                }`}
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`px-2 py-2 rounded ${
                  pathname === "/about"
                    ? "underline  underline-offset-4  text-primary font-semibold"
                    : "text-black hover:text-primary"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`px-2 py-2 rounded ${
                  pathname === "/contact"
                    ? "underline  underline-offset-4  text-primary font-semibold"
                    : "text-black hover:text-primary"
                }`}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className={`px-2 py-2 rounded ${
                  pathname === "/resources"
                    ? "underline  underline-offset-4  text-primary font-semibold"
                    : "text-black hover:text-primary"
                }`}
              >
                Resource
              </Link>
            </li>
          </ul>
          {/* <p className="hidden xl:flex">
            Pend $120 more and get free shipping!
          </p> */}
        </div>
      </div>
    </>
  );
}

export default MyNavigation;
