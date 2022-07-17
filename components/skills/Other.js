import React from 'react'

const Other = () => {
  return (

    <div className='mb-4 xl:mb-0 lg:mb-0'>
        <div className='xl:h-[32rem] lg:h-[32rem] h-[27rem] xl:p-[5rem] xl:pb-0 lg:p-10 lg:pb-0 flex flex-col text-center align-center  lg:border lg:border-2  lg:rounded  xl:border xl:border-2  xl:rounded border border-2 border-gray-400 rounded lg:border-white xl:border-white  '>
        <div  className='my-2 grid place-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>
            <div className='flex flex-col my-5'>
                <div className='text-2xl font-[800] my-2 '>Other skills</div>
                <div>Miscellaneous skills</div>
            </div>
            <div className='flex flex-col my-5'>
                <div className='text-xl font-[600] my-2'>Dev Tools</div>
                <div>Git, Github, Heroku, Bitbucket</div>
            </div>
            <div className='flex flex-col my-5'>
                <div className='text-xl font-[600] my-2'>Design tools</div>
                <div>Photoshop, Figma, Krita</div>
            </div>
        </div>
    </div>
  )
}

export default Other