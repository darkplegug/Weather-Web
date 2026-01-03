"use client";

export default function WeatherSelector({ active, setActive }) {
  const options = [
    { key: "temp", label: "Temperature (°C)" },
    { key: "humidity", label: "Humidity (%)" },
    { key: "uv", label: "UV Index (%)" },
    { key: "wind", label: "Wind (m/s)" },
    { key: "cloud", label: "Cloud Coverage (%)" },
    { key: "heatindex", label: "Heat Index (°C)" },
    { key: "dewpoint", label: "Dew Point (°C)" },
  ];

  return (
    <div className="gap-2 mb-4">
      {options.map(opt => (
        <button
          key={opt.key}
          onClick={() => setActive(opt.key)}
          className={`px-4 py-2 rounded-full text-sm mx-1 my-1 cursor-pointer
            ${active === opt.key
              ? "bg-[#FEB800] text-black font-semibold"
              : "bg-white text-black font-semibold"}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
