"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function ChangeView({ lat, lon }) {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lon], map.getZoom());
  }, [lat, lon, map]);

  return null;
}
