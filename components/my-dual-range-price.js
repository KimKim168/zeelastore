"use client";
import React, { useState } from "react";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { Button } from "./ui/button";

function MyDualRangPrice() {
  const [values, setValues] = useState([0, 2000]);
  return (
    <>
      <div >
        <div className="mb-10">
          <p className="text-lg text-center p-2 rounded-md background-gradient text-white">
            Price
          </p>
        </div>
        <div className="w-full">
          <DualRangeSlider
            label={(value) => `${value}$`}
            value={values}
            onValueChange={setValues}
            min={0}
            max={2000}
            step={1}
          />
        </div>
        <div className="flex justify-center ">
          <Button
            type="submit"
            className="w-full bg-gray-100 shadow-transparent text-blue h-10 px-4  hover:bg-gray-200 rounded"
          >
            Apply Filter
          </Button>
        </div>
      </div>
    </>
  );
}

export default MyDualRangPrice;
