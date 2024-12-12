"use client";
import React, { useState } from "react";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { Button } from "./ui/button";

function MyDualRangPrice() {
  const [values, setValues] = useState([0, 2000]);
  return (
    <>
      <div className=" mt-7">
        <div className="mb-10">
          <p className="text-lg text-center p-1 background-gradient text-white">
            Price
          </p>
        </div>
        <div className="w-full">
          <DualRangeSlider
            label={(value) => `${value}$`}
            value={values}
            onValueChange={setValues}
            min={0}
            max={100}
            step={1}
          />
        </div>
        <div className="flex justify-center ">
          <Button
            type="submit"
            className="w-full bg-transparent shadow-transparent text-blue border border-gradient px-4 py-2 hover:bg-gray-200 rounded"
          >
            Apply Filter
          </Button>
        </div>
      </div>
    </>
  );
}

export default MyDualRangPrice;
