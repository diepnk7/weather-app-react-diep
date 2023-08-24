import React from 'react'
import { iconUrlFromCode } from '../services/WeatherServices'

function Forecast({title, items}) {
  return (
    <div>
        <p className='text-white font-medium uppercase mt-6'>{title}</p>
        <hr className='my-2'/>
        <div className='flex flex-row items-center justify-between text-white'>
            {items.map((item)=>{ return(
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light sm:text-sm text-[13px]'>
                        {item.title}
                    </p>
                    <div className='img aspect-[1/1] w-full'>
                        <img src={iconUrlFromCode(item.icon)} alt='' className='w-full h-full object-cover hover:scale-105 duration-300 ease-linear'/>
                    </div>
                    <p className='font-medium'>{item.temp}°</p>
                </div>
            )})}
        </div>
    </div>
  )
}

export default Forecast