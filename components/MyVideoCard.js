import React from "react";
import Image from "next/image";

export default function MyVideoCard({ thumbnailSrc, altText }) {
  return (
    <div>
      <div className="aspect-square flex justify-center  items-center rounded-[10px] relative overflow-hidden border border-blue-200 shadow-md">
        <div className="relative w-full h-full">
          <Image
            src={thumbnailSrc}
            alt={altText}
            width={3000}
            height={3000}
            className="object-cover rounded-[10px] w-[220px] h-[200px]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 w-[50px] h-[50px] rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[20px] h-[20px] fill-white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
