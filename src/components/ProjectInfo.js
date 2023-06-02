import React from "react";
import { FaChevronLeft, FaTelegramPlane, FaTwitter, FaDiscord } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { Link } from "react-router-dom";
import social from "../../src/assets/social.png";
import bitcoin from "../../src/assets/bitcoin.png";

function ProjectInfo(props) {
    const project = props.project;
  return (
    <div
    style={{
      backgroundImage: `linear-gradient(0deg, rgba(12, 12, 12, 1), rgba(40, 37, 31, 0.1)), url(${project.banner_image})`,
      backgroundPosition: "center",
      backgroundSize: "100% auto",
      backgroundRepeat: "no-repeat",
    }}
    className="mt-32 rounded-xl relative h-[350px]"
  >
      <Link to="/launchpad">
        <div className="items-center text-white  rounded-sm   font-bold absolute top-4 left-12 py-[2px] flex gap-1  px-2 bg-gray-400">
          <FaChevronLeft className="text-[14px] font-extrabold" />
          <p className="text-[12px]">LaunchPad Homepage</p>
        </div>
      </Link>
      <p className="text-white font-bold bg-[#f38010] py-[2px] text-[12px] rounded-sm px-2 absolute top-4 right-12">
        Whitelist SALE
      </p>

      <div className="flex flex-col items-center justify-center h-full">
        <img src={project.thumb} className="w-16" alt="project thumb" />
        <h2 className="font-bold mt-2 text-xl">{project.project_name}</h2>
        <span className="text-white mt-1 text-xs">{project.introduction}</span>
        <div className="flex gap-2 mt-2">
          <TbWorldWww className="bg-white rounded-full p-[5px] text-black text-2xl" />
          <FaTelegramPlane className="bg-white rounded-full p-[5px] text-black text-2xl" />
          <FaTwitter className="bg-white rounded-full p-[5px] text-black text-2xl" />
          <FaDiscord className="bg-white rounded-full p-[5px] text-black text-2xl" />

          <div className="p-1 bg-white rounded-full h-6 w-6 flex items-center justify-center">
            <img src={social} className="w-5 h-[10px]" alt="project social icons" />
          </div>
        </div>
      </div>

      <div className=" gap-5 absolute bottom-4  w-full flex items-center px-12 justify-center">
        <div className="flex flex-col gap-0">
          <label className="text-xs">Amount For Sale</label>
          <p className="text-base -mt-2">
           {project.amount_for_sale ? Number(project.amount_for_sale).toLocaleString() : ""}
          </p>
        </div>
        <span className="h-6 w-[1px] border-r border-gray-50"></span>
        <div className="flex flex-col gap-0">
          <label className="text-xs">Total Raised</label>
          <div className="flex gap-1 items-center -mt-2">
            <p className=" text-base text-[#F38010]">
              {project.total_raised ? Number(project.total_raised).toLocaleString() : ""}
            </p>
            <img alt="bitcoin icon"
              src={bitcoin}
              className="w-[18px] h-[19px] bg-[#f38010] p-1 rounded-full"
            />
          </div>
        </div>
        <span className="h-6 w-[1px] border-r border-gray-50"></span>

        <div className="flex flex-col gap-0">
          <label className="text-xs">Participants</label>
          <p className="text-base -mt-2">
            {project.participants ? Number(project.participants).toLocaleString() : ""}
          </p>
        </div>
        <span className="h-6 w-[1px] border-r border-gray-50"></span>

        <div className="flex flex-col gap-0">
          <label className="text-xs">Token Price</label>
          <div className="flex gap-1 items-center -mt-2">
            <p className=" text-base text-[#fff]">
              1 Majo = 
              {project.token_price ? Number(project.token_price).toLocaleString() : ""}
              {" "} BTC
            </p>
            <img alt="bitcoin icon"
              src={bitcoin}
              className="w-[18px] h-[19px] bg-[#f38010] p-1 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
