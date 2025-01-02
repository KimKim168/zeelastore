"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SearchInput from "./ui/SearchInput";
import { Search } from "lucide-react";

export function SearchProduct() {
  return (
    <Sheet>
      {/* Trigger to open the sheet */}
      <SheetTrigger className="bg-white p-1.5 rounded-md">
        <Search />
      </SheetTrigger>
      {/* Sheet content */}
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle className="text-center">Search Products</SheetTitle>
          <div className="flex items-center justify-between border border-black">
            <SearchInput className="flex-1" />
            <p className="bg-blue-900 text-white py-1 text-sm  px-2 mr-1">
              Search
            </p>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
