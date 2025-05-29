"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SelectedFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const category = searchParams.get("category");
  const subCategory = searchParams.get("subCategory");
  const brand = searchParams.get("brand");

  const handleRemoveParam = (key) => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    if (key === "category") {
      params.delete("categoryId");
      params.delete("subCategory");
      params.delete("subCategoryId");
    }
    if (key === "subCategory") {
      params.delete("subCategoryId");
    }
    if (key === "brand") {
      params.delete("brandId");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  if (!category && !subCategory && !brand) return null;

  return (
    <div className="flex flex-wrap gap-2 my-4">
      {category && (
        <div className="flex items-center border border-primary pl-3 rounded-md text-sm">
          {category}
          <button
            onClick={() => handleRemoveParam("category")}
            className="px-3 py-2 hover:text-red-500 transition"
            aria-label="Remove category"
          >
            ✖
          </button>
        </div>
      )}
      {subCategory && (
        <div className="flex items-center border border-primary pl-3 rounded-md text-sm">
          {subCategory}
          <button
            onClick={() => handleRemoveParam("subCategory")}
            className="px-3 py-2 hover:text-red-500 transition"
            aria-label="Remove sub-category"
          >
            ✖
          </button>
        </div>
      )}
      {brand && (
        <div className="flex items-center border border-primary pl-3 rounded-md text-sm">
          {brand}
          <button
            onClick={() => handleRemoveParam("brand")}
            className="px-3 py-2 hover:text-red-500 transition"
            aria-label="Remove brand"
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
}
