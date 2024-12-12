import React from "react";
import { AlignJustifyIcon } from "lucide-react";

function MyNavigation() {
  return (
    <>
      <div className="w-full  border-b shadow-sm">
        <div className="hidden md:flex justify-between text-[10px] sm:text-sm md:text-[16] items-center max-w-screen-2xl mx-auto xl:px-20 ">
          <ul className="flex   items-center  font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li className=" md:p-3 ">
              <a
                href="#"
                className="flex items-center p-2 text-nowrap text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
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
                href="/"
                className="block p-2 text-nowrap text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 text-nowrap text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 text-nowrap text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contac us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block p-2 text-nowrap text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                video
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block p-2 text-nowrap text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                About Us
              </a>
            </li>
          </ul>
          <p className="hidden xl:flex">
            Pend $120 more and get free shipping!
          </p>
        </div>
      </div>
    </>
  );
}

export default MyNavigation;
