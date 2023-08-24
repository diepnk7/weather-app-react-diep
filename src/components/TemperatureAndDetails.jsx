import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset
} from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../services/WeatherServices'

function TemperatureAndDetails({weather: {timezone, feels_like, temp, temp_min, temp_max, humidity, sunrise, sunset, details, icon, speed}}) {
  return (
    <div>
        <div className='flex items-center justify-center md:py-6 py-4 text-xl text-cyan-300'>
            <p>{details}</p>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3'>
            <div className='w-1/3'>
                <img src={iconUrlFromCode(icon)} alt='' className='w-20 mx-auto'/>
            </div>
            <p className='w-1/3 text-5xl text-center'>{temp.toFixed()}°</p>
            <div className='w-1/3 flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={16} className='mr-1'/>
                    Real Feel:
                    <span className='font-medium ml-1'>{feels_like.toFixed()}°</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={16} className='mr-1'/>
                    Humidity:
                    <span className='font-medium ml-1'>{humidity.toFixed()}%</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center '>
                    <UilWind size={16} className='mr-1'/>
                    Wind:
                    <span className='font-medium ml-1'>{speed.toFixed()} m/s</span>
                </div>
            </div>
        </div>
        {/* <div className='w-full flex flex-wrap items-center justify-center text-white text-sm py-3 divide-x-[1px] divide-white'> */}
        <div className='w-full sm:flex flex-wrap gap-y-2 items-center justify-center text-white text-sm py-3'>
            <div className='w-[170px] flex items-center gap-2 px-4 mx-auto'>
                <UilSun/>
                <p className='font-light'>
                    Rise: <span className='font-medium ml-1'>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
                </p>
            </div>
            <div className='w-[170px] flex items-center gap-2 px-4 mx-auto'>
                <UilSunset/>
                <p className='font-light'>
                    Set: <span className='font-medium ml-1'>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
                </p>
            </div>
            <div className='w-[170px] flex items-center gap-2 px-4 mx-auto'>
                <UilArrowUp/>
                <p className='font-light'>
                    High: <span className='font-medium ml-1'>{temp_max.toFixed()}°</span>
                </p>
            </div>
            <div className='w-[170px] flex items-center gap-2 px-4 mx-auto'>
                <UilArrowDown/>
                <p className='font-light'>
                    Low: <span className='font-medium ml-1'>{temp_min.toFixed()}°</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default TemperatureAndDetails