"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import cities from "@/data/cities.json";

export default function Page() {
  const searchRef = useRef(null);
  const router = useRouter();

  const [results, setResults] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);

    if (value.trim().length < 1) {
      setResults([]);
      return;
    }

    const filtered = cities
      .filter((city) =>
        city.name.toLowerCase().startsWith(value.toLowerCase())
      )
      .slice(0, 15);

    setResults(filtered);
  };

  const goToDefaultCity = (value) => {
    if (!value) return;

    localStorage.setItem("defaultCity", value);
    router.push(`/defaultcity/${encodeURIComponent(value)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      goToDefaultCity(keyword);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mx-4">
      <div className="w-105 rounded-2xl bg-[#202020] shadow-2xl p-10">
        
        <h1 className="text-2xl font-bold text-white mb-2 text-center">
          Wadehel
        </h1>

        <p className="text-white/80 mb-6 text-center">
          Choose your default city to see the weather
        </p>

        <div className="relative">
          <input
            ref={searchRef}
            value={keyword}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Search city..."
            className="w-full bg-white text-black placeholder-gray-500 px-5 py-3 rounded-xl outline-none"
          />

          <button
            onClick={() => goToDefaultCity(keyword)}
            className="absolute right-4 top-3 text-black"
          >
            <MagnifyingGlass size={22} />
          </button>

          {/* DROPDOWN */}
          {results.length > 0 && (
            <div className="absolute z-50 mt-2 w-full max-h-52 overflow-y-auto rounded-xl bg-black/80 backdrop-blur-md">
              {results.map((city, id) => (
                <div
                  key={id}
                  onClick={() => {
                    setKeyword(city.name);
                    goToDefaultCity(city.name);
                  }}
                  className="px-4 py-3 text-white cursor-pointer hover:bg-white/10"
                >
                  {city.name}, {city.country}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
