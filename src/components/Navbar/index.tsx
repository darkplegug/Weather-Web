"use client";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";

type NavbarProps = {
  handleMap?: any
}

export default function Navbar({ handleMap }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false)
  
    const handleSearch = () => {
            setIsOpen((prevState) => !prevState)
        }

    const opened = () => {
        return (
        <div className="z-600 w-60 fixed top-24 md:top-4 md:right-4 md:left-auto md:translate-x-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out">
            <SearchBar />
        </div>
        )
    }

  return (
    <div>
      <div className="w-60 z-700 fixed top-4 left-1/2 transform -translate-x-1/2 h-12 rounded-lg bg-[#202020] flex justify-center items-center gap-2">
        <Link href="/">
          <button className="text-white px-3 py-1 hover:bg-gray-100 hover:text-black cursor-pointer text-md font-bold rounded-lg">
            {/* <HouseLine size={22} color="#f0f0f0" /> */}
            Home
          </button>        
        </Link>

        <button onClick={handleSearch} className="text-white px-3 py-1 hover:bg-gray-100 hover:text-black cursor-pointer text-md font-bold rounded-lg">
          {/* <MagnifyingGlass size={22} color="#f0f0f0" /> */}
          Search
        </button>        
        
          <button onClick={handleMap} className="text-white px-3 py-1 hover:bg-gray-100 hover:text-black cursor-pointer text-md font-bold rounded-lg">
            {/* <MapTrifold size={22} color="#f0f0f0" /> */}
            Map
          </button>         
         
      </div>

      {isOpen ? opened() : null}
    </div>
  )
}