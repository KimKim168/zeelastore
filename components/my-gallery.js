"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox"; // Import the Lightbox component
import "yet-another-react-lightbox/styles.css"; // Import the Lightbox styles
import Image from "next/image";

const MyGallery = ({
  image = "/assets/images/product5.png", // Main image
  images = [
    "/assets/images/product7.png",
    "/assets/images/product8.png",
    "/assets/images/product4.png",
    "/assets/images/product7.png",
    "/assets/images/product8.png",
  ], // Thumbnails
}) => {
  // Combine the main image and thumbnails into one array for the Lightbox
  const allImages = [image, ...images];

  const [open, setOpen] = useState(false); // To manage the lightbox open state
  const [currentIndex, setCurrentIndex] = useState(0); // To manage the current image index

  // Handle thumbnail click to open the lightbox with the clicked image
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index); // Set the current index for the clicked thumbnail
    setOpen(true); // Open the lightbox
  };

  return (
    <div className="max-w-[500px] mx-auto flex flex-col gap-4">
      {/* Main Image */}
      <a
        href={allImages[0]} // Set the main image as the first item in the array
        className="cursor-pointer"
        onClick={(e) => {
          e.preventDefault(); // Prevent the default anchor behavior (which would open in a new tab)
          setOpen(true); // Open the lightbox when the main image is clicked
          setCurrentIndex(0); // Set index to 0 for the main image
        }}
        aria-label="View larger image"
      >
        <Image
          width={600}
          height={600}
          className="w-full transition-transform duration-500 rounded-md cursor-pointer hover:scale-105"
          src={allImages[0]} // Main image as the first in the array
          alt="Main Image"
        />
      </a>

      {/* Thumbnails */}
      {images.length > 0 && (
        <div className="grid grid-cols-4 gap-2">
          {allImages.map((src, index) => {
            if (index === 0) return null; // Skip the main image for thumbnails
            return (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)} // Open lightbox with the clicked thumbnail
                className="relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <Image
                  width={100}
                  height={100}
                  className="w-full aspect-[1/1] hover:scale-95 transition-transform duration-500 ease-in-out object-contain p-0.5 rounded-md cursor-pointer"
                  src={src}
                  alt={`Thumbnail ${index}`}
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        open={open} // Set the state for opening the lightbox
        close={() => setOpen(false)} // Close the lightbox
        currentIndex={currentIndex} // Set the current index of the image in the lightbox
        slides={allImages.map((src) => ({ src }))} // Map images into the required format for Lightbox
      />
    </div>
  );
};

export default MyGallery;
