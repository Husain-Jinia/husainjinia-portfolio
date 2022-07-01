import React from 'react'

const Frontend = () => {
  return (
    <div className='mb-4 xl:mb-0 lg:mb-0 '>
    <div className='xl:h-[32rem] lg:h-[32rem] h-[27rem]  xl:p-[5rem] xl:pb-0 lg:p-10 lg:pb-0 flex flex-col text-center align-center   border border-2 border-gray-400 rounded lg:border lg:border-y-0  lg:border-gray-400 xl:border xl:border-y-0  xl:border-gray-400'>
        <div  className='my-2  grid place-items-center'>
         <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <div className='flex flex-col my-5'>
            <div className='text-2xl font-[800] my-2'>Frontend Developer</div>
            <div> frontend developement is my forte</div>
        </div>
        <div className='flex flex-col my-5'>
            <div className='text-xl font-[600] my-2'>Languages i speak</div>
            <div>HTML, CSS, SASS, Javascript</div>
        </div>
        <div className='flex flex-col my-5'>
            <div className='text-xl font-[600] my-2'>Frameworks</div>
            <div>React, Next, Jinja, Angular</div>
        </div>
    </div>
    </div>
  )
}

export default Frontend