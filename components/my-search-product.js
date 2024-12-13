"use client";

import * as React from "react";
import { Check, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  { value: "all", label: "All" },
  { value: "dell", label: "Dell" },
  { value: "apple", label: "Apple" },
  { value: "asus", label: "Asus" },
  { value: "msi", label: "MSI" },
  { value: "acer", label: "Acer" },
];

export function SearchProduct() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter(); // Initialize useRouter

  const handleSelect = (currentValue) => {
    const selectedValue = currentValue === value ? "" : currentValue;
    setValue(selectedValue);
    setOpen(false);

    if (selectedValue) {
      // Navigate to the category-specific route
      router.push(`/categories=${selectedValue}`);
    }
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-9 border-gradient border-t-transparent text-[12px] text-blue"
          >
            <div className="flex items-center">
              <Search
                style={{ width: 20, height: 20 }}
                className="h-3 w-3 text-black"
              />{" "}
              {/* Search icon */}
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : ""}
            </div>
            {/* <ChevronsUpDown className="opacity-50" /> */}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-0">
          <Command>
            <CommandInput placeholder="Search Product..." className="h-9" />
            <CommandList>
              <CommandEmpty>No Brand Found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={handleSelect}
                    className={cn(
                      "cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-md",
                      value === framework.value ? "bg-blue-100 font-bold" : ""
                    )}
                  >
                    {framework.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
