import React from 'react'
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader'

const Header = () => {
  return (
    <div className='mx-3 xl:mx-20 lg:mx-20 md:mx-10'>
        <div className='flex flex-col bg-white-400'>
            <TopHeader/>
            <BottomHeader/>
        </div>
    </div>
  )
}

export default Header