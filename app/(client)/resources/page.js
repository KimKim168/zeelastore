import React, { Suspense } from "react";
import Filter from "@/components/my-filter";
import { BASE_API_URL } from "@/env";
import MyDataList from "./components/my-data-list";
import { MyShortButton } from "@/components/my-sort-button";
import { MyPerpageShort } from "@/components/my-perpage-short";
import MyLoadingAnimation from "@/components/my-loading-animation";
import SelectedFilters from "@/components/SelectedFilters";
import { Search } from "lucide-react";
import { BlogCategorySelect } from "@/components/blog-categories-select";

async function page(props) {
  const searchParams = await props.searchParams;
  const search = searchParams.search || "";
  const categoryId = searchParams.categoryId || "";
  const specialOffer = searchParams.specialOffer || "";
  const subCategoryId = searchParams?.subCategoryId || "";
  const orderBy = searchParams?.orderBy || "";
  const orderDir = searchParams?.orderDir || "";
  const perPage = searchParams?.perPage || "";
  const page = searchParams?.page || "";
  const brandId = searchParams?.brandId || "";
  const priceFrom = searchParams?.priceFrom || "";
  const priceTo = searchParams?.priceTo || "";

  const respone = await fetch(`${BASE_API_URL}/categories?withSub=2`, {
    next: { revalidate: 600 },
  });
  const categories = await respone.json();
  const resBrand = await fetch(`${BASE_API_URL}/brands`, {
    next: { revalidate: 600 },
  });
  const brand = await resBrand.json();
  // console.log(categories);

  return (
    <div className="min-h-[50vh] max-w-screen-2xl mb-10 mx-auto px-2 xl:px-20 ">
      <div className="flex flex-wrap gap-2 items-end justify-between mt-6">
        <h2 className="text-3xl font-bold tracking-tight">Resources</h2>
        <form className="flex w-full lg:w-auto min-w-[400px] max-w-full">
          <input
            type="text"
            placeholder="Search ..."
            className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white px-4 rounded-l-none rounded-r-md hover:bg-primary/90"
          >
            <Search size={24} />
          </button>
        </form>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <div className="w-full flex flex-col lg:flex-row lg:items-center flex-wrap gap-1 my-2 mt-2 lg:mt-2">
            <Suspense fallback={<MyLoadingAnimation />}>
              <SelectedFilters />
            </Suspense>
            <div className="flex flex-1 gap-2 items-center justify-end">
              <div
                className="grid items-center grid-cols-2 gap-1 my-4 sm:flex md:gap-2"
                key={" " + orderBy + orderDir + perPage}
              >
                <MyShortButton />
                {/* <MyShortCharacter /> */}
                <BlogCategorySelect />
              </div>
              <div
                className="flex my-4 lg:hidden"
                key={
                  "filter_key" +
                  categoryId +
                  subCategoryId +
                  brandId +
                  perPage +
                  page +
                  orderBy +
                  orderDir +
                  search
                }
              >
                {/* <MyBreadCrumbShop /> */}
                <Filter
                  key={
                    "categories" +
                    search +
                    categoryId +
                    subCategoryId +
                    "brand" +
                    brandId
                  }
                  categories={categories}
                  brand={brand}
                />
              </div>
            </div>
          </div>
          {/* Right Content */}
          <Suspense
            key={
              "products_list_key" +
              categoryId +
              subCategoryId +
              brandId +
              perPage +
              page +
              orderBy +
              orderDir +
              search
            }
            fallback={<MyLoadingAnimation />}
          >
            <MyDataList
              subCategoryId={subCategoryId}
              perPage={perPage}
              page={page}
              orderDir={orderDir}
              orderBy={orderBy}
              priceFrom={priceFrom}
              priceTo={priceTo}
              brandId={brandId}
              categoryId={categoryId}
              search={search}
              specialOffer={specialOffer}
            />
          </Suspense>

          {/*End Right Content */}
        </div>
      </div>
    </div>
  );
}

export default page;
