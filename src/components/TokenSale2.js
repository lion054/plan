import React from 'react'
import bitcoin from '../../src/assets/bitcoin.png'
import logo from '../../src/assets/logo.png'

function TokenSaleTwo() {
    return (
        <div className='mt-24'>
            <div className='bg-[#9B9BB0] w-[280px] h-[280px] relative rounded-md border-[1px] border-[#9B9BB0]'>
                <div className='bg-[#222531] w-full h-[260px] absolute bottom-0 py-2 px-4'>
                    <div className='flex items-center gap-2 mt-2'>
                        <div className='bg-[#f38010] rounded-full p-1 w-6 h-6 flex items-center justify-center'>
                            <p className='text-sm'>1</p>
                        </div>
                        <div className=''>
                            <h6 className='text-xs font-bold'>Token Sale</h6>
                            <p className='text-[10px]'>Dec 16, 2021 4:06 PM UTC</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='flex justify-between'>
                            <p className='text-[11px]'>Progress</p>
                            <p className='text-[11px]'>35.7%</p>
                        </div>
                        <div className='mt-1 h-[5px] rounded-xl bg-[#4c372a]'>
                            <div className='mt-1 h-[5px] rounded-xl bg-[#f38010] w-11/12'>

                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='text-xs font-semibold'>Your committed amount</p>

                        <div className='flex gap-1 items-center'>
                            <p className=' text-base text-[#F38010] font-semibold'>21,000.28 BTC </p>
                            <img src={bitcoin} className='w-[18px] h-[19px] bg-[#f38010] p-1 rounded-full' />
                        </div>

                        <p className='text-xs font-semibold mt-4'>Your Majo Allocation</p>

                        <div className='flex gap-1 items-center'>
                            <p className=' text-base text-[#F38010] font-semibold'>8325,258.66 </p>
                            <img src={logo} className='w-[18px] h-[19px] bg-[#f38010] p-1 rounded-full' />
                        </div>


                        <div className='flex items-end justify-end mt-1'>
                            <button className='bg-[#f38010] rounded-md px-4 py-1 mt-2 text-xs focus:outline-none hover:outline-none'>Claim Tokens</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokenSaleTwo