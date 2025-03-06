import React from "react";
import { TfiMenu } from "react-icons/tfi";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import profile from '../assets/profile.jpg'


const Navbar = () => {
  return (
    <div className="flex justify-between px-6 py-2 border border-red">
      <div className="flex items-center space-x-4 ">
        <TfiMenu className="text-xl cursor-pointer " />
        <img src={logo} alt="" className="w-15 cursor-pointer " />
      </div>
      <div className="flex w-[45%] items-center ">
        <div className="w-[100%] px-3 py-2 border border-gray-400 rounded-l-full">
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
        <button className="px-4 py-2 border border-gray-400 bg-gray-200 rounded-r-full">
          <CiSearch size={"24px"} />
        </button>

        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-400 rounded-[50%] p-1 cusrsor-pointer  hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex justify-between items-center space-x-4 text-2xl">
      <RiVideoAddLine />
       <FaRegBell />
      <img src={profile} alt="" className="w-[20px] h[20px] "/>
        </div>
    </div>
  );
};

export default Navbar;
