"use client";
import Image from "next/image";
import React from "react";

export default function MyBelowSlider() {
  return (
    <>
      {" "}
      {/* below slide */}
      <section className="max-w-screen-2xl mx-auto px-2 xl:px-20 ">
        <div className="grid grid-cols-12 md:flex  justify-between py-4 items-center gap-4">
          <div className="col-span-12">
            <Image
              src="/assets/images/image5.png"
              width={3000}
              height={3000}
              className="md:w-[450px] md:h-[200px] shadow-md aspect-video object-cover "
              alt="image"
            />
          </div>
          <div className="col-span-12">
            <Image
              src="/assets/images/image6.png"
              width={3000}
              height={3000}
              className="md:w-[450px] md:h-[200px] shadow-md aspect-video object-cover "
              alt="image"
            />
          </div>
          <div className="col-span-12">
            <Image
              src="/assets/images/image4.png"
              width={3000}
              height={3000}
              className="md:w-[450px] md:h-[200px] shadow-md aspect-video object-cover "
              alt="image"
            />
          </div>
        </div>
      </section>
      {/*End below slide */}
    </>
  );
}
