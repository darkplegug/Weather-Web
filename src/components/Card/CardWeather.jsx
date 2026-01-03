import Image from "next/image";

export default async function CardWeather({ api }) {
  return (
    <div className="w-90 shrink-0 rounded-md bg-[#202020] p-4 flex flex-row justify-between relative">
      <div className="flex flex-col justify-between" >
        <div>
          <h2 className="text-xl font-bold text-white">Today</h2>
          <h2 className="text-xl font-bold text-white">{api.location.name}</h2>        
        </div>

        <h2 className="text-5xl font-semibold text-white">{api.current.temp_c}°C</h2>  

        <div className="flex flex-row gap-33">
          <h2 className="text-lg font-medium text-white">Feels Like:  {api.current.feelslike_c}°C</h2>
        </div>
      </div>

      <div className="flex flex-col absolute right-4 top-4 items-end w-40">
        <Image src={`https:${api.current.condition.icon.replace("64x64", "128x128")}`} alt="weather-icon" width={50} height={50}/>
        <h2 className="text-md font-bold text-white">{api.current.condition.text}</h2>
      </div>
      
    </div>

  );
}