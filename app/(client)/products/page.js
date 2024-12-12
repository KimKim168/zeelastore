import MyBreadCrumb from "@/components/my-bread-crumb";
import MyGallery from "@/components/my-gallery";
import DescriptionTab from "@/components/products/description-tab";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MyProduct() {
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
      <section className="max-w-screen-2xl mb-10 mx-auto px-2 xl:px-20 mt-5 ">
        <MyBreadCrumb />
        <div className="mt-3">
          <div className="flex flex-col sm:grid grid-cols-12 gap-12">
            <div className="sm:col-span-12 md:col-span-5">
              <MyGallery />
            </div>

            <div className=" sm:col-span-12  md:col-span-7 text-blue xl:ml-5">
              <p className="text-lg md:text-xl font-semibold">
                Acer Swift Go (SFG14-71-59SE) Pure Silver
              </p>
              <div className="max-w-96 mt-4">
                <ul className="space-y-2 text-sm md:text-lg">
                  <li>
                    <ul className="grid grid-cols-12 justify-between gap-5">
                      <li className=" col-span-6">Shipping:</li>
                      <li className="text-color col-span-6"> Free</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="grid grid-cols-12 justify-between gap-5">
                      <li className=" col-span-6">Brand:</li>
                      <li className="text-color col-span-6">Monitor</li>
                    </ul>
                  </li>
                  {/* <li>
                    <ul className="grid grid-cols-12 justify-between gap-5">
                      <li className=" col-span-6">Product View :</li>
                      <li className="text-color col-span-6">20</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="grid grid-cols-12 justify-between gap-5">
                      <li className=" col-span-6">Rate :</li>
                      <li className=" col-span-6">
                        <div className="flex overflow-hidden">
                          <StarIcon width="16" className=" text-yellow-400" />
                          <StarIcon
                            width="16"
                            className="ml-2 text-yellow-400"
                          />
                          <StarIcon
                            width="16"
                            className="ml-2 text-yellow-400"
                          />
                          <StarIcon
                            width="16"
                            className="ml-2 text-yellow-400"
                          />
                        </div>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <ul className="grid grid-cols-12 font-semibold text-color justify-between text-lg md:text-xl">
                      <li className=" col-span-6">Price:</li>
                      <li className="text-color col-span-6">$150</li>
                    </ul>
                  </li>
                  <li>
                    <Button
                      variant="outline"
                      className="flex items-center justify-center"
                    >
                      <Heart />
                      <p>Add to wishlist</p>
                    </Button>
                  </li>
                </ul>
              </div>

              <hr className="border-black mt-5 w-auto"></hr>

              <div className="flex items-center justify-center gap-2 md:gap-5 mt-5 ">
                {/* <Button className="w-full ">
                  <ShoppingCart></ShoppingCart>
                  <p>Buy Now</p>
                </Button> */}
                {/* Socail  */}
                <div className="grid grid-cols-2  sm:grid-cols-4 items-center gap-2 md:gap-3 ">
                  <Link
                    href="https://telegram.org/"
                    target="_blank"
                    className="border p-1 sm:p-2 flex justify-center items-center gap-1 md:gap-2 rounded-md"
                  >
                    <Image
                      src="/assets/images/telegram.png"
                      width={600}
                      height={600}
                      className="w-7 xl:w-10"
                      alt="image"
                    />
                    <span className="text-[10px] sm:text-[10px] xl:text-[13px]">
                      Order With Telegram
                    </span>
                  </Link>
                  <Link
                    href="https://www.messenger.com/"
                    target="_blank"
                    className="border p-1 sm:p-2 flex justify-center items-center gap-1 md:gap-2 rounded-md"
                  >
                    <Image
                      src="/assets/images/messager.jpg"
                      width={600}
                      height={600}
                      className="w-7 xl:w-10"
                      alt="image"
                    />
                    <span className="text-[10px] sm:text-[10px] xl:text-[13px]">
                      Order With Messenger
                    </span>
                  </Link>
                  <Link
                    href="https://web.whatsapp.com/"
                    target="_blank"
                    className="border p-1 sm:p-2 flex justify-center items-center gap-1 md:gap-2 rounded-md"
                  >
                    <Image
                      src="/assets/images/whatsApp.png"
                      width={600}
                      height={600}
                      className="w-7 xl:w-10"
                      alt="image"
                    />
                    <span className="text-[10px] sm:text-[10px] xl:text-[13px]">
                      Order With whatsapp
                    </span>
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    className="border p-[4px] sm:p-2 flex justify-center items-center gap-1 md:gap-2 rounded-md"
                  >
                    <Image
                      src="/assets/images/call.png"
                      width={600}
                      height={600}
                      className="w-7 xl:w-10"
                      alt="image"
                    />
                    <span className="text-[10px] sm:text-[10px] xl:text-[13px]">
                      Order By Calling
                    </span>
                  </Link>
                </div>
                {/*End Socail */}
              </div>

              {/* Add to wishlist */}
              <div className="mt-5 flex space-x-2">Video View</div>
              {/*End Add to wishlist */}
            </div>
          </div>
          {/* Content utttom */}
          <DescriptionTab />
          {/*End Content utttom */}
        </div>
        <hr className="border-black md:w-96 mx-auto mt-5"></hr>
      </section>
      <div>
        <div className=" max-w-screen-2xl mx-auto px-2 xl:px-20 py-5">
          <div className="border-l-4 border-blue-bold ">
            <div className="flex justify-between border-b-2 mx-1 pb-2 px-2  border-blue-bold  mb-4">
              <p className="text-sm sm:text-[16px] md:text-lg ">
                Related products
              </p>
              <a className="text-sm sm:text-[16px] md:text-lg ">View More</a>
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
      </div>
    </>
  );
}
