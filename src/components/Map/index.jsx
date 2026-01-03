"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ChangeView from "./ChangeView";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function getWeatherMapTime() {
  const now = new Date();
  const yyyy = now.getUTCFullYear();
  const mm = String(now.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(now.getUTCDate()).padStart(2, "0");
  const hh = String(now.getUTCHours()).padStart(2, "0");
  return `${yyyy}${mm}${dd}${hh}`;
}

export default function Map({ lat, lon, weather }) {
  const [layer, setLayer] = useState("tmp2m");
  const time = getWeatherMapTime();

  const layerMap = {
    tmp2m: "tmp2m",
    pressure: "pressure",
    wind: "wind",
  };

  return (
    <div className="relative h-full w-full">
      <div className="absolute z-500 top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-md p-2 flex gap-2">
        <button
          onClick={() => setLayer("tmp2m")}
          className={`px-3 py-1 rounded text-sm ${
            layer === "tmp2m"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          Temp
        </button>

        <button
          onClick={() => setLayer("pressure")}
          className={`px-3 py-1 rounded text-sm ${
            layer === "pressure"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          Pressure
        </button>

        <button
          onClick={() => setLayer("wind")}
          className={`px-3 py-1 rounded text-sm ${
            layer === "wind"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          Wind
        </button>
      </div>

      <MapContainer
        center={[lat, lon]}
        zoom={6}
        className="h-full w-full rounded-xl"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <TileLayer
          key={layer}
          url={`https://weathermaps.weatherapi.com/${layerMap[layer]}/tiles/${time}/{z}/{x}/{y}.png`}
          opacity={0.3}
        />

        <ChangeView lat={lat} lon={lon} />

        <Marker position={[lat, lon]}>
          <Popup>
            <p className="font-bold">{weather.temp}°C</p>
            <p>{weather.condition}</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
