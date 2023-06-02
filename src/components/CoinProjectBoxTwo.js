import React from 'react'
import Header from '../components/Header'
import projectTwo from '../../src/assets/project2.png'
import lens from '../../src/assets/lens.png'
import bitcoin from '../../src/assets/bitcoin.png'
import { Link } from 'react-router-dom'

function CoinProjectBoxTwo() {
    return (

        <div className='bg-[#222531] relative  rounded-md border-[1px] border-gray-300'>
            <div className='relative'>
                <img src={projectTwo} />
                <img src={lens} className='w-[60px] absolute right-4 -bottom-8' />
                <p className='text-white font-bold bg-[#16C784] py-[2px] text-[10px] rounded-sm px-2 absolute top-2 right-4'>COMPLETED</p>

            </div>

            <div className='px-3 pt-2 pb-12 flex flex-col gap-1'>
                <h3 className='text-white font-bold text-sm'>Ordinary Whitelist 1</h3>
                <span className='text-[#F38010] text-[10px]'>$ordi</span>
                <span className='text-[#9B9BB0] text-[10px]'>ordi is the currency of the first Brc-20.</span>
                <div className='flex flex-col gap-2 mt-2'>
                    <div className='flex justify-between'>
                        <h6 className='text-xs'>Amount For Sale</h6>
                        <p className='text-[10px]'>21,000,000</p>
                    </div>
                    <div className='flex justify-between'>
                        <h6 className='text-xs'>Token Price</h6>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[10px] text-[#F38010]'>21,000,000</p>
                            <img src={bitcoin} className='w-[18px] h-[19px] bg-[#f38010] p-1 rounded-full' />
                        </div>

                    </div>
                    <div className='flex justify-between'>
                        <h6 className='text-xs'>Total Raised</h6>
                        <div className='flex gap-1 items-center'>
                            <p className='text-[10px] text-[#F38010]'>158,738.8 / 16,258 BTC</p>
                            <img src={bitcoin} className='w-[18px] h-[19px] bg-[#f38010] p-1 rounded-full' />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <h6 className='text-xs'>Progress</h6>
                        <p className='text-[10px]'>2,880.7%</p>
                    </div>
                </div>
            </div>

            <div className='bg-[#9B9BB0] absolute bottom-0 py-1 px-2 w-full'>
                <h6 className='text-black text-xs font-bold'><span className='text-white text-xs font-bold'>Token Sale</span>   End in 00 D : 13 H : 21 M : 16 S</h6>
            </div>
        </div>


    )
}

export default CoinProjectBoxTwo