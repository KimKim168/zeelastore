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

  const currentCategoryId = searchParams.get("categoryId")?.toString();
  const currentSubCategoryId = searchParams.get("subCategoryId")?.toString();

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
        <button
          onClick={() => handleSelectCategory()}
          className={`${
            currentCategoryId == null &&
            "underline text-white text-center background-gradient font-bold bg-primary group text-primary-foreground hover:text-primary"
          } hover:bg-blue-300/10 p-2 py-2 rounded items-center flex gap-1 w-full text-[16px] hover:underline`}
        >
          <AlignJustifyIcon />
          All Categories
        </button>
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
                className={`flex justify-between hover:bg-blue-50 rounded-md hover:font-bold hover:underline underline-offset-4 ${
                  searchParams.get("categoryId") == item.id &&
                  "font-bold underline background-gradient text-white"
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
                {item.sub_categories?.length > 0 && (
                  <AccordionTrigger
                    className={`${
                      currentCategoryId == item.id &&
                      "underline  font-bold bg-gray-400 group text-white hover:text-primary"
                    } p-0.5 text-[16px] rounded-tr rounded-br px-2 hover:bg-gray/10`}
                  ></AccordionTrigger>
                )}
              </div>
              <div
                className="mx-6  border-l-2  border-gradient "
                style={{ marginTop: "0" }}
              >
                {item.sub_categories?.length > 0 ? (
                  item.sub_categories.map((subItem) => (
                    <AccordionContent
                      key={subItem.id}
                      className="px-1 pb-1 mt-2"
                    >
                      <button
                        onClick={() =>
                          handleSelectSubCategory(subItem.id, item.id)
                        }
                        className={`${
                          currentSubCategoryId == subItem.id &&
                          "underline font-semibold"
                        } relative flex items-center  pl-2 max-w-[85%] w-full text-left underline-offset-4 cursor-pointer hover:underline`}
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
