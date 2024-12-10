import MyBreadCrumb from "@/components/my-bread-crumb";
import MyGallery from "@/components/MyGallery";
import React from "react";

export default function MyProduct() {
  return (
    <>
      <section className="max-w-screen-2xl mb-10 mx-auto px-2 xl:px-20 mt-5 ">
        <MyBreadCrumb />
        <div className="flex flex-col sm:grid grid-cols-12 gap-12">
          <div className="sm:col-span-12 md:col-span-5">
            <MyGallery />
          </div>
        </div>
      </section>
    </>
  );
}
