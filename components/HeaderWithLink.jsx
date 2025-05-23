"use client";

import Link from "next/link";

const HeaderWithLink = ({ title, href }) => {
  return (
    <div className="flex flex-col pb-1 mt-12 mb-2">
      <div className="flex items-center justify-between">
        <p className="bg-gradient-to-r text-[#48bd33] text-transparent font-bold text-lg sm:text-lg md:text-xl tracking-wide py-1 text-center">
          {title}
        </p>

        {href && (
          <Link
            href={href}
            className="text-sm sm:text-base hover:translate-x-2 transition-all duration-500 md:text-lg bg-gradient-to-r bg-[#48bd33] bg-clip-text text-transparent font-medium tracking-wide py-1"
          >
            View More &gt;
          </Link>
        )}
      </div>

      <div className="h-[2px] w-full bg-gradient-to-r bg-[#48bd33] rounded"></div>
    </div>
  );
};

export default HeaderWithLink;
