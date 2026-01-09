"use client";

import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();

    const goHome = () => {
      const city = localStorage.getItem("defaultCity");
      if (!city) {
        router.push("/");
        return;
      }
      router.push(`/defaultcity/${encodeURIComponent(city)}`);
    };

  return (
    <div>
      <div className="min-w-full h-12 rounded-lg bg-[#202020] flex justify-between items-center gap-2 pl-4 pr-0.5">
        <button onClick={goHome} className="text-white px-3 py-1 hover:bg-gray-100 hover:text-black cursor-pointer text-md font-bold rounded-lg">
          Home
        </button> 

        <SearchBar />       
      </div>
    </div>
  )
}