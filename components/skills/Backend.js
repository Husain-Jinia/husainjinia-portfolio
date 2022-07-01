import React from 'react'

const Backend = () => {
  return (
    <div className='mb-4 xl:mb-0 lg:mb-0'>
        <div className='xl:h-[32rem] lg:h-[32rem] h-[27rem] lg:px-10  xl:p-[5rem] xl:pb-0 lg:p-10 lg:pb-0 flex flex-col text-center align-center   border border-2 border-gray-400 rounded lg:border-white xl:border-white'>
            <div className='my-2   grid place-items-center'>

                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
            <div className='flex flex-col my-5'>
                <div className='text-2xl font-[800] my-2'>Backend Developer</div>
                <div>I also do backend developement</div>
            </div>
            <div className='flex flex-col my-5'>
                <div className='text-xl font-[600] my-2'>Languages i speak</div>
                <div>Python, Javascript</div>
            </div>
            <div className='flex flex-col my-5'>
                <div className='text-xl font-[600] my-2'>Frameworks</div>
                <div>Django, Nodejs, Express,</div>
                <div> Mongodb, MySQL</div>
            </div>
        </div>
    </div>
  )
}

export default Backend