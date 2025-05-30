import Image from "next/image";
import { PhoneCallIcon, Search, User } from "lucide-react";
import Link from "next/link";
import { SearchProduct } from "./my-search-product";
import SearchInput from "./ui/SearchInput";
import MyHomeModal from "./my-home-modal";
import { Suspense } from "react";
import { APP_LOGO, BASE_BACKEND_URL } from "@/env";
import MyNavigation from "./my-navigation";

const MyHeader = ({ resultCate, resultContact }) => {
  return (
    <>
      <header>
        {/* <p className="text-[10px] px-2  text-white  xl:hidden">
          Pend $120 more and get free shipping!
        </p> */}
        <div className="px-2 mx-auto max-w-screen-2xl xl:px-20">
          <div className="flex items-center justify-between gap-8 lg:py-2">
            <Link href="/" className="w-auto">
              <Image
                src={APP_LOGO}
                width={512}
                height={512}
                alt="logo"
                className="w-[94px] py-2 lg:w-[140px] object-contain"
              />
            </Link>
            <div className="flex flex-col flex-1">
              <div className="flex justify-end lg:justify-between w-full">
                <div className="hidden lg:block">
                  <div className="text-foreground text-lg flex gap-3 items-center ">
                    <a
                      href={`/contact`}
                      className="underline underline-offset-4 whitespace-nowrap flex items-center"
                    >
                      Visit our showroom
                    </a>
                    <span>|</span>
                    <span className="whitespace-nowrap flex items-center">
                      Free Delivery to 25 provinces
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-foreground text-lg flex items-center gap-4">
                    <span className="hidden lg:flex gap-4">
                      <a
                        href={`tel:${resultContact.phone}`}
                        className="hover:underline whitespace-nowrap flex items-center"
                      >
                        <PhoneCallIcon className="w-4 mr-1 md:mr-2 md:w-5"></PhoneCallIcon>
                        {resultContact.phone}
                      </a>
                      <a
                        href={`tel:${resultContact.phone}`}
                        className="hover:underline whitespace-nowrap flex items-center"
                      >
                        <PhoneCallIcon className="w-4 mr-1 md:mr-2 md:w-5"></PhoneCallIcon>
                        {resultContact.phone}
                      </a>
                      <a
                        href={`tel:${resultContact.phone}`}
                        className="hover:underline whitespace-nowrap flex items-center"
                      >
                        <PhoneCallIcon className="w-4 mr-1 md:mr-2 md:w-5"></PhoneCallIcon>
                        {resultContact.phone}
                      </a>
                    </span>
                    <span className="lg:hidden">
                      <SearchProduct />
                    </span>
                    <Suspense>
                      <MyHomeModal categories={resultCate} />
                    </Suspense>
                  </div>
                </div>
              </div>
              <div>
                <MyNavigation resultCate={resultCate} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MyHeader;
