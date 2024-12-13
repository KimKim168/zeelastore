"use client";
import React from "react";
import MyBreadCrumb from "./my-bread-crumb";


// import MyBreadCrumb from "./my-bread-crumb-shop";

export default function Filter() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto mt-5 ">
        <section>
          <div className="flex justify-between items-center">
            <MyBreadCrumb />
          </div>
        </section>
      </div>
    </>
  );
}
