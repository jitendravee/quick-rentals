'use client'
import React from "react"
import Link from "next/link"
import { useState } from "react"
const page = () => {
const [tenant,setTenant] = useState(false)
const [rental,setRental] = useState(false)

const tenantLogin=() => {
{
  setRental(false)
  setTenant(true);
}
}
const rentalLogin=() => {
setTenant(false)
  setRental(true);
}
  return (
    <div className="flex items-center justify-center min-w-screen min-h-screen ">
  <div className="bg-slate-600 rounded-lg text-white w-1/3 flex items-center justify-center ">
<div className="">
  <h1 className="font-semibold text-[23px] mt-4 mb-3">Get Started!</h1>
<div className="flex flex-row gap-5  items-center ">  
  <div className="flex flex-col">
     <div className="flex flex-row gap-3 mb-9">
    <button onClick={tenantLogin} className="text-[18px] font-bold p-2  bg-slate-800 px-3 rounded-xl">As Tenant</button> 
      <button onClick={rentalLogin} className="text-[18px] font-bold p-2  bg-slate-800 px-3 rounded-xl">To Rent</button>

  </div>
  {
      (
        tenant && 
        <div className="flex flex-col gap-3 p-2 mb-6">
        <p className="text-[19px] font-semibold"> For Tenant</p>
        <p className="text-[19px] font-light ml-2 text-slate-200">Email</p>
        <input type="text" placeholder="Email"  className="p-3 rounded-xl text-md bg-slate-400 text-white"/>
        <p className="text-[19px] font-light ml-2 text-slate-200">Password</p>

        <input type="password" placeholder="Password" className="p-3 rounded-xl text-md bg-slate-400 text-white"/>
        </div>
      )
    } 
    
 {
      (
        rental && 
        <div className="flex flex-col gap-3 p-2 mb-6">
        <p className="text-[19px] font-semibold"> For Renting</p>
        <p className="text-[19px] font-light ml-2 text-slate-200">Email</p>
        <input type="text" placeholder="Email"  className="p-3 rounded-xl text-md bg-slate-400 text-white"/>
        <p className="text-[19px] font-light ml-2 text-slate-200">Password</p>

        <input type="password" placeholder="Password" className="p-3 rounded-xl text-md bg-slate-400 text-white"/>
        </div>
      )
    } 

</div>
  </div>
</div>
  </div>

    </div>
  )
}

export default page