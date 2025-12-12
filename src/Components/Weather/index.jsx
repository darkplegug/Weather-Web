'use client';

import { GetWeather } from '@/Libs/api-libs';
import Image from 'next/image';

export default async function Weather({city}) {

    const wather = await GetWeather({ city: `${city}`});

    return (
            <div>
              <h1 className='text-xl font-bold'>{wather.location.name},{wather.location.region}</h1>
              <h1 className='text-5xl font-bold'>{wather.current.temp_c}</h1>
              <Image src={`https:${wather.current.condition.icon}`} alt='weather icon' width={100} height={100} />
              <h1 className='text-xl font-bold'>{wather.current.condition.text}</h1>
              <h1 className='text-xl font-bold'>{wather.current.condition.text}</h1>
            </div>
    );
}