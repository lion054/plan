import React from "react";
import { Link } from "react-router-dom";
import Connect from "./Connect";
import logo from '../../src/assets/logo.png';
import "./Header.css";

function Header() {
  return (
    <>
      <header className="bg-[#16161D] w-full h-16 px-4 sm:px-20 flex justify-between items-center fixed top-0 z-50 ">

        <div className="flex items-center gap-4 sm:gap-8 menu">
          <Link to="/" className="flex items-center gap-2">
            <img
              className="w-10"
              alt="brc"
              src={logo}
            />
            <span className="text-white font-bold"> BRC-20 DAO</span>
          </Link>
          <Link to="/" className="">
            <span className="text-[#9B9BB0] text-xs ">
              <b>{`{  }`} BRC-20</b>
            </span>
          </Link>
          <Link
            id="launchpad"
            to="/launchpad"
            className="flex items-center gap-1 hover:text-[#f38010] "

          >
            <img className="w-5" alt="" src="images/frame.svg" />
            <span className="text-white text-xs ">Launchpad</span>
          </Link>

          <Link to="/" className="text-xs bg-[#362720] rounded-tr-lg rounded-br-lg rounded-tl-lg px-2 py-[1px] absolute top-0 left-[420px]">
            New
          </Link>
        </div>


        <div className="flex items-center gap-2 social">

          <Link
            href="https://twitter.com"
            className="bg-[#9B9BB0] rounded-full p-1"
            target="_blank"
          >
            <img
              className="w-5"
              alt="twitter"
              src="images/group-1510.svg"
            />
          </Link>
          <Link
            href="htps://discord.com"
            className="bg-[#9B9BB0] rounded-full p-1"
            target="_blank"
          >
            <img
              className="w-5"
              alt="discord"
              src="images/frame-5608.svg"
            />
          </Link>

          <Connect />

        </div>
      </header >
    </>
  );
}

export default Header;