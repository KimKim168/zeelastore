"use client";
import React from "react";
import { Link as IconLink } from "lucide-react";
import Image from "next/image";
import { IMAGE_LINKS_URL } from "@/env";

function MySocialMedia({ resultContact, resultLink }) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between  gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">{resultContact.name}</h2>
          <div className="space-y-4">
            {/* Address */}
            <div className="text-blue flex items-start gap-2">
              <Image
                src="/assets/images/location.png"
                width={24}
                height={24}
                alt="Location Icon"
                className="min-w-6"
              />
              <p className="text-sm">{resultContact.address}</p>
            </div>
            {/* Phone */}
            <div className="text-blue flex items-center gap-2">
              <Image
                src="/assets/images/telephone.png"
                width={24}
                height={24}
                alt="Phone Icon"
                className="min-w-6"
              />
              <p className="text-sm">{resultContact.phone}</p>
            </div>
            {/* Email */}
            <div className="text-blue flex items-center gap-2">
              <Image
                src="/assets/images/gmail.png"
                width={24}
                height={24}
                alt="Email Icon"
                className="min-w-6"
              />
              <p className="text-sm">{resultContact.email}</p>
            </div>

            {/* Social Links */}
            {resultLink.map((item) => (
              <div key={item.id} className="text-blue flex items-center gap-2">
                <Image
                  src={`${IMAGE_LINKS_URL}${item.image}`}
                  width={24}
                  height={24}
                  alt="image"
                  className="min-w-6"
                />
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 hover:text-blue-600 transition"
                >
                  {item.name} <IconLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Find Us</h2>
          <div className="">
            <iframe
              src={resultContact.map}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
              className="rounded-md shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default MySocialMedia;
