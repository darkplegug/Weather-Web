"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function ShowMap({ api }) {
    
    const [isMap, setIsMap] = useState(false);

    const handleMap = () => {
        setIsMap((prevState) => !prevState)
    }

    const lat = api.location.lat;
    const lon = api.location.lon;

    return (
        <>
            <Navbar handleMap={handleMap} />
            {isMap ? <Map lat={lat} lon={lon} weather={{temp: api.current.temp_c, condition: api.current.condition.text, icon: api.current.condition.icon,}}/> : null}
        </>
    )
}