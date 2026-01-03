"use client";

import { useState } from "react";
import WeatherChart from "@/components/Chart/WeatherChart";
import WeatherSelector from "@/components/Chart/WeatherSelector";

export default function Chart({ api }) {
  const [active, setActive] = useState("temp");

    const hours = api?.forecast?.forecastday?.[0]?.hour;

    const data = hours.map(item => ({
        time: item.time.slice(11, 16),
        temp: item.temp_c,
        humidity: item.humidity,
        uv: item.uv,
        wind: item.wind_kph,
        cloud: item.cloud,
        heatindex: item.heatindex_c,
        dewpoint: item.dewpoint_c,

    }));

  return (
    <div className="max-w-full p-4 bg-[#202020] rounded-xl">
      <h1 className="text-xl font-bold mb-1 text-white">Weather Statistics</h1>
      <p className="text-sm text-white mb-4">Today in {api.location.name}</p>
      <div className="">
        <WeatherSelector active={active} setActive={setActive} />
        <WeatherChart data={data} activeKey={active} />         
      </div>
       

    </div>
  );
}
