import React from 'react'
import "./Table.css";
import "./HomeSearch.css";
import "sorttable";
import { BiSearch } from "react-icons/bi";

function Search({ setSearchQuery, searchQuery }) {

    const handleSearchInput = (event) => {
        setSearchQuery(event.target.value);
    };
    return (

        <div className='flex w-50 md:w-90 gap-3 items-center'>
            <div className='w-full lg:w-[45%] flex bg-[#21242E] px-2 py-[12px] gap-2 rounded-md items-center'>
                <BiSearch  className='text-[#9B9BB0]'/>
                <input id="search"
                    className='bg-transparent outline-none border-none text-xs text-[#9B9BB0]'
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={(event) => handleSearchInput(event)}
                />
            </div>

            <div className="flex justify-between gap-3 items-center" style={{display:'none'}}>
               <span className='font-normal'>|</span>
               <span className="bg-[#F380101A] p-[5px] rounded text-xs cursor-pointer">All</span>
               <span className='text-xs cursor-pointer'>In-Progress</span>
               <span className='text-xs cursor-pointer'>Completed</span>
            </div>
        </div>
    )
}

export default Search