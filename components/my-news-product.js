"use client";
import Image from "next/image";
import React from "react";

export default function MyNewsProduct() {
  const imageUrls = [
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$190",
      view: "20",
    },
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product4.png",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product5.png",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$300",
      view: "20",
    },
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product4.png",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product5.png",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
  ];

  return (
    <>
      <div className=" max-w-screen-2xl mx-auto px-2 xl:px-20 py-5">
        <div>
          <div className="flex justify-between items-center border-b-2 pb-1 border-blue-bold  mb-4">
            <p className="text-[12px] sm:text-[16px] md:text-[17px] border-double shadow-md  text-white border-x-[5px] background-gradient1 rounded-tl-full rounded-br-full px-8 py-1">
              New Products
            </p>
            <a className="text-[12px] sm:text-[16px] md:text-[17px] hover:underline cursor-pointer text-hover">
              View More
            </a>
          </div>
        </div>
        <div className="mb-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:mb-8 lg:grid-cols-5 xl:grid-cols-6">
          {imageUrls.map((item, index) => (
            <div
              key={index}
              className="border aspect-square border-blue bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="aspect-square w-full">
                <a href="/products">
                  <Image
                    className="mx-auto h-full dark:hidden transition-transform duration-300 hover:scale-110"
                    width={600}
                    height={600}
                    src={item.image}
                    alt="product"
                  />
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="/products"
                  className="text-sm line-clamp-2 leading-tight text-gray-500 hover:underline dark:text-white"
                >
                  {item.title}
                </a>
                <div className=" text-sm mt-1 overflow-hidden justify-between items-center">
                  <div className="text-color grid grid-cols-12 justify-between overflow-hidden text-sm md:text-lg">
                    <p className="col-span-6">Price:</p>
                    <p className="col-span-6 text-end">{item.price}</p>
                  </div>
                  {/* <div className="col-span-6 ">
                      <div className="flex items-center justify-end">
                        <Eye width="16" />
                        <p>{item.view}</p>
                      </div>
                    </div> */}
                </div>
                {/* <div className="flex mt-3">
                    <p className="text-blue mr-1">Rate:</p>
                    <div className="flex overflow-hidden">
                      <StarIcon width="16" className="md:ml-2 text-yellow-400" />
                      <StarIcon width="16" className="md:ml-2 text-yellow-400" />
                      <StarIcon width="16" className="md:ml-2 text-yellow-400" />
                      <StarIcon width="16" className="md:ml-2 text-yellow-400" />
                    </div>
                  </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
