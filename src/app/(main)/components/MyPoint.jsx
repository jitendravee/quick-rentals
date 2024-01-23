import React from 'react'
import Image from 'next/image'
const MyPoint = () => {
  return (
    <div className='flex flex-col mt-3 bg-black p-9 py-12'>
      <h1 className='font-bold text-[28px] mt-6 ml-3 text-white'>What makes us Unique</h1>
      <div className='flex flex-row mt-16 gap-4'>
      <img alt='unique photo' src='https://c0.wallpaperflare.com/preview/860/756/868/car-city-sign-signage.jpg' className='w-1/3  ml-3 rounded-2xl hover:scale-95 ease-in-out duration-300'/>
     <div>
      <p className='text-white text-wrap font-light text-[12px] md:text-[18px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ab facilis aut placeat molestias voluptatibus nulla. Architecto voluptatibus corrupti velit illo ipsum? Tenetur, modi provident mollitia eligendi iste nam nostrum, sed cumque dolor rem, quaerat error ea officia deserunt. Architecto officia, libero in consequatur, assumenda perferendis nam temporibus reiciendis ipsum cum, rerum aliquid itaque iste minima odio consequuntur vitae quidem dicta neque. Dicta similique deleniti enim quae, minus expedita saepe cupiditate voluptatibus quod maxime tenetur tempora ducimus sit autem iste delectus eos molestias placeat est laborum itaque harum odio vitae. Amet et laboriosam ex obcaecati quos perspiciatis excepturi minus molestiae?</p>
      
      <p className='text-white text-wrap mt-4 font-light text-[18px] hidden md:block'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ab facilis aut placeat molestias voluptatibus nulla. Architecto voluptatibus corrupti velit illo ipsum? Tenetur, modi provident mollitia eligendi iste nam nostrum, sed cumque dolor rem, quaerat error ea officia deserunt. Architecto officia, libero in consequatur, assumenda perferendis nam temporibus reiciendis ipsum cum, rerum aliquid itaque iste minima odio consequuntur vitae quidem dicta neque. Dicta similique deleniti enim quae, minus expedita saepe cupiditate voluptatibus quod maxime tenetur tempora ducimus sit autem iste delectus eos molestias placeat est laborum itaque harum odio vitae. Amet et laboriosam ex obcaecati quos perspiciatis excepturi minus molestiae?</p>
      </div>
      </div>

    </div>
  )
}

export default MyPoint