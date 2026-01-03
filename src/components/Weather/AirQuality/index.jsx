"use client";

export default function AirQuality({ airQuality, location }) {
  if (!airQuality) return null;

  const aqiValue = Number(airQuality["us-epa-index"] ?? 1);

  /* ================= AQI CONFIG ================= */
  const aqiScale = {
    1: 20,
    2: 40,
    3: 60,
    4: 75,
    5: 90,
    6: 100,
  };

  const aqiInfo = {
  1: {
    label: "Good",
    color: "text-green-600",
    ring: "#22c55e",
    note: "Air quality is excellent. Ideal for outdoor activities.",
  },
  2: {
    label: "Moderate",
    color: "text-yellow-600",
    ring: "#eab308",
    note: "Air quality is acceptable. Sensitive individuals should take precautions.",
  },
  3: {
    label: "Unhealthy (Sensitive)",
    color: "text-orange-600",
    ring: "#f97316",
    note: "Sensitive groups should reduce prolonged or heavy outdoor exertion.",
  },
  4: {
    label: "Unhealthy",
    color: "text-red-600",
    ring: "#ef4444",
    note: "Everyone should limit outdoor activities.",
  },
  5: {
    label: "Very Unhealthy",
    color: "text-purple-600",
    ring: "#a855f7",
    note: "Avoid outdoor activities. Health warnings may occur.",
  },
  6: {
    label: "Hazardous",
    color: "text-rose-700",
    ring: "#be123c",
    note: "Serious health effects. Stay indoors and avoid outdoor exposure.",
  },
};


  /* ================= SVG RING ================= */
  const percentage = aqiScale[aqiValue];
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percentage / 100);

  /* ================= POLLUTANTS ================= */
  const pollutants = [
    { name: "CO", value: airQuality.co },
    { name: "NO₂", value: airQuality.no2 },
    { name: "O₃", value: airQuality.o3 },
    { name: "SO₂", value: airQuality.so2 },
    { name: "PM2.5", value: airQuality.pm2_5 },
    { name: "PM10", value: airQuality.pm10 },
  ];

  return (
    <div className="w-full bg-[#202020] rounded-2xl shadow-md p-6 flex flex-col sm:flex-row md:flex-row gap-8">
      {/* ================= LEFT : AQI RING ================= */}
      <div className="flex flex-col items-center justify-center w-auto mb-2">
        <svg width="160" height="160">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#e5e7eb"
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke={aqiInfo[aqiValue].ring}
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 80 80)"
          />
        </svg>

        <div className="absolute text-center">
          <p className="text-3xl font-bold text-white">{percentage}</p>
          <p className="text-sm text-white">AQI</p>
        </div>

        <p className={`font-semibold text-white ${aqiInfo[aqiValue]}`}>
          {aqiInfo[aqiValue].label}
        </p>
        <p className="text-sm text-white text-center">
          {aqiInfo[aqiValue].note}
        </p>
      </div>

      {/* ================= RIGHT : DETAILS ================= */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-white">
          Air Quality — {location.name}
        </h3>
        <p className="text-sm text-white mb-4">
          Pollutant concentration (μg/m³)
        </p>

        <div className="grid grid-cols-2 gap-4">
          {pollutants.map((p) => (
            <div
              key={p.name}
              className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-2"
            >
              <span className="font-medium">{p.name}</span>
              <span className="text-sm text-black font-semibold">
                {p.value.toFixed(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
