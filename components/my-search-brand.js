"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

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

export function SearchBrand() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState();

  return (
    <div className="mt-7">
      <p className="text-lg text-center p-1 background-gradient text-white">
        Brands
      </p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between border-gradient border-t-transparent mt-2 text-sm text-blue"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Select Brand..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search brand..." className="h-9" />
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
