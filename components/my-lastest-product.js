"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGE_PRODUCT_URL, BASE_API_URL } from "@/env"; // Ensure these are correctly imported
import Link from "next/link";

function MylastestProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/new_products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading new products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div >
      <p className="text-lg text-center p-2 rounded-md background-gradient text-white">
        New Products
      </p>
      <div className="bg-gray-50">
        {products.map((item) => (
          <Link href={`/products/${item.id}`} key={item.id}>
            <div key={item.id} className="grid grid-cols-12 p-3 ">
              <div className="col-span-5">
                <Image
                  src={`${IMAGE_PRODUCT_URL}${item.image}`}
                  width={600}
                  height={600}
                  alt={`Image of ${item.name}`}
                  className="object-contain aspect-[16/9]"
                  loading="lazy"
                />
              </div>
              <div className="col-span-7">
                <p className="text-sm line-clamp-2 leading-tight text-gray-900 text-hover hover:underline dark:text-white">
                  {item.title}
                </p>
                <p>
                  Price:{" "}
                  <span className="text-color ml-3 xl:ml-5">${item.price}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MylastestProduct;
