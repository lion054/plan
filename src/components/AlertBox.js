import React from "react";
import { Link } from "react-router-dom";

function AlertBox() {
  return (
    <div className="bg-[#583619] py-3 px-7 mt-8 mb-10 rounded-md flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="mb-4 md:mb-0 md:mr-4">
        <h5 className="text-white text-xs">
          Apply for IDO on BRC-20 DAO Launchpad
        </h5>
        <p className="text-xs mt-2 text-[#9B9BB0]">
          Launch your BRC-20 token on BRC-20 DAO Launchpad to connect with our
          core community.
        </p>
      </div>
      <div>
        <Link className="bg-[#16161D] py-1 px-3 rounded-[5px] text-xs text-[#F38010] border-[1px] border-[#F38010]">
          Discord Channel
        </Link>
      </div>
    </div>
  );
}

export default AlertBox;
