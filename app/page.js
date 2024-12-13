import React from "react";
import MyCategories from "@/components/my-categories";
import MyNewsProduct from "@/components/my-news-product";
import MyAppleBrand from "@/components/MyAppleBrand";
import MyBelowSlider from "@/components/MyBelowSlider";
import MySlider from "@/components/MySlider";
import MyBrand from "@/components/my-brand";

export default function Home() {
  return (
    <>
      {/* Slider */}
      <MySlider></MySlider>
      {/*End Slider */}
      {/* above slide */}
      <MyBelowSlider></MyBelowSlider>
      {/*End above slide */}

      {/* Category */}
      <MyCategories></MyCategories>
      {/*End Category */}
      <div>
        {/* Card */}
        <MyNewsProduct></MyNewsProduct>
        {/*End Card */}
        {/*Product Card */}
        <MyAppleBrand></MyAppleBrand>
        {/*End product Card */}
        {/*Product Card */}
        <MyBrand></MyBrand>
        {/*End product Card */}
      </div>
    </>
  );
}
