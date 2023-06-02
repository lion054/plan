import React from 'react'
import bitcoin from '../../src/assets/bitcoin.png'

function TokenSale(props) {

    const project = props.project;

    const startdate = props.project.token_sale_starts;

    const startDate = new Date(startdate).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'UTC' });
    
    return (
        <div className='mt-24'>
            <div className='bg-[#f38010] w-[280px] h-[300px] relative rounded-md border-[1px] border-[#f38010]'>
                <div className='bg-[#222531] w-full h-[280px] absolute bottom-0 py-2 px-4'>
                    <div className='flex items-center gap-2 mt-2'>
                        <div className='bg-[#f38010] rounded-full p-1 w-6 h-6 flex items-center justify-center'>
                            <p className='text-sm'>1</p>
                        </div>
                        <div className=''>
                            <h6 className='text-xs font-bold'>
                                Token Sale
                            </h6>
                            <p className='text-[10px]'>
                                {startDate} UTC
                            </p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='flex justify-between'>
                            <p className='text-[11px]'>Progress</p>
                            <p className='text-[11px]'>
                                {project.progress}%
                            </p>
                        </div>
                        <div className='mt-1 h-[5px] rounded-xl bg-[#f38010]' style={{ width: `${project.progress}%` }}>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='text-xs font-semibold'>
                            Your committed amount
                        </p>
                        <div className='flex gap-1 items-center'>
                            <p className=' text-base text-[#F38010] font-semibold'>
                               {project.amount_for_sale ? Number(project.amount_for_sale).toLocaleString() : ""} BTC 
                            </p>
                            <img alt="" src={bitcoin} className='w-[18px] h-[19px] bg-[#f38010] p-1 rounded-full' />
                        </div>

                        <div className='flex justify-between items-center mt-2'>
                            <p className='text-[11px]'>Max commitment limit </p>

                            <div className='flex gap-1 items-center'>
                                <p className=' text-[11px] text-[#F38010]'>
                                  {project.token_price ? Number(project.token_price).toLocaleString() : ""} BTC 
                                </p>
                                <img alt="bitcoin" src={bitcoin} className='w-[14px] h-[14px] bg-[#f38010] p-[3px] rounded-full' />
                            </div>
                        </div>

                        <div className='flex justify-between items-center mt-2'>
                            <p className='text-[11px]'>Amount </p>

                            <div className='flex gap-1 items-center'>
                                <p className=' text-[11px] text-[#fff]'>
                                    Available: {project.total_raised ? Number(project.total_raised).toLocaleString() : ""}
                                </p>
                            </div>
                        </div>

                        <div className='mt-1 flex bg-[#16161D] px-3 py-[9px] rounded-md justify-between'>
                            <input className='bg-transparent text-xs focus:outline-none hover:outline-none' placeholder='0.00' />
                            <div className='flex gap-2'>
                                <button className='text-[#f38010] text-xs focus:outline-none hover:outline-none'>
                                    Max
                                    </button>
                                <p className='text-[#fff] text-xs'>BTC</p>
                            </div>
                        </div>

                        <div className='flex items-end justify-end '>
                        <button className='bg-[#f38010] rounded-md px-4 py-1 mt-2 text-xs focus:outline-none hover:outline-none'>
                            Connect
                        </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokenSale