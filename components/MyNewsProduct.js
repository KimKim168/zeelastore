"use client";
import { Eye, StarIcon } from "lucide-react";
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
      <section className="max-w-screen-2xl mx-auto px-2 xl:px-20 py-5">
        <div className="text-lg mb-4">News</div>
        <div className="mb-4 grid gap-4 grid-cols-2 md:grid-cols-3 md:mb-8  xl:grid-cols-6">
          {imageUrls.map((item, index) => (
            <div
              key={index}
              className="border aspect-square border-blue bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="aspect-square w-full">
                <a href="/products">
                  <img
                    className="mx-auto h-full dark:hidden transition-transform duration-300 hover:scale-110"
                    src={item.image}
                    alt="product"
                  />
                </a>
              </div>
              <div className="pt-6">
                <a
                  href="/products"
                  className="text-sm line-clamp-2 leading-tight text-gray-500 hover:underline dark:text-white"
                >
                  {item.title}
                </a>
                <div className="grid grid-cols-12  text-sm mt-4 overflow-hidden justify-between items-center">
                  <div className="text-color col-span-6 overflow-hidden text-sm md:text-lg">
                    {item.price}
                  </div>
                  <div className="col-span-6 ">
                    <div className="flex items-center justify-end">
                      <Eye width="16" />
                      <p>{item.view}</p>
                    </div>
                  </div>
                </div>
                <div className="flex mt-3">
                  <p className="text-blue mr-1">Rate:</p>
                  <div className="flex overflow-hidden">
                    <StarIcon width="16" className="md:ml-2 text-yellow-400" />
                    <StarIcon width="16" className="md:ml-2 text-yellow-400" />
                    <StarIcon width="16" className="md:ml-2 text-yellow-400" />
                    <StarIcon width="16" className="md:ml-2 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
