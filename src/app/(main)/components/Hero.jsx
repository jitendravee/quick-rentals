import React from 'react';
import { premiumData, ecoData, specialData, suvData } from './Company.js';

const FleetCategory = ({ title, data }) => (
  <div className='flex flex-col '>
    <h1 className='font-medium text-[24px] ml-6'>{title}</h1>
    <div className='flex flex-row items-start justify-between '>
      {data.map((item) => (
        <div className='flex flex-col items-center mt-4 p-3 ' key={item.id}>
          <div className='flex flex-col items-center justify-between'>
            <p className='font-light text-[14px] md:text-[22px]'>{item.tag}</p>
            <img alt={item.id} src={item.image} className='w-2/3 p-2 hover:scale-105 ease-in-out duration-300' />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Hero = () => {
  return (
    <div className='mt-7'>
      <div className='flex flex-row justify-between'>
        <h1 className='ml-2 text-[16px] md:text-[24px] font-semibold'>Our Fleets</h1>
        <p className='font-extralight mr-2 text-[14px] md:text-[19px]'>
          Our Fleet has the best once in range <br />
          <span className='hidden md:block'>SUVs, Luxuries, Sports, Eco class<br />Best in Safety and Economy</span>
        </p>
      </div>

      <FleetCategory title='The Premium Class' data={premiumData} />
      {/* <FleetCategory title='The SUVs Class' data={suvData} /> */}
      <FleetCategory title='The Eco Once' data={ecoData} />
      <FleetCategory title='The Special Cars' data={specialData} />
    </div>
  );
}

export default Hero;
