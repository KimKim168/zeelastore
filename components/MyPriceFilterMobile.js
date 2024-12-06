"use client";
import React, { useState } from "react";

export default function MyPriceFilterMobile() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Min Price:", minPrice);
    console.log("Max Price:", maxPrice);
  };

  return (
    <div className=" mt-10">
      <p className="text-2xl text-center p-4 bg-nav text-white">Prix</p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 mt-5">
          <div>
            <label
              htmlFor="maxPrice"
              className="block text-start  text-sm xl:text-base text-blue"
            >
              Minimum Price
            </label>
            <input
              type="number"
              id="minPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Enter minimum price"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="minPrice"
              className="block text-start text-sm xl:text-base text-blue"
            >
              Maximum Price
            </label>
            <input
              type="number"
              id="maxPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Enter maximum price"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md shadow  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#056031]"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
