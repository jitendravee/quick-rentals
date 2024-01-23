import React from 'react'
import { faqData } from './Faq.js';



const Faq = ({ data }) => (
  <div className='bg-slate-100 px-7 '>
    <div className='flex flex-col items-start justify-between '>
      {data.map((item) => (
        <div className='flex flex-col items-center mt-4 p-3 ' key={item.id}>
          <div className='flex flex-col outline outline-[0.1px] p-6 gap-3 rounded-xl'>
          <h1 className='font-medium text-[14px] md:text-[22px]'>{item.head}</h1>
            <p className='font-light text-[12px] md:text-[20px]'>{item.tag}</p>
        </div>
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => {




  return (
    <div className='flex flex-col'>
      <div>
       <h1 className='font-semibold text-[19px] ml-4 mt-4 mb-5 md:text-[32px]'>FAQs</h1>
        <Faq   data={faqData}/>
      </div>
      <div className='bg-slate-700 text-white'>
<div className='p-4'>
  <ul className='flex flex-row items-center justify-between'>
    <li>Contact</li>
    <li>Customer NO</li>
    <li>Other Information</li>
  </ul>

</div>
<h1 className='p-4 '>Made with love</h1>
      </div>
    </div>
  )
}

export default Footer