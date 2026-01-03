export default function LandCard({ api }) {
    return (
        <div className="grid grid-rows-[50%_48%] gap-1">
            <div className="w-92 p-4 rounded-md bg-[#202020] flex justify-between items-center flex-row">
                <div className="pr-32">
                    <h2 className="text-xl font-semibold text-white flex flex-row">HUMIDITY</h2>
                    <h2 className="text-3xl font-medium text-white">{api.current.humidity}%</h2>                    
                </div>
                <div>
                    <p className="text-white text-md font-semibold">The dew point is {api.current.dewpoint_c}° right now</p>
                </div>
            </div>
            <div className="flex flex-row gap-1">
                <div className="w-30 rounded-md bg-[#202020] flex justify-center items-center flex-col">
                    <h2 className="text-sm font-semibold text-white">UV INDEX</h2>
                    <h2 className="text-xl font-medium text-white">{api.current.uv}%</h2>
                </div>           
                <div className="w-30 rounded-md bg-[#202020] flex justify-center items-center flex-col">
                    <h2 className="text-sm font-semibold text-white">CLOUD</h2>
                    <h2 className="text-xl font-medium text-white">{api.current.cloud}%</h2>
                </div>    
                <div className="w-30 rounded-md bg-[#202020] flex justify-center items-center flex-col">
                    <h2 className="text-sm font-semibold text-white">HEAT INDEX</h2>
                    <h2 className="text-xl font-medium text-white">{api.current.heatindex_c}°C</h2>
                </div>   
            </div>
        </div>
    );
}