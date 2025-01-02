import MyCategoryComponent from "@/components/my-category";
import MyDualRangPrice from "@/components/my-dual-range-price";
import MylastestProduct from "@/components/my-lastest-product";

import React from "react";
import Filter from "@/components/my-filter";
import { SearchBrand } from "@/components/my-search-brand";
import { BASE_API_URL } from "@/env";
import MyDataList from "./components/my-data-list";
import { MyShortButton } from "@/components/my-sort-button";
import { MyShortCharacter } from "@/components/my-sort-character";
import { MyPerpageShort } from "@/components/my-perpage-short";

async function page(props) {
  const searchParams = await props.searchParams;
  const search = searchParams.search;
  const categoryId = searchParams.categoryId;
  const subCategoryId = searchParams?.subCategoryId || "";

  const respone = await fetch(`${BASE_API_URL}/categories?withSub=2`);
  const categories = await respone.json();

  return (
    <div className="max-w-screen-2xl mb-10 mx-auto px-2 xl:px-20 ">
      <div className="flex gap-4">
        {/* Left Content */}
        <div className="w-[270px] hidden lg:block">
          {/* Category */}
          <MyCategoryComponent
            key={search + categoryId + subCategoryId}
            categories={categories}
          />
          {/*End Category */}
          <hr className="my-8" />
          {/* Search brand */}
          <SearchBrand />
          {/*End Search brand */}
          <hr className="my-8" />

          {/* Filter price */}
          <MyDualRangPrice />
          {/*End Filter price */}
          <hr className="my-8" />

          {/* Lastest Products */}
          <MylastestProduct />
          {/*End Lastest Products */}
        </div>
        {/*End Left Content */}
        <div className="flex-1">
          <div className="flex md:items-center lg:justify-end gap-2 justify-between">
            <div className="grid grid-cols-2 gap-1 sm:flex items-center md:gap-2 my-4">
              <MyShortButton />
              <MyShortCharacter />
              <MyPerpageShort />
            </div>
            <div className="flex my-4 ">
              {/* <MyBreadCrumbShop /> */}
              <Filter />
            </div>
          </div>
          {/* Right Content */}
          <MyDataList categoryId={categoryId} search={search} />
          {/*End Right Content */}
        </div>
      </div>
    </div>
  );
}

export default page;
