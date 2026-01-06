"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import cities from "@/data/cities.json";
import Image from "next/image";

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
  <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
    <div className="w-full max-w-6xl bg-[#202020] rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="p-12 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-3 text-white">
          Track Weather <br />
          With <span className="text-white">TempTrack</span>
        </h1>

        <p className="text-white mb-8">
          Choose your default city to see the weather
        </p>

        <div className="relative">
          <input
            ref={searchRef}
            value={keyword}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter city"
            className="w-full border text-white border-white rounded-lg px-4 py-3 mb-3 outline-none focus:ring-2 focus:ring-black"
          />

          <button onClick={() => goToDefaultCity(keyword)} className="absolute right-4 top-3 text-white cursor-pointer" > <MagnifyingGlass size={22} /> </button>

          <button
            onClick={() => goToDefaultCity(keyword)}
            className="w-full bg-white text-black py-3 rounded-lg font-medium cursor-pointer mt-2"
          >
            See Weather →
          </button>

          {/* DROPDOWN */}
          {results.length > 0 && (
            <div className="absolute z-50 mt-2 w-full max-h-52 overflow-y-auto rounded-lg bg-white border shadow-lg">
              {results.map((city, id) => (
                <div
                  key={id}
                  onClick={() => {
                    setKeyword(city.name);
                    goToDefaultCity(city.name);
                  }}
                  className="px-4 py-3 text-black cursor-pointer hover:bg-gray-100"
                >
                  {city.name}, {city.country}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm">
          <Image
            src="/images/bg.jpg"
            alt="Hero Image"
            width={700}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </div>

    </div>
  </div>

  );
}
