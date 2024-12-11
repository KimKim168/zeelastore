"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

// Dynamically import GLightbox
const GLightbox = dynamic(() => import("glightbox"), { ssr: false });

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
  const [showGallery, setShowGallery] = useState(false);

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
      {/* Main Image */}
      <a
        href={image}
        className="glightbox"
        data-gallery="gallery"
        aria-label="View larger image"
        onClick={() => setShowGallery(true)}
      >
        <Image
          width={600}
          height={600}
          className="w-full transition-transform duration-500 rounded-md cursor-pointer hover:scale-105"
          src={image}
          alt="Book Cover"
        />
      </a>

      {/* Swiper Gallery */}
      {images.length > 0 && (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={4}
          className="mt-4"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <a
                href={src}
                className="glightbox"
                data-gallery="gallery"
                aria-label={`View thumbnail ${index + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  setShowGallery(true);
                }}
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
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Fullscreen Gallery with Close Button */}
      {showGallery && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600"
            onClick={() => setShowGallery(false)}
          >
            ✕
          </button>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-full max-w-4xl max-h-[90vh]"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  width={800}
                  height={800}
                  className="w-full h-full object-contain"
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default MyGallery;
