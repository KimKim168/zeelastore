"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (value) => {
    const params = new URLSearchParams(searchParams);
    console.log(params);
    if (value) {
      params.set("search", value);
      params.set("page", 1);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  };

  return (
    <>
      <div className="flex items-center ml-2 gap-2">
        <Search className="text-gray-400 " size={20} />
        <input
          type="text"
          placeholder="Search Products..."
          defaultValue={searchParams.get("search")}
          onChange={(e) => handleSearch(e.target.value)}
          className=" bg-transparent border-none xl:min-w-[500px] outline-none text-gray-700 py-2"
          aria-label="Search input"
        />
      </div>
    </>
  );
}
