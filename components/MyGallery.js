"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import GLightbox and Carousel components
const GLightbox = dynamic(() => import("glightbox"), { ssr: false });
const Carousel = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.Carousel),
  { ssr: false }
);
const CarouselContent = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselContent),
  { ssr: false }
);
const CarouselItem = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselItem),
  { ssr: false }
);

const MyGallery = ({
  image = "/assets/images/product5.png",
  images = [
    "/assets/images/product7.png",
    "/assets/images/product8.png",
    "/assets/images/product4.png",
    "/assets/images/product7.png",
    "/assets/images/product8.png",
  ],
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: false,
    });

    return () => {
      lightbox.destroy();
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="max-w-[500px] mx-auto flex flex-col gap-4">
      <a
        href={image}
        className="glightbox"
        data-gallery="gallery"
        aria-label="View larger image"
      >
        <Image
          width={600}
          height={600}
          className="w-full transition-transform duration-500 rounded-md cursor-pointer hover:scale-105"
          src={image}
          alt="Book Cover"
        />
      </a>
      {images.length > 0 && (
        <Carousel>
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem className="basis-1/4" key={index}>
                <a
                  href={src}
                  className="glightbox"
                  data-gallery="gallery"
                  aria-label={`View thumbnail ${index + 1}`}
                >
                  <Image
                    width={100}
                    height={100}
                    className="w-full aspect-[1/1] hover:scale-95 transition-transform duration-500 ease-in-out object-contain p-0.5 rounded-md cursor-pointer"
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    loading="lazy"
                  />
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </div>
  );
};

export default MyGallery;
