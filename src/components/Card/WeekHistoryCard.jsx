import Image from "next/image";

export default async function WeekHistoryCard({ api }) {

  const forecast = api?.forecast?.forecastday ?? [];

  const threeDays = forecast.slice(0, 3);

  return (
    <div className="flex flex-row bg-[#202020] p-2 mt-2 rounded-xl gap-2">
      {threeDays.map((day, index) => {
        const label =
          index === 0 ? "Today" :
          index === 1 ? "Tomorrow" :
          "Day After";

        return (
            <div key={day.date} className={"w-full h-55 p-4 flex flex-col justify-between gap-1 bg-white rounded-lg"}>
              <div>
                <h3 className="font-bold text-black text-lg sm:text-2xl">{label}</h3>
                <p className="font-semibold text-black text-md sm:text-lg">{day.day.avgtemp_c} °C</p>
              </div>
              <div className="flex flex-col justify-center items-center h-full">
                <Image src={`https:${day.day.condition.icon.replace("64x64", "128x128")}`} alt="weather" width={70} height={70}/>
                <p className="text-sm font-bold text-black text-center">{day.day.condition.text}</p>
              </div>
            </div>
        );
      })}
    </div>
  );
}
