"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustifyIcon } from "lucide-react";
import "./MyAllCategory.css"; // Import custom CSS for transitions

export default function MyAllCategory() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="dropdown-container"
    >
      <DropdownMenu open={isHovering}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-0 shadow-none">
            <AlignJustifyIcon
              className=" w-12 h-12 md:w-20 md:h-20"
              style={{ width: "15", height: "15" }}
            />
            All Categories
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`w-56 dropdown-content ${isHovering ? "open" : ""}`}
        >
          <DropdownMenuLabel className="text-center">
            All Categories
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuItem>Email1</DropdownMenuItem>
                  <DropdownMenuItem>Message1</DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
