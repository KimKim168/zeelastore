"use client";

import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import Image from "next/image";
import { Play } from "lucide-react";

const MyVideoCard = () => {
  const images = [
    "/assets/images/product5.png",
    "/assets/images/product7.png",
    "/assets/images/product8.png",
    "/assets/images/product4.png",
    "/assets/images/product7.png",
    "/assets/images/product8.png",
  ];

  const videos = [
    "https://www.youtube.com/watch?v=1IBcQk3IAjU&ab_channel=YourReviews", // Example YouTube video
    "https://www.youtube.com/watch?v=ExxFxD4OSZ0&ab_channel=BasicsExplained%2CH3Vtux", // Example Vimeo video
  ];

  useEffect(() => {
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true, // Automatically play videos when opened
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {videos.map((videoSrc, index) => (
        <a
          href={videoSrc}
          className="glightbox relative block"
          data-type="video"
          key={index}
          aria-label={`Play video ${index + 1}`}
        >
          {/* Video Thumbnail */}
          <Image
            src={images[index % images.length]}
            width={300}
            height={300}
            className=" aspect-square  object-cover rounded-lg shadow-lg cursor-pointer"
            alt={`Thumbnail for video ${index + 1}`}
          />
          {/* Play Icon Overlay */}
          <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 w-[60px] h-[60px] rounded-full flex justify-center items-center">
            <Play />
          </div>
        </a>
      ))}
    </div>
  );
};

export default MyVideoCard;
