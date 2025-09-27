import React from 'react'

function page() {
  return (
    <div className='w-screen h-screen bg-black pt-35'>
      <div className='container flex space-x-15 px-20'>
        <div className=''>
          <img src="https://preview.redd.it/dbngi0djlq521.png?width=640&crop=smart&auto=webp&s=1022e50d7e2c31d3a639a38ad1e508a8bb75b00d" alt=""  className='w-120'/>
        </div>
        <div className='relative'>
          <h1 className='text-4xl text-lightGray font-inter-tight font-bold relative z-10'>About Me</h1>
          <h1 className='absolute z-0 text-7xl text-gray-900 font-inter-tight font-bold top-2'>About</h1>
        </div>
      </div>
    </div>
  )
}

export default page