import React from "react";
import MyCategories from "@/components/MyCategories";
import MyNewsProduct from "@/components/MyNewsProduct";
import MyAppleBrand from "@/components/MyAppleBrand";
import MySamsungBrand from "@/components/MySamsungBrand";
import MyBelowSlider from "@/components/MyBelowSlider";
import MySlider from "@/components/MySlider";

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
      <div >
        {/* Card */}
        <MyNewsProduct></MyNewsProduct>
        {/*End Card */}
        {/*Product Card */}
        <MyAppleBrand></MyAppleBrand>
        {/*End product Card */}
        {/*Product Card */}
        <MySamsungBrand></MySamsungBrand>
        {/*End product Card */}
      </div>
    </>
  );
}
