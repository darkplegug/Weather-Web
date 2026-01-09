"use client";
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
        <div className="text-sm font-semibold text-black">
        {time.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        })}
        </div>


      {/* Jam */}
      <div className="text-2xl font-semibold text-black">
        {time.toLocaleTimeString("id-ID")}
      </div>
    </div>
  );
}
