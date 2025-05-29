import Image from "next/image";
import { PhoneCallIcon, Search, User } from "lucide-react";
import Link from "next/link";
import { SearchProduct } from "./my-search-product";
import SearchInput from "./ui/SearchInput";
import MyHomeModal from "./my-home-modal";
import { Suspense } from "react";
import { APP_LOGO, BASE_BACKEND_URL } from "@/env";

const MyHeader = ({ resultCate, resultContact }) => {
  return (
    <>
      <header>
        {/* <p className="text-[10px] px-2  text-white  xl:hidden">
          Pend $120 more and get free shipping!
        </p> */}
        <div className="px-2 mx-auto max-w-screen-2xl xl:px-20">
          <div className="flex items-center justify-between gap-3">
            <div className="col-span-8 md:col-span-2 xl:col-span-1 ">
              <Link href="/">
                <Image
                  src={APP_LOGO}
                  width={200}
                  height={200}
                  alt="logo"
                  className="h-16 w-16 object-contain"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="text-foreground text-sm flex gap-3 md:text-[16px] items-center ">
                <a
                  href={`/contact`}
                  className="hover:underline whitespace-nowrap flex items-center"
                >
                  Visit our showroom
                </a>
                <span>|</span>
                <span className="whitespace-nowrap flex items-center">
                  Free Delivery to 25 provinces
                </span>
              </div>
            </div>

            {/* <div className="hidden col-span-7 md:grid xl:col-span-9 place-items-center">
              <Suspense>
                <SearchInput className="flex-1" />
              </Suspense>
            </div> */}
            <div>
              <div className="text-foreground text-sm md:text-[16px] flex items-center gap-4">
                <a
                  href={`tel:${resultContact.phone}`}
                  className="hover:underline whitespace-nowrap flex items-center"
                >
                  <PhoneCallIcon className="w-4 mr-1 md:mr-2 md:w-5"></PhoneCallIcon>
                  {resultContact.phone}
                </a>
                <SearchProduct />
                <Suspense>
                  <MyHomeModal categories={resultCate} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MyHeader;
