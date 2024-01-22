import React from 'react'
import Image from 'next/image'
import { premiumData,ecoData,specialData,suvData } from './Company.js'
const Hero = () => {
  return (
    <div className='mt-7'>
 <div className='flex flex-row  justify-between'>
  <h1 className=' ml-2 text-[16px] md:text-[24px] font-semibold'>Our Fleets</h1>
<p className='font-extralight mr-2 text-[14px] md:text-[19px]'>Our Fleet has the best once in range <br />
<span className='hidden md:block'>SUVs,Luxuries,Sports,Eco class<br />Best in Safety and Economy</span>
</p>
 </div>

<div className='flex flex-row'>
{
  premiumData.map((data) => (
    <div className='flex flex-row' key={data.id}>
      <h1>{data.tag}</h1>
<img alt={data.id} src={data.image} className='w-48'/>
    </div>
  ))
  
  
}
</div>
    </div>
  )
}

export default Hero