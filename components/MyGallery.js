"use client";

import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const MyGallery = () => {
  const images = [
    "/assets/images/product5.png",
    "/assets/images/product7.png",
    "/assets/images/product8.png",
    "/assets/images/product4.png",
    "/assets/images/product7.png",
    "/assets/images/product8.png",
  ];

  useEffect(() => {
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: false,
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className=" flex flex-col gap-2">
      <a href={images[0]} className="glightbox" data-gallery="gallery">
        <Card>
          <CardContent>
            <AspectRatio ratio={1 / 1}>
              <Image
                className="w-full rounded-md cursor-pointer"
                src={images[0]}
                alt="Book Cover"
                width="5000"
                height="5000"
              />
            </AspectRatio>
          </CardContent>
        </Card>
      </a>
      <div className="grid grid-cols-4 gap-2">
        {images.map((src, index) => (
          <a
            href={src}
            className="glightbox"
            data-gallery="gallery"
            key={index}
          >
            <Image
              width="5000"
              height="5000"
              className="aspect-square border w-full border-[#87b3ae] shadow-sm p-1 hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-md cursor-pointer"
              src={src}
              alt={`Thumbnail ${index + 1}`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyGallery;
