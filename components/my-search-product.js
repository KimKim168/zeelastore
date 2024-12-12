"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
  {
    value: "all",
    label: "All",
  },
  {
    value: "dell",
    label: "Dell",
  },
  {
    value: "apple",
    label: "Apple",
  },
  {
    value: "asus",
    label: "Asus",
  },
  {
    value: "mSI",
    label: "MSI",
  },
  {
    value: "acer",
    label: "Acer",
  },
];

export function SearchProduct() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState();

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between border-gradient border-t-transparent text-sm text-blue"
          >
            <div className="flex items-center gap-1">
              <Search className="h-4 w-4 text-blue" /> {/* Search icon */}
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "Select Product..."}
            </div>
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search Product..." className="h-9" />
            <CommandList>
              <CommandEmpty>No Brand Found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
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
