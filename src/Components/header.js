import React from 'react'
import icons from '../Ultils/icons'


const { AiOutlineArrowLeft, AiOutlineArrowRight } = icons

const Header = () => {
  return (
    <div className='flex justify-between w-full'>
      <div className='flex'>
        <div className='flex text-gray-400'>
            <span><AiOutlineArrowLeft size={24}/></span>
            <span><AiOutlineArrowRight size={24}/></span>
        </div>

        <div>
            tim kiem
        </div>
      </div>

      <div>
            dang nhap
      </div>
    </div>
  )
}

export default Header
