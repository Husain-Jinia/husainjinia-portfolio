import React from 'react'
import TopHeader from './TopHeader'
import Bottom from './Bottom'

const Header = () => {
  return (
    <div className='mx-3 xl:mx-20 lg:mx-20 md:mx-10'>
        <div className='flex flex-col bg-white-400'>
            <TopHeader/>
            <Bottom/>
        </div>
    </div>
  )
}

export default Header