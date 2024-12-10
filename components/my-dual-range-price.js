"use client";
import React, { useState } from "react";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { Button } from "./ui/button";

function MyDualRangPrice() {
  const [values, setValues] = useState([0, 100]);
  return (
    <>
      <div className=" mt-14">
        <div className="mb-10">
          <p className="text-2xl text-center p-4 background-gradient text-white">
            Price
          </p>
        </div>
        <div className="w-full px-2 ">
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
          <Button type="submit" className="w-full px-4 py-2 hover:bg-blue-900 rounded">
            Apply Filter
          </Button>
        </div>
      </div>
    </>
  );
}

export default MyDualRangPrice;
