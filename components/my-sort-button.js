"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const framework = [
  {
    label: "Title",
    value: "title",
  },
  {
    label: "Price",
    value: "price",
  },
  {
    label: "Description",
    value: "description",
  },
];

export function MyShortButton() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Title");

  const handleSelect = (selectedValue) => {
    const params = new URLSearchParams(searchParams);
    if (selectedValue) {
      params.set("orderBy", selectedValue);
    } else {
      params.delete("orderBy");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-[90px] px-2 gap-1 md:gap-2 md:px-4 max-w-[130px] md:min-w-[150px] md:max-w-[200px] justify-between md:py-5"
        >
          <span className="text-[10px] md:text-sm">
            Sort By:{" "}
            <span className={`${value ? "text-blue font-bold" : ""}`}>
              {value || "Select"}
            </span>
          </span>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[130px] md:max-w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {framework.map((item) => (
                <CommandItem
                  key={item.label}
                  value={item.label}
                  onSelect={() => {
                    setValue(item.value);
                    handleSelect(item.value);
                    setOpen(false);
                  }}
                  className="text-[10px] md:text-sm"
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
