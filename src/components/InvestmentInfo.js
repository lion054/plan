import React from 'react'

function InvestmentInfo(props) {

    const project = props.project;

    return (
        <div className='flex flex-col'>
            <div className='mt-6 '>
                <h2 className='text-[#f38010] text-xl mb-2 font-bold'>Investment Info</h2>
            </div>
            <table class="border-collapse border border-[#16161D] text-xs px-3 py-1">
                <thead className='bg-[#21242e]'>
                    <tr>
                        <th class="border-[2px] border-[#16161D] px-3 py-1 w-1/2">
                            Token
                        </th>
                        <th class="border-[2px] border-[#16161D] px-3 py-1">
                            {project.coin_name}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-[#b9b9bb]'>
                        <td class="border-[2px] border-[#16161D] px-3 py-1 ">
                            Total Supply
                        </td>
                        <td class="border-[2px] border-[#16161D] px-3 py-1">
                        {project.total_raised ? Number(project.total_raised).toLocaleString() : ""} {" "}
                        {project.coin_name} 
                        </td>
                    </tr>

                    <tr className='bg-[#21242e]'>
                        <th class="border-[2px] border-[#16161D] px-3 py-1 w-1/2">
                            Amount For Sale</th>
                        <th class="border-[2px] border-[#16161D] px-3 py-1">
                          {project.amount_for_sale ? Number(project.amount_for_sale).toLocaleString() : ""} {project.coin_name} 
                        </th>
                    </tr>
                    
                    <tr className='bg-[#b9b9bb]'>
                        <td class="border-[2px] border-[#16161D] px-3 py-1 ">Decimals</td>
                        <td class="border-[2px] border-[#16161D] px-3 py-1">12</td>
                    </tr>

                    <tr className='bg-[#21242e]'>
                        <th class="border-[2px] border-[#16161D] px-3 py-1 w-1/2">
                            Public Sale Token Price</th>
                        <th class="border-[2px] border-[#16161D] px-3 py-1">
                            1 Majo =  {project.token_price ? Number(project.token_price).toLocaleString() : ""} BTC</th>
                    </tr>

                    <tr className='bg-[#b9b9bb]'>
                        <td class="border-[2px] border-[#16161D] px-3 py-1 ">
                            Access Type
                        </td>
                        <td class="border-[2px] border-[#16161D] px-3 py-1">
                            Public
                        </td>
                    </tr>

                    <tr className='bg-[#21242e]'>
                        <th class="border-[2px] border-[#16161D] px-3 py-1 w-1/2">Hard Cap</th>
                        <th class="border-[2px] border-[#16161D] px-3 py-1">
                            {project.token_price ? Number(project.token_price).toLocaleString() : ""} BTC
                        </th>
                    </tr>
                    
                    <tr className='bg-[#b9b9bb]'>
                        <td class="border-[2px] border-[#16161D] px-3 py-1 ">Max. Allocation</td>
                        <td class="border-[2px] border-[#16161D] px-3 py-1">
                            {project.total_raised ? Number(project.total_raised).toLocaleString() : ""} BTC
                        </td>
                    </tr>

                    <tr className='bg-[#21242e]'>
                        <th class="border-[2px] border-[#16161D] px-3 py-1 w-1/2">Token Distribution</th>
                        <th class="border-[2px] border-[#16161D] px-3 py-1">After the end of token sale</th>
                    </tr>

                    <tr className='bg-[#b9b9bb]'>
                        <td class="border-[2px] border-[#16161D] px-3 py-1 ">Token Sale Vesting Period</td>
                        <td class="border-[2px] border-[#16161D] px-3 py-1">No lockup</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InvestmentInfo