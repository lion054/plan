import React, { useState } from "react";
import InvestmentInfo from "./InvestmentInfo";
import ProjectIntro from "./ProjectIntro";

function TokenInfo(props) {
  const [page, setPage] = useState(1);
  return (
    <div className="pb-20">
      <div className="flex gap-4 items-center mt-24 relative">
        <p
          className="text-xs text-[#9B9BB0] cursor-pointer"
          onClick={() => setPage((prev) => (prev = 1))}
        >
          Project Information
        </p>
        <p
          className="text-xs cursor-pointer"
          onClick={() => setPage((prev) => (prev = 2))}
        >
          Token Sale
        </p>
      </div>
      <div className="flex gap-4 items-center relative">
        {page === 1 && (
          <div className={"w-[100px] border-[1px] mt-1 border-[#f38010]"}></div>
        )}
        {page === 2 && (
          <div className="absolute left-[115px] w-[65px] border-[1px] mt-1 border-[#f38010]"></div>
        )}
      </div>
      <div className="h-[400px]">
        {page === 1 && <ProjectIntro project={props.project} />}
        {page === 2 && <InvestmentInfo project={props.project} />}
      </div>
    </div>
  );
}

export default TokenInfo;
