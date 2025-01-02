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

const frameworks = ["From A to Z", "From Z to A"];

export function MyShortCharacter() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("From A to Z");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-[90px] px-2 gap-1 md:gap-2 md:px-4 max-w-[100px] md:min-w-[150px] md:max-w-[200px] py-2 justify-between md:py-5"
        >
          <span className="text-[10px] md:text-sm">
            <span
              className={`${value ? "text-blue" : " "}`}
            >
              {value || "Select"}
            </span>
          </span>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[110px]  md:max-w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework}
                  value={framework}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setOpen(false);
                  }}
                  className="text-[10px] md:text-sm"
                >
                  {framework}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework ? "opacity-100 " : "opacity-0"
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
