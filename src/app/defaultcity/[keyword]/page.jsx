import { GetApi } from "@/libs/api-libs";
import CardWeather from "@/components/Card/CardWeather";
import WeekHistoryCard from "@/components/Card/WeekHistoryCard";
import AstroCard from "@/components/Card/AstroCard";
import WindCard from "@/components/Card/WindCard";
import LandCard from "@/components/Card/LandCard";
import ShowMap from "@/components/Map/ShowMap"
import Chart from "@/components/Chart"
import AirQuality from "@/components/Weather/AirQuality"
import WeatherAlerts from "../../../components/Weather/WeatherAlerts";
import Navbar from "@/components/Navbar/index";

export default async function DefaultCityPage ({params}) {
    const {keyword} = await params;
    const weather = await GetApi({ index: "forecast", city: `${keyword}` });
  
    const location = weather.location;
    const airquality = weather.current.air_quality;

return (
    <>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-1">
          <div className="py-2 px-1 pr-1 pl-1 min-w-full order-1 lg:order-2">
            <Navbar />
            <WeekHistoryCard api={weather}/>
            <LandCard api={weather}/>
            <div className="flex flex-col sm:flex-row w-full mt-2 gap-1">
              <div className="w-full sm:w-1/2">
                <AstroCard api={weather}/>
              </div>
              <div className="w-full sm:w-1/2">
                <WindCard api={weather}/>
              </div>
            </div>
          </div>
          <div className="py-2 px-1 pr-1 pl-1 order-2 lg:order-1 flex flex-col gap-2">
            <div className="h-45 flex flex-row">
                <CardWeather api={weather}/>
            </div>
            <div className="h-131">
              <ShowMap api={weather} />
            </div>
          </div>
        </div> 
        <div className="px-2">
          <Chart api={weather}/>        
        </div>
        <div className="px-2 mt-2">
          <AirQuality airQuality={airquality} location={location}/>        
        </div>
        <div className="px-2 mt-2 mb-2">
          <WeatherAlerts api={weather} />       
        </div>
      </div>
    </>
  );
}