import MyPagination from "@/components/my-pagination";
import { BASE_API_URL, IMAGE_PRODUCT_URL } from "@/env";
import { ListX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function MyDataList({
  search,
  categoryId,
  subCategoryId,
  brandId,
  priceFrom,
  priceTo,
  orderBy,
  orderDir,
  perPage,
  page,
}) {
  const res = await fetch(
    `${BASE_API_URL}/products?search=${search}&categoryId=${categoryId}&subCategoryId=${subCategoryId}&brandId=${brandId}&priceFrom=${priceFrom}&priceTo=${priceTo}&orderBy=${orderBy}&orderDir=${orderDir}&perPage=${perPage}&page=${page}`,
    { next: { revalidate: 3600 } }
  );
  const result = await res.json();
  const products = result?.data;

  const from = result?.from;
  const to = result?.to;
  const total = result?.total;
  const links = result?.links;
  return (
    <>
      <div className="flex-1 ">
        {products?.length < 1 && (
          <p className="flex items-center justify-center w-full h-20 gap-2">
            <ListX /> No Data
          </p>
        )}
        <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-3 md:grid-cols-4 md:mb-8 lg:grid-cols-5 ">
          <>
            {products?.map((item) => (
              <div key={item.id} className="overflow-hidden border border-blue">
                <Link href={`/products/${item.id}`} key={item.id}>
                  <Image
                    width={600}
                    height={600}
                    className="object-contain w-full mx-auto transition-transform duration-300 border-b aspect-square dark:hidden hover:scale-105"
                    src={IMAGE_PRODUCT_URL + item.image}
                    alt="product"
                  />
                </Link>
                <div className="p-2">
                  <Link
                    href={`/products/${item.id}`}
                    className="text-sm leading-tight text-gray-500 line-clamp-2 hover:underline dark:text-white"
                  >
                    {item.title}
                  </Link>
                  <div className="items-center justify-between mt-1 overflow-hidden text-sm ">
                    <div className="text-color grid grid-cols-12 justify-between overflow-hidden text-sm md:text-[16px]">
                      <p className="col-span-6">Price:</p>
                      <p className="col-span-6 text-end">${item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        </div>
        {/* pagination */}
        {total > 0 && (
          <MyPagination from={from} to={to} total={total} links={links} />
        )}
      </div>
    </>
  );
}
