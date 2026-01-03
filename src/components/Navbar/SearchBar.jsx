"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import cities from "@/data/cities.json";

export default function SearchBar() {
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
      .filter(city =>
        city.name.toLowerCase().startsWith(value.toLowerCase())
      )
      .slice(0, 15);

    setResults(filtered);
  };

  const goToSearch = (value) => {
    if (!value || value.trim() === "") return;

    router.push(`/search/${encodeURIComponent(value)}`);
    setResults([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      goToSearch(keyword);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        ref={searchRef}
        value={keyword}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search city..."
        className="w-full border-2 bg-white text-black px-6 py-2 rounded-3xl"
      />

      <button
        className="absolute right-3 top-2 cursor-pointer"
        onClick={() => goToSearch(keyword)}
      >
        <MagnifyingGlass size={28} weight="light" />
      </button>

      {/* DROPDOWN */}
      {results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full max-h-60 overflow-y-auto rounded-md bg-[#202020] scrollbar-hide">
          {results.map((city, id) => (
            <div
              key={id}
              onClick={() => {
                setKeyword(city.name);
                goToSearch(city.name);
              }}
              className="p-3 text-white cursor-pointer hover:bg-white/10"
            >
              {city.name}, {city.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
