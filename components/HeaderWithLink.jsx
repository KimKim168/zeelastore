"use client";

import Link from "next/link";

const HeaderWithLink = ({ title, href }) => {
  return (
    <div className="flex flex-col pb-1 mt-12 mb-4">
      <div className="flex items-center justify-between">
        <p className="text-[12px] sm:text-[16px] md:text-[17px] bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent font-bold py-1">
          {title}
        </p>

        {href && (
          <Link
            href={href}
            className="text-[12px] sm:text-[16px] md:text-[17px] bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent py-1"
          >
            View More {`>`}
          </Link>
        )}
      </div>

      <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 mt-2 rounded"></div>
    </div>
  );
};

export default HeaderWithLink;
