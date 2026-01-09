import Image from "next/image";
import Clock from "@/components/Weather/Clock"

export default async function CardWeather({ api }) {
  return (
    <div className="bg-[#202020] w-full grid grid-cols-2 rounded-xl">
      <div className="w-auto bg-white m-2 rounded-lg p-2 flex flex-col justify-between">
        <h2 className="text-4xl sm:text-5xl font-bold text-black">{api.current.temp_c}°C</h2>
        <div>
          <h2 className="text-2xl font-bold text-black">{api.location.name}</h2>
          <h2 className="text-md text-black">Feels Like:  {api.current.feelslike_c}°C</h2>           
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="h-1/2 bg-white mt-2 mb-1 mr-2 rounded-lg flex justify-center items-center">
          <div className="flex flex-row justify-center items-center w-full gap-2">
            <Image src={`https:${api.current.condition.icon.replace("64x64", "128x128")}`} alt="weather-icon" width={50} height={50}/>
            <h2 className="text-md font-bold text-black">{api.current.condition.text}</h2>
          </div>
        </div>
        <div className="bg-white mt-1 mb-2 mr-2 h-1/2 rounded-lg flex justify-center items-center">
          <Clock />
        </div>
      </div>
    </div>
  );
}