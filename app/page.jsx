import Image from "next/image";
import search from "../public/search.svg"
import filter from "../public/filter.svg"
import { Suspense } from "react";
import Categories from "./components/Categories";
export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <div className="heading">
        <h1 className="text-center text-[32px] font-bold text-[var(--header-color)] leading-[35px]">
          الدليل الرقمي
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="search relative w-[50%] flex justify-center">
          <Image 
            src={search}
            alt="search-cion"
            className="absolute top-2/4 translate-y-[-50%] right-[10px]"
            width={28}
            />
          <Image 
            src={filter}
            alt="filter-cion"
            className="absolute top-2/4 translate-y-[-50%] left-[10px]"
            width={28}
          />
          <input 
            type="text" 
            name="search" 
            id="search" 
            className="w-full h-[50px] rounded-[6px] border-2 border-[var(--border-color)]"
          />
        </div>
      </div>


        <Categories />
    </main>
  );
}