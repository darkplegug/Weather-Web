import Image from "next/image";

export default async function WeekHistoryCard({ api }) {

  const forecast = api?.forecast?.forecastday ?? [];

  const threeDays = forecast.slice(0, 3);

  return (
    <div className="flex flex-row gap-1">

      

      {threeDays.map((day, index) => {
        const label =
          index === 0 ? "Today" :
          index === 1 ? "Tomorrow" :
          "The Day After";

        return (
          <div
            key={day.date}
            className={"flex-1 w-35 md:w-35 rounded-md p-4 text-center flex flex-col items-center justify-between gap-2 bg-[#202020]"}
          >
            <h3 className="font-bold text-white">{label}</h3>

            <Image
              src={`https:${day.day.condition.icon.replace("64x64", "128x128")}`}
              alt="weather"
              width={60}
              height={60}
            />

            <p className="text-sm font-bold text-white">{day.day.condition.text}</p>
            <p className="font-semibold text-white">{day.day.avgtemp_c} °C</p>
          </div>
        );
      })}

    </div>
  );
}
