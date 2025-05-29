"use client";
import React from "react";
import Image from "next/image";

function MySocialMedia({ resultContact }) {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      {/* Contact Information Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-extrabold mb-6 text-gray-800">
          {resultContact.name}
        </h2>

        {/* Contact Details */}
        <div className="space-y-4">
          {/* Phone */}
          <div className="flex items-start gap-3">
            <Image
              src="/assets/images/telephone.png"
              width={24}
              height={24}
              alt="Phone icon representing contact number"
              className="w-6 h-6"
            />
            <p className="text-gray-600 text-sm">{resultContact.phone}</p>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <Image
              src="/assets/images/gmail.png"
              width={24}
              height={24}
              alt="Email icon representing email address"
              className="w-6 h-6"
            />
            <p className="text-gray-600 text-sm">{resultContact.email}</p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <Image
              src="/assets/images/location.png"
              width={24}
              height={24}
              alt="Location icon representing address"
              className="w-6 h-6"
            />
            <p className="text-gray-600 text-sm">{resultContact.address}</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-extrabold mb-6 text-gray-800">
            Find Us
          </h2>
          <iframe
            src={resultContact.map}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
            className="w-full h-64 rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MySocialMedia;
