"use client"

import { ArrowsLeftRight } from "@phosphor-icons/react";

export default function LandCard({ api }) {
    return (
        <div className="bg-[#202020] w-full mt-2 p-2 rounded-xl h-50">
            <div className="bg-white h-1/2 w-full rounded-lg p-2 flex flex-row justify-between">
                <div>
                    <h2 className="text-2xl sm:text-4xl font-bold text-black text-left">HUMIDITY</h2>
                    <h2 className="text-2xl sm:text-3xl font-medium text-black text-left">{api.current.humidity}%</h2>                     
                </div>
                <div className="flex justify-center items-center">
                    <ArrowsLeftRight size={35} />
                </div>
                
                <div>
                    <h2 className="text-2xl sm:text-4xl font-bold text-black text-right">DEW POINT</h2>
                    <h2 className="text-2xl sm:text-3xl font-medium text-black text-right">{api.current.dewpoint_c}°C</h2>                     
                </div>
            </div>
            <div className="h-1/2 w-full p-3 flex flex-row justify-between items-center"> 
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <h2 className="text-sm font-semibold text-white text-left">UV INDEX</h2>
                        <h2 className="text-xl font-medium text-white text-left">{api.current.uv}%</h2>                        
                    </div>
                </div>     
                <div className="border-r-2 border-gray-400 h-full"></div>      
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-sm font-semibold text-white">CLOUD COVERAGE</h2>
                    <h2 className="text-xl font-medium text-white">{api.current.cloud}%</h2>
                </div>    
                <div className="border-r-2 border-gray-400 h-full"></div>  
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <h2 className="text-sm font-semibold text-white text-right">HEAT INDEX</h2>
                        <h2 className="text-xl font-medium text-white text-right">{api.current.heatindex_c}°C</h2>                        
                    </div>
                </div>   
            </div>
        </div>
    );
}