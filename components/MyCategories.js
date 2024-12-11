"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function MyCategories() {
  const imagesWithTitles = [
    { image: "/assets/images/category1.jpg", title: "Scanner" },
    { image: "/assets/images/category2.jpg", title: "PhotoCopier" },
    { image: "/assets/images/category3.jpg", title: "Headset" },
    { image: "/assets/images/category4.jpg", title: "Phone" },
    { image: "/assets/images/category5.jpg", title: "Projector" },
    { image: "/assets/images/category6.jpg", title: "Printer" },
    { image: "/assets/images/category7.jpg", title: "Server" },
    { image: "/assets/images/category8.jpg", title: "Accessories" },
    { image: "/assets/images/category9.jpg", title: "Laptop" },
    { image: "/assets/images/category10.png", title: "Tablet" },
    { image: "/assets/images/category11.png", title: "Desktop" },
  ];

  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-2 xl:px-20 py-5">
        <div>
          <div className="text-sm sm:text-[16px] md:text-lg ">Categories</div>
          <div className="flex overflow-x-auto py-4 items-center  scroll-smooth scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500">
            {imagesWithTitles.map((item, index) => (
              <Link key={index} href="/shop ">
                <div
                  key={index}
                  className="flex flex-col items-center justify-center min-w-[100px] md:min-w-[150px]"
                >
                  <Image
                    src={item.image}
                    width={300}
                    height={300}
                    className=" w-[40px] h-[35px] md:w-[70px] md:h-[70px] mb-2  object-cover"
                    alt={item.title}
                  />
                  <p className="text-center text-[12px] md:text-sm ">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
            {/* <CarouselPrevious />
              <CarouselNext /> */}
          </div>
        </div>
      </section>
    </>
  );
}
