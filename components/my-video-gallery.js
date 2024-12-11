"use client";

import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css"; // Import Glightbox styles

const MyVideoGallery = () => {
  useEffect(() => {
    // Initialize GLightbox
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
    });

    // Cleanup function
    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="video-gallery">
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        className="glightbox"
        data-type="video"
      >
        <img
          src="/assets/images/product7.png"
          alt="Video Thumbnail"
          style={{ width: "200px", cursor: "pointer" }}
        />
      </a>

      <a
        href="https://vimeo.com/12345678"
        className="glightbox"
        data-type="video"
      >
        <img
          src="/assets/images/product8.png"
          alt="Vimeo Thumbnail"
          style={{ width: "200px", cursor: "pointer" }}
        />
      </a>

      <a
        href="https://www.youtube.com/watch?v=Vc6SFpPf-V4"
        className="glightbox"
        data-type="video"
      >
        <img
          src="/assets/images/product9.png"
          alt="Self-hosted Video Thumbnail"
          style={{ width: "200px", cursor: "pointer" }}
        />
      </a>
    </div>
  );
};

export default MyVideoGallery;
