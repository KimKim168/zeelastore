import { BASE_API_URL } from "@/env";
import React from "react";

async function page() {
  const respone = await fetch(`${BASE_API_URL}/about`);
  const result = await respone.json();
  return (
    <>
      <div className="min-h-[50vh] max-w-screen-2xl px-2 xl:px-20 mx-auto mt-5 mb-5">
        <h1 className="text-center text-xl xl:text-2xl">{result.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: result.description }} className="text-justify"></div>
      </div>
    </>
  );
}

export default page;
