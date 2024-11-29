"use client";
import Image from "next/image";
import React from "react";

export default function MyBelowSlider() {
  return (
    <>
      {" "}
      {/* below slide */}
      <section className="max-w-screen-2xl mx-auto px-20 ">
        <div className="flex justify-between py-4 items-center gap-4">
          <div>
            <Image
              src="/assets/images/image5.png"
              width={3000}
              height={3000}
              className="w-[450px] h-[200px] shadow-md aspect-video object-cover "
              alt="image"
            />
          </div>
          <div>
            <Image
              src="/assets/images/image6.png"
              width={3000}
              height={3000}
              className="w-[450px] h-[200px] shadow-md aspect-video object-cover "
              alt="image"
            />
          </div>
          <div>
            <Image
              src="/assets/images/image4.png"
              width={3000}
              height={3000}
              className="w-[450px] h-[200px] shadow-md aspect-video object-cover "
              alt="image"
            />
          </div>
        </div>
      </section>
      {/*End below slide */}
    </>
  );
}
