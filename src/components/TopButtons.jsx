import React from 'react'

function TopButtons({setQuery}) {
    const citis =[
        {
            id:1,
            title: 'Hanoi'
        },
        {
            id:2,
            title: 'London'
        },
        {
            id:3,
            title: 'Sydney'
        },
        {
            id:4,
            title: 'Tokyo'
        },
        {
            id:5,
            title: 'Italy'
        },
    ]
  return <div className='flex items-center justify-around my-6 '>
    {citis.map((city) => (
        <button 
            key={city.id} 
            className='text-white text-lg font-medium transition ease-out hover:scale-125' 
            onClick={()=>setQuery({q: city.title})}>
                {city.title}
        </button>
    ))}
  </div>
  
}

export default TopButtons