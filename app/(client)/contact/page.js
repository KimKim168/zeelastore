import React from "react";

import Mylocation from "@/components/my-location-map";
import MySocialMedia from "@/components/my-social-media";

function Contact() {
  return (
    <div className="max-w-screen-2xl mb-10 mx-auto px-4 sm:px-6 lg:px-20 mt-5">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Information Section */}
        <div className="flex-1">
        <MySocialMedia/>
        </div>

        {/* Google Map Section */}
        <div className="flex-1">
         <Mylocation/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
