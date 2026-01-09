"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function ShowMap({ api }) {

    const handleMap = () => {
        setIsMap((prevState) => !prevState)
    }

    const lat = api.location.lat;
    const lon = api.location.lon;

    return (
        <>
            <Map lat={lat} lon={lon} weather={{temp: api.current.temp_c, condition: api.current.condition.text, icon: api.current.condition.icon,}}/>
        </>
    )
}