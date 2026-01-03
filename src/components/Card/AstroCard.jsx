import { IconMoonFilled, IconSunset2, IconSunset2Filled } from '@tabler/icons-react';

export default function AstroCard ({ api }) {
    return (
        <div className="flex flex-row gap-1">
            <div className="grid grid-rows-[49%_49%] gap-1">
                <div className="flex flex-row gap-2">
                    <div className="w-40 p-4 rounded-md bg-[#202020] flex justify-center items-start flex-col relative">
                        <h2 className='text-white text-xl font-bold'>Sunrise</h2>
                        <h2 className='text-white text-md'>{api.forecast.forecastday[0].astro.sunrise}</h2>
                        <IconSunset2 color="#f0ebeb" size={37} className='absolute right-4 flex justify-center items-center'/>
                    </div>                
                </div>
                <div className="flex flex-row gap-2">
                    <div className="w-40 p-4 rounded-md bg-[#202020] flex justify-center items-start flex-col relative">
                        <h2 className='text-white text-xl font-bold'>Sunset</h2>
                        <h2 className='text-white text-md'>{api.forecast.forecastday[0].astro.sunset}</h2>
                        <IconSunset2Filled color="#f0ebeb" size={37} className='absolute right-4 flex justify-center items-center'/>
                    </div>  
                </div>
            </div>      
            <div className="w-40 p-4 rounded-md bg-[#202020] flex justify-between flex-col">
                <div>
                    <h2 className='text-white text-2xl font-bold'>Moon</h2>
                    <IconMoonFilled color="#f0ebeb" size={40} />                    
                </div>
                <div>
                    <p className="text-white text-xl font-semibold">{api.forecast.forecastday[0].astro.moon_illumination}%</p>
                    <p className="text-white text-md ">Illumination</p>
                    <p className="text-white text-md ">{api.forecast.forecastday[0].astro.moon_phase}</p>                    
                </div>

            </div>      
        </div>

    );
}