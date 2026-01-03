import CardWeather from "@/components/Card/CardWeather";
import WeekHistoryCard from "@/components/Card/WeekHistoryCard";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import AstroCard from "@/components/Card/AstroCard";
import WindCard from "@/components/Card/WindCard";
import LandCard from "@/components/Card/LandCard";
import { GetApi } from "@/libs/api-libs";
import ShowMap from "@/components/Map/ShowMap"
import Chart from "@/components/Chart"
import AirQuality from "@/components/Weather/AirQuality"

export default async function SearchPage ({params}) {
    const { keyword } = await params;
    const weather = await GetApi({ index: "forecast", city: keyword })

    const location = weather.location;
    const airquality = weather.current.air_quality;

    return (
        <> 
            <div className="h-screen grid grid-rows-[65%_35%]">
                <div className="pt-20 pb-2 px-4 h-full">
                    <ShowMap api={weather}/> 
                </div>

                <div className="flex overflow-x-auto mb-3">
                    <HorizontalScroll>
                        <CardWeather api={weather} />
                        <WeekHistoryCard api={weather} />
                        <LandCard api={weather} />
                        <AstroCard api={weather} />
                        <WindCard api={weather} />
                    </HorizontalScroll>
                </div>
            </div>
            <div className="p-4">
                <Chart api={weather}/>
            </div>
            <div className="p-4">
                <AirQuality airQuality={airquality} location={location}/>
            </div>
        </>
    );
}