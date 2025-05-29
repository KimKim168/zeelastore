import React from "react";
import MySlider from "@/components/MySlider";
import { APP_LOGO, BASE_API_URL } from "@/env";
import MyNewProduct from "@/components/my-new-product";
import CategoryCards from "@/components/category-cards";
import MyBrands from "@/components/my-brands";

export const metadata = {
  title: "Welcome to Chhayhok",
  icons: {
    icon: APP_LOGO,
    shortcut: APP_LOGO,
    apple: APP_LOGO,
  },
  openGraph: {
    title: "Chhayhok - Discover Our Products",
    description:
      "Explore a wide range of products and categories on Chhayhok's home page.",
    url: "https://chhayhok.com",
    siteName: "Chhayhok",
    images: [
      {
        url: APP_LOGO, // Replace with your actual home page image
        width: 1200,
        height: 630,
        alt: "Chhayhok Home Page Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chhayhok - Explore Products",
    description: "Discover products, categories, and new arrivals on Chhayhok.",
    images: [APP_LOGO], // Replace with your actual home page image
  },
};

export default async function Home(props) {
  const responeTop = await fetch(`${BASE_API_URL}/slides?position=top`, {
    next: { revalidate: 600 },
  });
  const imagesTop = await responeTop.json();
  const responeBottom = await fetch(`${BASE_API_URL}/slides?position=bottom`, {
    next: { revalidate: 600 },
  });
  const imagesBottom = await responeBottom.json();
  // console.log(result);

  return (
    <>
      {/* Slider */}
      <MySlider imagesTop={imagesTop} imagesBottom={imagesBottom} />
      {/*End Slider */}
      {/* <MyProductCategory categories={categories} /> */}
      {/* Card */}
      <MyNewProduct />
      <CategoryCards />
      <MyBrands />
      {/*End Card */}
      {/*Product Card */}
      {/* <MyListProducts /> */}
      {/*End product Card */}
    </>
  );
}
