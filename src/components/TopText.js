import React from 'react'
import Header from '../components/Header'
import diamond from '../../src/assets/diamond.png'

function TopText() {
  return (

      <div >
        <div className='flex gap-2 pt-28'>
          <img src={diamond} width={25} height={10} />
          <h3 className='text-lg '>LaunchPad</h3>
        </div>
        <p className='text-xs mt-2 text-[#9B9BB0] ml-1'>Purchase the brightest projects tokens in their early stage</p>
      </div>


  )
}

export default TopText