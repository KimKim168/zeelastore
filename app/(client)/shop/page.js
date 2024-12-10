import MyCategoryComponent from "@/components/my-accordion-category";
import MyBreadCrumb from "@/components/my-bread-crumb-shop";
import MyDualRangPrice from "@/components/my-dual-range-price";
import MylastestProduct from "@/components/my-lastest-product";
import MyShop from "@/components/my-filter";

import React from "react";
import Filter from "@/components/my-filter";

function page() {
  const imageUrls = [
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
    <div className="max-w-screen-2xl mb-10 mx-auto px-2 xl:px-20 mt-5 xl:mt-10 ">
      <section>
        <div >
          <Filter/>
        </div>
      </section>
      <section className="mt-5 ">
        <div className="grid grid-cols-12 gap-3">
          {/* Left Content */}
          <div className="hidden md:grid col-span-3 ">
            {/* Category */}
            <MyCategoryComponent />
            {/*End Category */}
            {/* Filter price */}

            <MyDualRangPrice />
            {/*End Filter price */}

            {/* Lastest Products */}
            <MylastestProduct />
            {/*End Lastest Products */}
          </div>
          {/*End Left Content */}

          {/* Right Content */}
          <div className="col-span-12 md:col-span-9 ">
            <div className="mb-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
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
          {/*End Right Content */}
        </div>
      </section>
    </div>
  );
}

export default page;
