import { BASE_API_URL } from "@/env";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";
import HeaderWithLink from "./HeaderWithLink";

export default async function MyNewProduct() {
  const respone = await fetch(`${BASE_API_URL}/new_products`);
  const result = await respone.json();

  return (
    <>
      <div className="px-2 pt-5 mx-auto max-w-screen-2xl xl:px-20">
        <div>
          <HeaderWithLink title="New Arrivals" href={`/products`} />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:mb-8 lg:grid-cols-5 xl:grid-cols-6">
          {result?.map((item) => (
            <ProductCard key={item.id} isNew={true} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
