"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { AlignJustifyIcon, ArrowRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IMAGE_CATE_URL } from "@/env";
import Image from "next/image";

function MyCategoryComponent({ categories }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  // console.log(categories);

  const handleSelectCategory = (categoryId) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId) {
      params.set("categoryId", categoryId);
      params.delete("subCategoryId");
    } else {
      params.delete("categoryId");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSelectSubCategory = (subCategoryId, categoryId) => {
    const params = new URLSearchParams(searchParams);
    if (subCategoryId) {
      params.set("subCategoryId", subCategoryId);
      params.set("categoryId", categoryId);
    } else {
      params.delete("subCategoryId");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="mt-4">
        <p className="text-lg flex items-center  rounded-md justify-center gap-2 text-center p-2 background-gradient text-white">
          <AlignJustifyIcon />
          All Categories
        </p>
        <Accordion
          type="single"
          collapsible
          defaultValue={searchParams.get("categoryId")}
        >
          {categories?.map((item) => (
            <AccordionItem
              key={item.id}
              value={`${item.id}`}
              className="space-y-4 mt-2"
            >
              <div
                className={`flex justify-between text-hover hover:bg-blue-50 rounded-md hover:font-bold hover:underline underline-offset-4 ${
                  searchParams.get("categoryId") == item.id &&
                  "font-bold underline"
                }`}
              >
                <Image
                  src={IMAGE_CATE_URL + item.image}
                  width={40}
                  height={40}
                  alt="image"
                  className="aspect-square mx-2 object-contain"
                />
                <button
                  onClick={() => handleSelectCategory(item.id)}
                  className=" px-2 flex-1 text-start"
                >
                  {item.name}
                </button>
                <AccordionTrigger className="text-sm text-black background-gradient-hover rounded-md hover:text-white  px-2"></AccordionTrigger>
              </div>
              <div
                className="mx-6  border-l-2  border-gradient "
                style={{ marginTop: "0" }}
              >
                {item.sub_categories?.length > 0 ? (
                  item.sub_categories.map((subItem) => (
                    <AccordionContent key={subItem.id} className="px-1 pb-1 ">
                      <button
                        onClick={() =>
                          handleSelectSubCategory(subItem.id, item.id)
                        }
                        className={` hover:underline  p-1 rounded-md text-hover hover:bg-gray-200 text-sm text-gray-500  underline-offset-2 flex items-center ${
                          searchParams.get("subCategoryId") == subItem.id &&
                          "font-bold underline"
                        }`}
                      >
                        <ArrowRight width={15} className="hover:text-color" />
                        {subItem.name}
                      </button>
                    </AccordionContent>
                  ))
                ) : (
                  <AccordionContent>
                    <p className="text-gray-500 text-sm">
                      No subcategories available.
                    </p>
                  </AccordionContent>
                )}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

export default MyCategoryComponent;
