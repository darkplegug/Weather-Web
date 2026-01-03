"use client";
import { ArrowUp, Compass } from "@phosphor-icons/react";

export default function WindCard({ api }) {
    return (
        <div className="flex flex-row gap-1"> 
            <div className="w-45 p-4 shrink-0 rounded-md bg-[#202020] flex flex-col justify-between"> 
                <h2 className="text-white text-md font-bold">Wind Velocity</h2>
                <div className="flex flex-col">
                    <div className="flex flex-row items-baseline gap-2">
                        <h2 className="text-white text-3xl">{api.current.wind_kph}</h2> 
                        <h2 className="text-white text-md">km/h</h2>                      
                    </div>
                    <h2 className="text-white text-sm">Gusts up to {api.current.gust_kph} km/h</h2>
                </div>
                <div className="flex justify-end items-end w-full">
                    <ArrowUp size={32} color="#ebe6e6" />
                </div>  
            </div>
            <div className="w-45 p-4 shrink-0 rounded-md bg-[#202020] flex flex-col justify-between">
                <h2 className="text-white text-md font-semibold">Wind Degree <br></br>& Wind Direction</h2>
                <div className="flex justify-center items-center w-full">
                    <Compass size={70} color="#ebe6e6" />
                </div>
                <div className="flex flex-row justify-between items-baseline">
                    <h2 className="text-white text-sm">From {api.current.wind_dir}</h2>
                    <h2 className="text-white text-2xl">{api.current.wind_degree}°</h2>
                </div>
            </div>
        </div>

            

    )
}