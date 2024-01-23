import React from 'react'

import companyData from './Company.js';
// animate-marquee-infinite
const Parters = () => {
  return (
    <>
      <div className='mt-3 mb-3 '>
        <h1 className='ml-5 text-[12px] font-light md:text-[26px]  '>Trusted by your favorite partners</h1>
        <div className=" w-full mt-3  px-12 overflow-x-hidden">
          <div className="flex  left-0 ">
            <div className='flex w-full  justify-around'>
              {companyData.map((card) => (
                <div className='' key={card.id}>
                  <img rel='card' src={card.image} className='min-w-[70px] md:min-w-[120px]' alt={`${card.id}`} />

                </div>
              ))}
            </div>
            <div className=' hidden md:flex w-full  justify-around'>
              {companyData.map((card) => (
                <div className='' key={card.id}>
                  <img rel='card' src={card.image} className='min-w-[30px] md:min-w-[120px]' alt={`${card.id}`} />

                </div>
              ))}
            
            </div>
            <div className='hidden md:flex w-full  justify-around'>
              {companyData.map((card) => (
                <div className='' key={card.id}>
                  <img rel='card' src={card.image} className='min-w-[50px] md:min-w-[120px]' alt={`${card.id}`} />

                </div>
              ))}
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Parters


