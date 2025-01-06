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
    <Sheet modal={false}>
      {/* Trigger to open the sheet */}
      <SheetTrigger className="bg-white p-1.5 rounded-md">
        <Search />
      </SheetTrigger>
      {/* Sheet content */}
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle className="text-center">Search Products</SheetTitle>
          <SearchInput className="flex-1" />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
