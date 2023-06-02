import React from "react";
import "./Table.css";
import "sorttable";
import { BiSearch } from "react-icons/bi";
import { useMediaQuery } from "@react-hook/media-query";

function Search({ setSearchQuery, searchQuery }) {
  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const matches = useMediaQuery("(min-width: 640px)");

  return (
    <div className="flex flex-col md:flex-row w-full md:w-auto gap-3 items-center">
      <div className="w-full md:w-[45%] lg:w-[50%] flex bg-[#21242E] px-2 py-[12px] gap-2 rounded-md items-center">
        <BiSearch className="text-[#9B9BB0]" />
        <input
          id="search"
          className="bg-transparent outline-none border-none text-xs text-[#9B9BB0] w-full"
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(event) => handleSearchInput(event)}
        />
      </div>

      {matches && <span className="font-normal">|</span>}

      <div className="flex justify-between md:justify-start gap-3 items-center mt-2 md:mt-0 ml-[-8px]">
        <span className="bg-[#F380101A] p-[5px] rounded text-xs cursor-pointer">
          All
        </span>
        <span className="text-xs cursor-pointer">In-Progress</span>
        <span className="text-xs cursor-pointer">Completed</span>
      </div>
    </div>
  );
}

export default Search;
