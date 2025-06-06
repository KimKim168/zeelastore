import HeaderWithLink from "@/components/HeaderWithLink";
import MyGallery from "@/components/my-gallery";
import MyOrderWithTelegram from "@/components/my-order-with-telegram";
import MyRelatedProduct from "@/components/my-related-product";
import MyVideoGallery from "@/components/my-video-gallery";
import DescriptionTab from "@/components/products/description-tab";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronsRight } from "lucide-react";
import {
  BASE_API_URL,
  IMAGE_LINKS_URL,
  IMAGE_PRODUCT_URL,
  MULTI_IMAGE_PRODUCT_URL,
} from "@/env";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const response = await fetch(`${BASE_API_URL}/products/${id}`, {
    next: { revalidate: 600 },
  });
  const product = await response.json();
  const htmlString = product.description || "";
  const description = htmlString.replace(/<[^>]+>/g, "");

  return {
    title: `${product.title}`,
    description,
    openGraph: {
      title: `${product.title}`,
      description: description,
      url: `https://chhayhok.com/products/${id}`,
      images: [
        {
          url: `${IMAGE_PRODUCT_URL}${product.image}`,
          width: 1200, // optional — add real dimensions if you know them
          height: 630, // optional
          alt: product.title,
        },
      ],
    },
  };
}

export default async function MyProduct({ params }) {
  const { id } = await params;
  const respone = await fetch(`${BASE_API_URL}/products/${id}`, {
    next: { revalidate: 600 },
  });
  const result = await respone.json();
  // console.log(result);
  const brand = result?.brand;
  const category = result?.category;
  const sub_category = result?.sub_category;

  const responeLink = await fetch(`${BASE_API_URL}/links`, {
    next: { revalidate: 600 },
  });
  const resultLink = await responeLink.json();
  const images = result?.images.map(
    (item) => `${MULTI_IMAGE_PRODUCT_URL}${item.image}`
  );
  const videos = result?.videos?.map((item) => {
    return {
      id: item.id,
      url: item.url,
      image: `${MULTI_IMAGE_PRODUCT_URL}${item.image}`,
    };
  });
  // console.log(videos);
  const productRelated = await fetch(
    `${BASE_API_URL}/products?categoryId=${result?.category_id}&perPage=18`,
    { next: { revalidate: 600 } }
  );
  const resultProductRelated = await productRelated.json();
  // console.log(resultProductRelated.data);
  const res = await fetch(`${BASE_API_URL}/categories?withSub=2`, {
    next: { revalidate: 600 },
  });
  const categories = await res.json();
  //   console.log([`${IMAGE_PRODUCT_URL}${result?.image}`, ...images]);
  return (
    <>
      <section className="px-2 mx-auto mb-10 max-w-screen-2xl xl:px-20 ">
        <Breadcrumb className="my-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {category?.name && (
              <>
                <BreadcrumbSeparator>
                  <ChevronsRight />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={`/products?categoryId=${category?.id}&category=${category?.name}`}
                  >
                    {category?.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            {sub_category?.name && (
              <>
                <BreadcrumbSeparator>
                  <ChevronsRight />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={`/products?subCategoryId=${sub_category?.id}&categoryId=${category?.id}&category=${category?.name}&subCategory=${sub_category?.name}`}
                  >
                    {sub_category?.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            {brand?.name && (
              <>
                <BreadcrumbSeparator>
                  <ChevronsRight />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={`/products?brandId=${brand?.id}&brand=${brand?.name}`}
                  >
                    {brand?.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
        {/* <MyBreadCrumb result={result?.title} /> */}
        <div className="mt-3">
          <div className="flex flex-col grid-cols-12 gap-12 sm:grid">
            <div className="sm:col-span-12 md:col-span-5">
              <MyGallery
                photos={[`${IMAGE_PRODUCT_URL}${result?.image}`, ...images]}
              />
            </div>

            <div className=" sm:col-span-12 md:col-span-7 text-foreground xl:ml-5">
              <div>
                <p className="text-lg font-semibold md:text-xl">
                  {result?.title}
                </p>

                <div className="mt-4">
                  <ul className="space-y-2 text-sm md:text-lg">
                    {/* <li>
                      <ul className="flex items-center gap-5">
                        <li className="col-span-6 ">Shipping:</li>
                        <li className="col-span-6 text-gray-700">
                          {" "}
                          {result?.shipping > 0.0
                            ? `${result?.shipping} $`
                            : "Free"}
                        </li>
                      </ul>
                    </li> */}
                    {/* {brand?.name && (
                      <li>
                        <ul className="flex items-center gap-5">
                          <li className="col-span-6 ">Brand:</li>
                          <li className="col-span-6 text-gray-700">
                            <Link
                              className="hover:underline"
                              href={`/products?brandId=${brand?.id}`}
                            >
                              {brand?.name}
                            </Link>
                          </li>
                        </ul>
                      </li>
                    )} */}

                    {/* <li>
                      <ul className="flex items-center w-full gap-5">
                        <li className="col-span-6 ">Category:</li>
                        <li className="flex items-center col-span-6 gap-2 text-gray-700">
                          <Link
                            href={`/products?categoryId=${category?.id}`}
                            className="hover:underline"
                          >
                            {category?.name}
                          </Link>
                          {sub_category?.name && (
                            <Link
                              href={`/products?subCategoryId=${sub_category?.id}&categoryId=${category?.id}`}
                              className="hover:underline"
                            >
                              / {sub_category?.name}
                            </Link>
                          )}
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <div className="space-y-4">
                        {result?.short_description && (
                          <div>
                            <div className="col-span-6 text-black mt-2 flex gap-2 items-center text-base font-semibold md:text-lg">
                              Key Specifications
                            </div>
                            <div
                              className="font-normal text-gray-500 whitespace-pre-line text-sm md:text-base"
                              dangerouslySetInnerHTML={{
                                __html: result?.short_description,
                              }}
                            />
                          </div>
                        )}

                        {result?.format && (
                          <div className="col-span-6 text-black text-lg font-semibold md:text-xl">
                            Colors :{" "}
                            <span className="text-base text-gray-500 font-normal">
                              {result?.format}
                            </span>
                          </div>
                        )}
                      </div>
                    </li>
                    <li>
                      <ul className="flex items-center justify-start gap-5 mt-4 text-lg font-semibold md:text-xl">
                        <li className="col-span-6 text-black">Price:</li>
                        <li className="col-span-6 text-color">
                          {result.discount ? (
                            <div className="flex items-center justify-end gap-2">
                              {/* Original Price (Strikethrough) */}
                              <p className="line-through decoration-red-500 text-gray-400 font-normal ">
                                {/* ${item.price.toFixed(2)} */}${result.price}
                              </p>

                              {/* Discounted Price */}
                              <p className="font-semibold text-black">
                                ${result.price - result.discount}
                              </p>
                            </div>
                          ) : (
                            <p className="font-medium text-black">
                              ${result.price}
                            </p>
                          )}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <HeaderWithLink title="Order With" />
                <div className="grid items-center grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 md:gap-3 ">
                  <MyOrderWithTelegram id={id} />
                  {resultLink?.map(
                    (item) =>
                      item?.link_in_product_detail == 1 && (
                        <div
                          key={item.id}
                          className="border border-primary hover:scale-110 transition-all duration-300 rounded-md overflow-hidden"
                        >
                          <Link
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            className="flex items-center justify-center w-full gap-1 p-1 bg-white dark:bg-gray-900 md:gap-2"
                          >
                            <Image
                              src={IMAGE_LINKS_URL + item.image}
                              width={600}
                              height={600}
                              className="size-7 xl:size-10 p-1"
                              alt="image"
                            />
                            <span className="text-[10px] sm:text-[10px] xl:text-[13px]">
                              {item.name}
                            </span>
                          </Link>
                        </div>
                      )
                  )}
                </div>

                {/*End Socail */}
              </div>

              {/* Add to wishlist */}
              <div className="mt-5 ">
                <MyVideoGallery videos={videos} />
              </div>
              {/*End Add to wishlist */}
            </div>
          </div>
          {/* Content utttom */}
          {result?.description && (
            <DescriptionTab description={result?.description} />
          )}
          {/*End Content utttom */}
        </div>
        {/* <div className="flex items-center justify-between w-full pb-0 mt-5 mb-8 border-b-2 hover:no-underline border-primary-bold"></div> */}
      </section>
      {resultProductRelated?.data?.length > 0 && (
        <MyRelatedProduct
          categoryId={result?.category_id}
          productRelated={resultProductRelated.data}
        />
      )}
    </>
  );
}
