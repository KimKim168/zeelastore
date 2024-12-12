"use client";
import React from "react";
import { Link as IconLink } from "lucide-react";
import Image from "next/image";

function MySocialMedia() {
  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
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
            <p className="text-sm">
              #17E0-19E0, Preah Sihanouk Blvd, Sangkat Veal Vong, Khan 7Makara,
              Phnom Penh, Cambodia 120307
            </p>
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
            <p className="text-sm">015 222 772</p>
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
            <p className="text-sm">sales11@chhayhok.com</p>
          </div>
          {/* Social Links */}
          {[
            {
              href: "https://t.me/chhayhok_Computer",
              src: "telegram.png",
              label: "Telegram",
            },
            {
              href: "https://www.facebook.com/ChhayHokComputer",
              src: "facebook.png",
              label: "Facebook",
            },
            {
              href: "http://www.tiktok.com/@chhayhokcomputer",
              src: "tiktok.png",
              label: "Tiktok",
            },
            {
              href: "https://www.youtube.com/channel/UCoJd25pfQNZFcBMeDakuvrw",
              src: "youtube.png",
              label: "YouTube",
            },
            {
              href: "https://www.linkedin.com/company/chhayhokcomputer/posts/?feedView=all&viewAsMember=true",
              src: "linkedin.png",
              label: "LinkedIn",
            },
            {
              href: "https://www.threads.net/@chhayhok_computer",
              src: "threads.png",
              label: "Threads",
            },
            {
              href: "https://www.instagram.com/chhayhok_computer/",
              src: "instagram.png",
              label: "Instagram",
            },
          ].map((item, index) => (
            <div key={index} className="text-blue flex items-center gap-2">
              <Image
                src={`/assets/images/${item.src}`}
                width={24}
                height={24}
                alt={`${item.label} Icon`}
                className="min-w-6"
              />
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${item.label} page`}
                className="text-sm flex items-center gap-1 hover:text-blue-600 transition"
              >
                {item.label} <IconLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MySocialMedia;
