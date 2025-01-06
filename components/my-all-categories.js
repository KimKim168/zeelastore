"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustifyIcon } from "lucide-react";
import "./MyAllCategory.css"; // Import custom CSS for transitions
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function MyAllCategory({ resultCate }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const handleSelectCategory = (categoryId) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId) {
      params.set("categoryId", categoryId);
      params.delete("subCategoryId");
    } else {
      params.delete("categoryId");
    }
    replace(`/products?${params.toString()}`);
  };

  const handleSelectSubCategory = (subCategoryId, categoryId) => {
    const params = new URLSearchParams(searchParams);
    if (subCategoryId) {
      params.set("subCategoryId", subCategoryId);
      params.set("categoryId", categoryId);
    } else {
      params.delete("subCategoryId");
    }
    replace(`/products?${params.toString()}`);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="dropdown-container"
    >
      <DropdownMenu open={isHovering}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-0 shadow-none"
            aria-haspopup="menu"
            aria-expanded={isHovering ? "true" : "false"}
          >
            <AlignJustifyIcon className="w-12 h-12 md:w-20 md:h-20" />
            All Categories
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`w-56 dropdown-content ${isHovering ? "open" : ""}`}
        >
          <DropdownMenuGroup>
            {resultCate?.length > 0 &&
              resultCate.map((item) => (
                <DropdownMenuSub key={item.id}>
                  <div className="flex p-2 hover:font-bold hover:underline underline-offset-4">
                    <button
                      onClick={() => handleSelectCategory(item.id)}
                      className="px-2 flex-1 text-start"
                    >
                      {item.name}
                    </button>
                    {item.sub_categories?.length > 0 && (
                      <DropdownMenuSubTrigger className="text-sm text-black rounded-md" />
                    )}
                  </div>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="min-w-0 w-56">
                      {item.sub_categories?.length > 0 &&
                        item.sub_categories.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() =>
                              handleSelectSubCategory(subItem.id, item.id)
                            }
                            className="w-full text-start"
                          >
                            <p className="p-2 hover:bg-slate-200 text-sm">
                              {subItem.name}
                            </p>
                          </button>
                        ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
