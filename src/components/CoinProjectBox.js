import React, { useState, useEffect } from "react";
import axios from "axios";
import bitcoin from "../../src/assets/bitcoin.png";
import { Link } from "react-router-dom";
import Search from "./Search";

function Countdown({ targetDate, projectStatus }) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date(targetDate);
      const now = new Date();

      const timeLeftMs = target.getTime() - now.getTime();
      if (timeLeftMs < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeLeftMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeftMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeLeftMs % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeLeftMs % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <span className="text-white text-xs font-bold">
      {projectStatus === "TOKEN SALE" ? (
        <>
          END IN {countdown.days} D: {countdown.hours} H:{" "}
          {countdown.minutes} M: {countdown.seconds} S
        </>
      ) : (
        <>
          COMPLETED ON{" "}
          {new Date(targetDate).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            timeZone: "UTC",
          })}{" "}
          UTC
        </>
      )}
    </span>
  );
}

function CoinProjectBox() {
  const spanStyle = {
    height: "30px",
    maxHeight: "30px",
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [projects, setProjects] = useState([]);

  const filteredProjects = projects.filter((project) =>
    project.project_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("https://marifx.com/api/projects")
      .then((res) => {
        setProjects(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowProjectList");
      });
  }, []);

  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-6">
        {filteredProjects.map((project, index) => (
          <Link
            to={`/${project._id}`}
            className="hover:text-white mb-5"
            key={index + 1}
          >
            <div className="bg-[#222531] relative  rounded-md border-[1px] border-[#F38010]">
              <div className="relative">
                <img
                  src={project.banner_image}
                  alt="project banner"
                  style={{ maxHeight: "130px", width: "350px" }}
                />
                <img
                  src={project.thumb}
                  className="w-[60px] absolute right-4 -bottom-8"
                  alt="project logo"
                />
                {project.project_status === "TOKEN SALE" ? (
                  <p className="text-white font-bold bg-[#f38010] py-[2px] text-[10px] rounded-sm px-2 absolute top-2 right-4">
                    {project.project_status}
                  </p>
                ) : (
                  <p className="text-white font-bold bg-[#16C784] py-[2px] text-[10px] rounded-sm px-2 absolute top-2 right-4">
                    {project.project_status}
                  </p>
                )}
              </div>

              <div className="px-3 pt-2 pb-12 flex flex-col gap-1">
                <h3 className="text-white font-bold text-sm">
                  {project.project_name}
                </h3>
                <span className="text-[#F38010] text-[10px]">
                  {project.coin_name}
                </span>
                <span className="text-[#9B9BB0] text-[10px]" style={spanStyle}>
                  {project.introduction}
                </span>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex justify-between">
                    <h6 className="text-xs">Amount For Sale</h6>
                    <p className="text-[10px]">
                      ${project.amount_for_sale.toLocaleString("en-US")}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <h6 className="text-xs">TokenPrice</h6>
                    <div className="flex gap-1 items-center">
                      <p className="text-[10px] text-[#F38010]">
                        ${project.token_price}
                      </p>
                      <img
                        alt="bitcoin icon"
                        src={bitcoin}
                        className="w-[18px] h-[19px] bg-[#f38010] p-1 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h6 className="text-xs">Total Raised</h6>
                    <div className="flex gap-1 items-center">
                      <p className="text-[10px] text-[#F38010]">
                        {project.total_raised.toLocaleString("en-US")} /{" "}
                        {project.amount_for_sale.toLocaleString("en-US")} BTC
                      </p>
                      <img
                        alt="bitcoin icon"
                        src={bitcoin}
                        className="w-[18px] h-[19px] bg-[#f38010] p-1 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h6 className="text-xs">Progress</h6>
                    <p className="text-[10px]">{project.progress}%</p>
                  </div>
                </div>
              </div>

              {project.project_status === "TOKEN SALE" ? (
                <div className="bg-[#F38010] absolute bottom-0 py-1 px-2 w-full">
                  <Countdown
                    targetDate={project.token_sale_ends}
                    projectStatus={project.project_status}
                  />
                </div>
              ) : (
                <div className="bg-[#9B9BB0] absolute bottom-0 py-1 px-2 w-full">
                  <Countdown
                    targetDate={project.token_sale_ends}
                    projectStatus={project.project_status}
                  />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default CoinProjectBox;
