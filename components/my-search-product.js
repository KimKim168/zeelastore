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
import ExpandHoverButton from "./expand-hover-button";

export function SearchProduct() {
  return (
    <Sheet modal={false}>
      {/* Trigger to open the sheet */}
      <SheetTrigger>
        <ExpandHoverButton icon={<Search />} title="Search Products" />
      </SheetTrigger>
      {/* Sheet content */}
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle className="text-center">Search Products</SheetTitle>
          <React.Suspense>
            <SearchInput />
          </React.Suspense>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
