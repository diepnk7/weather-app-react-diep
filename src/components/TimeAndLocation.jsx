import React from 'react'
import { formatToLocalTime } from '../services/WeatherServices'

function TimeAndLocation({weather: {dt, timezone, name, country}}) {
  return (
    <div>
        <div className='flex items-center justify-center md:my-6 my-3'>
            <p className='text-white md:text-xl sm:text-[18px] text-[16px] font-extralight text-center'>
                {formatToLocalTime(dt,timezone)}
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white md:text-3xl text-[25px] font-medium'>
                {`${name}, ${country}`}
                
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation