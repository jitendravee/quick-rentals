'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Hero from './assets/images/hero.jpg';
import Hero2 from './assets/images/hero2.jpg';
import { PiSteeringWheelBold } from "react-icons/pi";
import { HiOutlineMenu } from "react-icons/hi";


const Nav = () => {
  const [menu, setMenu] = useState(false)


  const toggleMenu = () => {
    setMenu(!menu);
  }
  return (
    <div>
      <div className='relative'>

        <div className='absolute  mt-2   w-full'>
          <div className='flex flex-row items-center justify-between'>
            <h1 className='  hidden md:flex flex-row ml-2  items-center text-[24px] gap-1'><PiSteeringWheelBold />QuickRentals</h1>
            <ul className='hidden md:flex flex-row gap-9 font-light text-[19px]'>
              <li className='hover:underline underline-offset-[5px] cursor-pointer'>Home</li>
              <li className='hover:underline underline-offset-[5px] cursor-pointer'>Products</li>
              <li className='hover:underline underline-offset-[5px] cursor-pointer'>Pricing</li>
              <li className='hover:underline underline-offset-[5px] cursor-pointer'>FAQ</li>
            </ul>

            <div className=' mx-2 flex flex-row items-center justify-between min-w-full  md:hidden'>
              <div className='flex flex-col'>
                <HiOutlineMenu onClick={toggleMenu} className=' cursor-pointer md:hidden' />{
                  (menu &&

                    <>
                      <ul className='font-medium rounded-lg items-start bg-[#f8f9fa] opacity-75 px-4 py-1'>

                        <li className='mb-1'>Home</li>
                        <li className='mb-1'>Product</li>
                        <li className='mb-1'>Pricing</li>
                        <li className='mb-1'>FAQ</li>
                      </ul>

                    </>

                  )
                }
              </div>
              <button className=' mr-3 outline outline-1 rounded-2xl p-1'>Book Now</button>

            </div>
            <button className='md:flex hidden  mr-3 text-[22px] px-6 py-1 outline outline-1 rounded-2xl font-light md:transition duration-150 ease-out hover:ease-in'>Book Now</button>

          </div>
        </div>
        <Image alt="wallpaper" src={Hero} className='hidden  md:block h-1/2' />
        <Image alt="wallpaper" src={Hero2} className='md:hidden h-1/2' />
      </div>
    </div>
  )
}

export default Nav