import MyBreadCrumb from "@/components/my-bread-crumb";
import MyCategoryProductDetail from "@/components/my-category-in-product-detail";
import MyGallery from "@/components/my-gallery";
import MyRelatedProduct from "@/components/my-related-product";
import MyVideoGallery from "@/components/my-video-gallery";
import DescriptionTab from "@/components/products/description-tab";
import {
  BASE_API_URL,
  IMAGE_PRODUCT_URL,
  MULTI_IMAGE_PRODUCT_URL,
} from "@/env";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function MyProduct({ params }) {
  const { id } = await params;
  const respone = await fetch(`${BASE_API_URL}/products/${id}`);
  const result = await respone.json();
  // console.log(result);
  const brand = result?.brand;
  const category = result?.category;
  const sub_category = result?.sub_category;

  const responeLink = await fetch(`${BASE_API_URL}/links`);
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
    `${BASE_API_URL}/products?categoryId=${result.category_id}`
  );
  const resultProductRelated = await productRelated.json();
  // console.log(resultProductRelated.data);
  const res = await fetch(`${BASE_API_URL}/categories?withSub=2`);
  const categories = await res.json();
  return (
    <>
      <section className="max-w-screen-2xl mb-10 mx-auto px-2 xl:px-20 mt-5 ">
        {/* <MyBreadCrumb result={result.title} /> */}
        <div className="mt-3">
          <div className="flex flex-col sm:grid grid-cols-12 gap-12">
            <div className="sm:col-span-12 md:col-span-5">
              <MyGallery
                photos={[`${IMAGE_PRODUCT_URL}${result.image}`, ...images]}
              />
            </div>

            <div className=" sm:col-span-12  md:col-span-7 text-blue xl:ml-5">
              <div>
                <p className="text-lg md:text-xl font-semibold">
                  {result.title}
                </p>
                <div className="mt-4">
                  <ul className="space-y-2 text-sm md:text-lg">
                    <li>
                      <ul className="flex gap-2 items-center">
                        <li className=" col-span-6">Shipping:</li>
                        <li className="text-gray-700 col-span-6">
                          {" "}
                          {result.shipping > 0.0 ? result.shipping : "Free"}
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="flex gap-2 items-center">
                        <li className=" col-span-6">Brand:</li>
                        <li className="text-gray-700 col-span-6">
                          <Link
                            className="hover:underline"
                            href={`/products?brandId=${brand.id}`}
                          >
                            {brand.name}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="flex gap-2 items-center w-full">
                        <li className=" col-span-6">Category:</li>
                        <li className="text-gray-700 col-span-6 flex items-center gap-2">
                          <Link
                            href={`/products?categoryId=${category.id}`}
                            className="hover:underline"
                          >
                            {category.name}
                          </Link>
                          {sub_category.name && (
                            <Link
                              href={`/products?subCategoryId=${sub_category.id}&categoryId=${category.id}`}
                              className="hover:underline"
                            >
                              / {sub_category.name}
                            </Link>
                          )}
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="flex items-center gap-2 font-semibold justify-start text-lg md:text-xl">
                        <li className=" col-span-6">Price:</li>
                        <li className="text-color col-span-6">
                          ${result.price}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-5 border-b-2 w-full mb-8 hover:no-underline border-blue-bold pb-0 flex justify-between items-center"></div>

              <div className="flex items-center justify-start gap-2 md:gap-5 mt-5 ">
                <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 items-center gap-2 md:gap-3 ">
                  {resultLink?.map(
                    (item) =>
                      item?.link_in_product_detail == 1 && (
                        <Link
                          key={item.id}
                          href={item.link}
                          target="_blank"
                          className="border p-1 sm:p-2 flex justify-center items-center gap-1 md:gap-2 rounded-md"
                        >
                          <Image
                            src={`https://chhayhok.brolong.pro/assets/images/links/${item.image}`}
                            width={600}
                            height={600}
                            className="w-7 xl:w-10"
                            alt="image"
                          />
                          <span className="text-[10px] sm:text-[10px] xl:text-[13px]">
                            Order with {item.name}
                          </span>
                        </Link>
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
          <DescriptionTab description={result?.description} />
          {/*End Content utttom */}
        </div>
        <div className="mt-5 border-b-2 w-full mb-8 hover:no-underline border-blue-bold pb-0 flex justify-between items-center"></div>
      </section>
      <MyRelatedProduct productRelated={resultProductRelated.data} />
    </>
  );
}
