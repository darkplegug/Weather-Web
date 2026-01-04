"use client";

export default function WeatherAlerts({ alerts }) {
  const alertList = alerts?.alert ?? [];

  const severityColor = (severity) => {
    switch (severity?.toLowerCase()) {
      case "extreme":
        return "border-red-500 bg-[#202020]";
      case "severe":
        return "border-orange-500 bg-[#202020]";
      case "moderate":
        return "border-yellow-500 bg-[#202020]";
      default:
        return "border-blue-500 bg-[#202020]";
    }
  };

  return (
    <div className="space-y-4">

      {/* JIKA TIDAK ADA ALERT */}
      {alertList.length === 0 && (
        <div className="rounded-xl bg-[#202020] border p-4 text-center">
          <p className="text-white font-semibold">
            Tidak ada peringatan di kota Anda
          </p>
          <p className="text-sm text-white mt-1">
            Cuaca saat ini aman dan tidak ada peringatan dari otoritas setempat.
          </p>
        </div>
      )}

      {/* JIKA ADA ALERT */}
      {alertList.map((item, index) => (
        <div
          key={index}
          className={`rounded-xl border-l-8 p-6 ${severityColor(item.severity)}`}
        >
          <h3 className="font-bold text-xl text-white mb-1">
            ⚠️ {item.event}
          </h3>

          <p className="text-lg text-semibold  text-white pb-2 border-b-2 border-white">
            {item.headline}
          </p>

          <div className="text-md font-semibold text-white pt-4 pb-4">
            <p><span className="font-semibold">Severity:</span> {item.severity}</p>
            <p><span className="font-semibold">Urgency:</span> {item.urgency}</p>
            <p><span className="font-semibold">Areas:</span> {item.areas}</p>
            <p><span className="font-semibold">Expires:</span> {item.expires}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
